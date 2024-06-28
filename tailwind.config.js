module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': "MainFont",
      },
      colors: {
        primary: '#333333',
        secondary:'#B4B4B4',
        accent:'#4690FF',
        back:'#FFFFFF',
        back2:'#F5F5F5'
      }
    },
  },
  plugins: [],
}