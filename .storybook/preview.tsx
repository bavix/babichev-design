import type { Preview } from '@storybook/react-vite';
import { themes } from 'storybook/theming';
import { a11yParameters } from './a11y';
import { I18nProvider } from '../src/i18n';
import { ThemeProvider } from '../src/contexts';
import '../src/styles/main.css';

const preview: Preview = {
  parameters: {
    ...a11yParameters,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      options: {
        dark: {
          name: 'dark',
          value: '#000000',
        },

        light: {
          name: 'light',
          value: '#ffffff',
        }
      }
    },
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['dark', 'light'],
        dynamicTitle: true,
      },
    },
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [{ value: 'en', title: 'English' }],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'dark';
      const locale = context.globals.locale || 'en';

      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(theme);
        document.documentElement.lang = locale;
      }

      return (
        <I18nProvider defaultLocale={locale}>
          <ThemeProvider defaultTheme={theme}>
            <div className={theme}>
              <Story />
            </div>
          </ThemeProvider>
        </I18nProvider>
      );
    },
  ],

  initialGlobals: {
    backgrounds: {
      value: 'dark'
    }
  }
};

export default preview;
