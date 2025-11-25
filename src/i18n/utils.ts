import type { TranslationObject, TranslationParams, Locale, PluralRules } from './types';

export function getNestedValue(
  obj: TranslationObject | Record<string, unknown>,
  path: string
): string | TranslationObject | undefined {
  const keys = path.split('.');
  let current: TranslationObject | Record<string, unknown> | string | undefined = obj;

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key] as
      | TranslationObject
      | Record<string, unknown>
      | string
      | undefined;
  }

  if (typeof current === 'string') {
    return current;
  }

  if (current && typeof current === 'object') {
    return current as TranslationObject;
  }

  return undefined;
}

export function interpolate(template: string, params?: TranslationParams): string {
  if (!params || Object.keys(params).length === 0) {
    return template;
  }

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = params[key];
    if (value === null || value === undefined) {
      return match;
    }
    return String(value);
  });
}

export function getPluralKey(
  key: string,
  count: number,
  locale: Locale,
  pluralRules?: PluralRules
): string {
  if (count === 0 && pluralRules?.[locale]) {
    const rule = pluralRules[locale];
    const suffix = rule(count);
    return `${key}.${suffix}`;
  }

  if (count === 1) {
    return `${key}.one`;
  }

  if (count > 1) {
    return `${key}.other`;
  }

  return `${key}.zero`;
}

export function getDefaultPluralRules(): PluralRules {
  return {
    en: (count: number) => {
      if (count === 1) return 'one';
      return 'other';
    },
    ru: (count: number) => {
      const mod10 = count % 10;
      const mod100 = count % 100;

      if (mod10 === 1 && mod100 !== 11) return 'one';
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'few';
      return 'many';
    },
  };
}

export function formatDate(
  date: Date | string | number,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return String(date);
  }

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

export function formatNumber(
  value: number,
  locale: Locale,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatCurrency(
  value: number,
  locale: Locale,
  currency: string = 'USD',
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...options,
  }).format(value);
}

export function formatRelativeTime(date: Date | string | number, locale: Locale): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return String(date);
  }

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const now = new Date();
  const diffInSeconds = Math.floor((dateObj.getTime() - now.getTime()) / 1000);

  const intervals: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1],
  ];

  for (const [unit, secondsInUnit] of intervals) {
    const interval = Math.floor(Math.abs(diffInSeconds) / secondsInUnit);
    if (interval >= 1) {
      return rtf.format(diffInSeconds < 0 ? -interval : interval, unit);
    }
  }

  return rtf.format(0, 'second');
}
