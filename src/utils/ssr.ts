export const isBrowser = typeof window !== 'undefined';

export const isServer = typeof window === 'undefined';

export function safeLocalStorage(): Storage | null {
  if (isBrowser && typeof localStorage !== 'undefined') {
    return localStorage;
  }
  return null;
}

export function safeWindow(): Window | null {
  if (isBrowser) {
    return window;
  }
  return null;
}
