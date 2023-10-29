/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./contact.html","./service.html","./about-us.html","./portfolio.html","./casagrande-saravanan.html","./casagrande-shivakumar.html","./anitha-velacherry.html","./casagrande-crescendo.html","./sanitorium.html"],
  theme: {
    extend: {
      fontFamily:{
        worksans : ['Work Sans'],
        merriweather : ['Merriweather Sans'],
      },
      borderRadius: {
        '50': '50%',
      },
      height: {
        '100':'30rem',
        '150': '35rem',
      },
      backgroundImage:{
        'home': "url('/images/contact.svg')",
        'contact': "url('/images/background.jpg')",
        'about': "url('/images/background-2.jpg')",
        'porfolio': "url('/images/portfolio-image.svg')",
        'client-1': "url('/images/casa grande-saravanan.svg')",
        'client-2': "url('/images/casa grande-shivakumar.svg')",
        'client-3': "url('/images/anitha-velacherry.svg')",
        'client-4': "url('/images/casa grande-cresendo.svg')",
        'client-5': "url('/images/client-sanitorium.svg')",
      },
      padding: {
        '6.5' : '1.625rem',
        '4.5' : '1.125rem',
      },
      backgroundColor: {
        'primary': '#fcedeb',
        'light-pink': '#facacb',
      },
      colors: {
        'primary': '#221a1a',
        'light-pink': '#fcedeb',
      },
      screens: {
        'mobile' : {'min':'320px', 'max':'480px'},
        'small-tablet': {'min': '481px', 'max': '768px'},
        'tablet': {'min': '769px', 'max': '1024px'},
        'laptop': {'min': '1024px', 'max':'1160px'},
      },
      width: {
        '30': '7.5rem',
        '3/10' : '30%',
        '55' : '55%',
      },
      fontSize: {
        '1.5xl' : '1.375rem'
      }
    },
  },
  plugins: [],
}

