export type Locale = string;

export type TranslationValue = string | TranslationObject | TranslationFunction;

export interface TranslationObject {
  [key: string]: TranslationValue;
}

export type TranslationFunction = (params?: TranslationParams) => string;

export interface TranslationParams {
  [key: string]: string | number | boolean | Date | null | undefined;
  count?: number;
}

export interface Translations {
  [namespace: string]: TranslationObject;
}

export interface I18nConfig {
  locale: Locale;
  fallbackLocale?: Locale;
  translations: Record<Locale, Translations>;
  pluralRules?: PluralRules;
  dateFormats?: Record<string, Intl.DateTimeFormatOptions>;
  numberFormats?: Record<string, Intl.NumberFormatOptions>;
}

export interface PluralRules {
  [locale: string]: (count: number) => string;
}

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: TranslationParams) => string;
  formatDate: (date: Date | string | number, format?: string) => string;
  formatNumber: (value: number, format?: string) => string;
  formatCurrency: (value: number, currency?: string) => string;
  formatRelativeTime: (date: Date | string | number) => string;
}
