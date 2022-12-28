/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          DEFAULT: '#9381FF',
          hover: '#a0a0fc',
          template: '#F8F7FF',
          detail: '#FFEEDD',
          detailhover: '#FFD8BE',
        },
      },
    },
    plugins: [],
  },
}
