import { useEffect } from 'react';
import { isBrowser } from '../utils/ssr';

export type KeyHandler = (event: KeyboardEvent) => void;

export function useKeyboard(key: string, handler: KeyHandler, enabled = true): void {
  useEffect(() => {
    if (!isBrowser || !enabled) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, handler, enabled]);
}

export function useEscape(handler: KeyHandler, enabled = true): void {
  useKeyboard('Escape', handler, enabled);
}
