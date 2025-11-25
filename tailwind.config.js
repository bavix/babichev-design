/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pixel: {
          // Dark theme colors
          'bg-dark': '#000000',
          'bg-dark-dark': '#0a0a0a',
          'bg-dark-light': '#1a1a1a',
          'border-dark': '#22c55e',
          'border-dark-light': '#4ade80',
          'text-dark': '#22c55e',
          'text-dark-muted': '#16a34a',
          'accent-dark': '#eab308',
          'accent-dark-dark': '#ca8a04',
          // Light theme colors
          'bg-light': '#fafafa',
          'bg-light-dark': '#f0f0f0',
          'bg-light-light': '#ffffff',
          'border-light': '#065f46',
          'border-light-light': '#047857',
          'text-light': '#064e3b',
          'text-light-muted': '#065f46',
          'accent-light': '#c2410c',
          'accent-light-dark': '#9a3412',
        },
      },
      fontFamily: {
        pixel: ['Courier New', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.3s ease-in',
        'error-pulse': 'error-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'error-pulse': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};

