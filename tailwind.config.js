/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#75A1D3',
          synch: '#227C9D',
          dark: '#0F91D2',
          light: '#8FC2D5',
          extralight: '#F1F8FB',
          darker: '#235FA9',
          morelighter: '#e3ecf6',
        },
        secondary: {
          DEFAULT: '#7A7A7A',
          disabled: '#C5C7C6',
          extralight: '#F4F4F4',
          morelighter: '#F9F9F9',
          lighter: '#D9D9D9',
          light: '#BEBEBE',
          lesslight: '#444747',
          medium: '#615F5F',
          moredark: '#2E3131',
          dark: '#2E2E2E',
        },
        danger: {
          DEFAULT: '#FA646A',
          lighter: '#FFEBEB',
          light: '#EBE4D8',
        },
        success: {
          DEFAULT: '#14AD9E',
          extralight: '#E1E3E2',
          lighter: '#EFF1F0',
          light: '#749F91',
          dark: '#78C58E',
        },
        warning: {
          DEFAULT: '#FAC46E',
          extralight: '#FEF9EF',
          lighter: '#FAF7F0',
          light: '#FAEBD2',
          medium: '#E8C998',
        },
      },
    },
  },
  plugins: [],
}

