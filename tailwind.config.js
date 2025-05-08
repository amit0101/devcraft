/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B4D8',
          dark: '#0096B7',
        },
        secondary: '#1A365D',
        accent: {
          DEFAULT: '#FD7014',
          dark: '#E05A00',
        },
        slate: {
          DEFAULT: '#708090',
          light: '#8C99A6',
          dark: '#566573'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        serif: ['Playfair Display', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#1A365D',
              '&:hover': {
                color: '#0F2444',
              },
            },
            h1: {
              color: '#1A365D',
              fontFamily: 'Montserrat, system-ui, sans-serif',
            },
            h2: {
              color: '#1A365D',
              fontFamily: 'Montserrat, system-ui, sans-serif',
            },
            h3: {
              color: '#1A365D',
              fontFamily: 'Montserrat, system-ui, sans-serif',
            },
            h4: {
              color: '#1A365D',
              fontFamily: 'Montserrat, system-ui, sans-serif',
            },
            blockquote: {
              borderLeftColor: '#1A365D',
              color: '#4B5563',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: '#1A365D',
              backgroundColor: '#F3F4F6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            pre: {
              backgroundColor: '#1A365D',
              color: '#F3F4F6',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 