import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import { en } from './locales/en';
import type {
  Locale,
  Translations as TranslationsType,
  TranslationParams,
  I18nContextValue,
  I18nConfig,
} from './types';
import {
  getNestedValue,
  interpolate,
  getPluralKey,
  getDefaultPluralRules,
  formatDate as formatDateUtil,
  formatNumber as formatNumberUtil,
  formatCurrency as formatCurrencyUtil,
  formatRelativeTime as formatRelativeTimeUtil,
} from './utils';

const defaultTranslations: Record<Locale, TranslationsType> = {
  en,
};

export interface I18nProviderProps {
  children: React.ReactNode;
  defaultLocale?: Locale;
  fallbackLocale?: Locale;
  translations?: Record<Locale, Partial<TranslationsType>>;
  config?: Partial<I18nConfig>;
  storageKey?: string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  defaultLocale = 'en',
  fallbackLocale = 'en',
  translations: customTranslations,
  config,
  storageKey = 'babichev-locale',
}) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') {
      return defaultLocale;
    }
    const stored = localStorage.getItem(storageKey);
    return stored || defaultLocale;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, locale);
      document.documentElement.lang = locale;
    }
  }, [locale, storageKey]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const allTranslations = useMemo(() => {
    const merged: Record<Locale, TranslationsType> = { ...defaultTranslations };
    if (customTranslations) {
      Object.keys(customTranslations).forEach((loc) => {
        merged[loc] = {
          ...defaultTranslations['en'],
          ...customTranslations[loc],
        } as TranslationsType;
      });
    }
    return merged;
  }, [customTranslations]);

  const pluralRules = useMemo(() => {
    return config?.pluralRules || getDefaultPluralRules();
  }, [config?.pluralRules]);

  const translate = useCallback(
    (key: string, params?: TranslationParams): string => {
      const currentTranslations = allTranslations[locale] || {};
      const fallbackTranslations = allTranslations[fallbackLocale] || {};
      const defaultTranslationsObj = allTranslations[defaultLocale] || {};

      let translationValue: any;

      const englishTranslations = defaultTranslations['en'];

      if (params?.count !== undefined) {
        const pluralKey = getPluralKey(key, params.count, locale, pluralRules);
        translationValue =
          getNestedValue(currentTranslations as any, pluralKey) ||
          getNestedValue(fallbackTranslations as any, pluralKey) ||
          getNestedValue(defaultTranslationsObj as any, pluralKey) ||
          getNestedValue(englishTranslations as any, pluralKey) ||
          getNestedValue(currentTranslations as any, key) ||
          getNestedValue(fallbackTranslations as any, key) ||
          getNestedValue(defaultTranslationsObj as any, key) ||
          getNestedValue(englishTranslations as any, key);
      } else {
        translationValue =
          getNestedValue(currentTranslations as any, key) ||
          getNestedValue(fallbackTranslations as any, key) ||
          getNestedValue(defaultTranslationsObj as any, key) ||
          getNestedValue(englishTranslations as any, key);
      }

      if (!translationValue || typeof translationValue !== 'string') {
        if (typeof window !== 'undefined' && (window as any).__DEV__ !== false) {
          console.warn(`[i18n] Translation missing for key: ${key} (locale: ${locale})`);
        }
        return key;
      }

      return interpolate(translationValue, params);
    },
    [locale, fallbackLocale, defaultLocale, allTranslations, pluralRules]
  );

  const formatDate = useCallback(
    (date: Date | string | number, format?: string) => {
      const options =
        format && config?.dateFormats?.[format] ? config.dateFormats[format] : undefined;
      return formatDateUtil(date, locale, options);
    },
    [locale, config?.dateFormats]
  );

  const formatNumber = useCallback(
    (value: number, format?: string) => {
      const options =
        format && config?.numberFormats?.[format] ? config.numberFormats[format] : undefined;
      return formatNumberUtil(value, locale, options);
    },
    [locale, config?.numberFormats]
  );

  const formatCurrency = useCallback(
    (value: number, currency?: string) => {
      return formatCurrencyUtil(value, locale, currency);
    },
    [locale]
  );

  const formatRelativeTime = useCallback(
    (date: Date | string | number) => {
      return formatRelativeTimeUtil(date, locale);
    },
    [locale]
  );

  const value: I18nContextValue = useMemo(
    () => ({
      locale,
      setLocale,
      t: translate,
      formatDate,
      formatNumber,
      formatCurrency,
      formatRelativeTime,
    }),
    [locale, setLocale, translate, formatDate, formatNumber, formatCurrency, formatRelativeTime]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext);
  if (!context) {
    const fallbackTranslate = (key: string) => key;
    const fallbackFormat = () => '';
    return {
      locale: 'en',
      setLocale: () => {},
      t: fallbackTranslate,
      formatDate: fallbackFormat,
      formatNumber: fallbackFormat,
      formatCurrency: fallbackFormat,
      formatRelativeTime: fallbackFormat,
    };
  }
  return context;
};
