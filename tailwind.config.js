module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize:{
      xs: '12px',
      sm: '13px',
      base:'16px',
      md: '17px',
      '2md': '18px',
      lg: '30px',
    },
    
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000842'
        },
        blue: '#0C21C1',
        gray: {
          DEFAULT: '#999999',
          100: 'B5B5B5',
          200: '#4D4D4D'
        },
      },
      spacing:{
        18: '18px',
        22: '22px',
        // 26: '26px',
        100: '100px'
      },
    },
  },
  plugins: [],
}
