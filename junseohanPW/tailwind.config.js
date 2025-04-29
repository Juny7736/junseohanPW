/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F2F7',
          100: '#D9DFE9',
          200: '#B3C0D3',
          300: '#8D9FBD',
          400: '#667EA6',
          500: '#3B4D71', // Primary color
          600: '#2F3E5A',
          700: '#232E44',
          800: '#171F2D',
          900: '#0C0F17',
        },
        accent: {
          50: '#FFF0F0',
          100: '#FFE1E1',
          200: '#FFC3C3',
          300: '#FFA5A5',
          400: '#FF8888',
          500: '#FF6B6B', // Accent color
          600: '#CC5656',
          700: '#994040',
          800: '#662B2B',
          900: '#331515',
        },
        success: {
          500: '#10B981', // Success color
        },
        warning: {
          500: '#F59E0B', // Warning color
        },
        error: {
          500: '#EF4444', // Error color
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '0': '0',
        '1': '0.25rem', // 4px
        '2': '0.5rem',  // 8px
        '3': '0.75rem', // 12px
        '4': '1rem',    // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem',  // 24px
        '8': '2rem',    // 32px
        '10': '2.5rem', // 40px
        '12': '3rem',   // 48px
        '16': '4rem',   // 64px
        '20': '5rem',   // 80px
        '24': '6rem',   // 96px
        '32': '8rem',   // 128px
        '40': '10rem',  // 160px
        '48': '12rem',  // 192px
        '56': '14rem',  // 224px
        '64': '16rem',  // 256px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}