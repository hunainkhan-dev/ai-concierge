/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0A09', // near-black charcoal
        panel: '#171311',
        line: '#2A231F',
        cream: '#F5EFE7',
        muted: '#A89B8C',
        saffron: { DEFAULT: '#E8A33D', dark: '#C9842A' },
        sage: '#7C9A7E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeup: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'none' } },
        pop: { '0%': { opacity: '0', transform: 'scale(.9) translateY(10px)' }, '100%': { opacity: '1', transform: 'none' } },
        blink: { '0%,100%': { opacity: '.2' }, '50%': { opacity: '1' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
      },
      animation: {
        fadeup: 'fadeup .7s cubic-bezier(.2,.8,.2,1) both',
        pop: 'pop .35s cubic-bezier(.2,.8,.2,1) both',
        blink: 'blink 1.2s infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
