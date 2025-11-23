/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        'phi': '1.618rem',
        'phi-half': '0.809rem',
        'phi-double': '3.236rem',
        'phi-triple': '4.854rem',
      },
      fontFamily: {
        'kalam': ['Kalam', 'cursive'],
        'caveat': ['Caveat', 'cursive'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'patrick-hand': ['Patrick Hand', 'cursive'],
        'gochi-hand': ['Gochi Hand', 'cursive'],
        'sacramento': ['Sacramento', 'cursive'],
        body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        contact: '0 1px 2px rgba(0,0,0,0.08)',
        proximity: '0 2px 4px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04)',
        elevated: '0 2px 5px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)',
        dramatic: '0 10px 30px rgba(0,0,0,0.12), 0 30px 60px rgba(0,0,0,0.08), 0 50px 100px rgba(0,0,0,0.06)',
        inset: 'inset 0 2px 4px rgba(0,0,0,0.06)',
      },
      colors: {
        stone: {
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        yellow: {
          100: '#fef9c3',
        },
        amber: {
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
          800: '#92400e',
        },
        cyan: {
          400: '#5eead4',
          600: '#0891b2',
        },
        green: {
          600: '#16a34a',
          700: '#15803d',
        },
        blue: {
          100: '#e0f2ff',
          800: '#1e3a8a',
        },
        rose: { // NEW color
          400: '#f472b6',
          600: '#e879f9',
        },
        // New harmonious additions
        mint: '#a7f3d0',
        lavender: '#ddd6fe',
        coral: '#fb7185',
        electric: '#3b82f6',
        // Deep neutrals
        charcoal: {
          100: '#f7f7f7',
          200: '#e0e0e0',
          300: '#c7c7c7',
          400: '#a0a0a0',
          500: '#7a7a7a',
          600: '#555555',
          700: '#3a3a3a',
          800: '#2a2a2a',
          900: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
}
