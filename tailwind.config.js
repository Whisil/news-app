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
      xl: '1280px',
      'mobile-md': { 'max': '767px' },
      'mobile-xl': { 'max': '1279px' },
    },
    fontSize:{
      xs: '12px',
      sm: '13px',
      '2sm': '15px',
      base:'16px',
      md: '17px',
      '2md': '18px',
      '3md': '20px',
      lg: '30px',
      xl: '40px'
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
          100: '#B5B5B5',
          200: '#4D4D4D',
          300: '#E5E5E5',
        },
      },
      spacing:{
        18: '18px',
        22: '22px',
        // 26: '26px',
        42: '42px',
        60: '60px',
        52: '52px',
        100: '100px'
      },
      borderRadius:{
        32: '32px'
      },
      boxShadow: {
        '2md': '0px 4px 26px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
