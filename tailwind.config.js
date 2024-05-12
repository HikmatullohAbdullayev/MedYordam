/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max':'360px'},
      // => @media (max-width: 360px) { ... }
      
     
      
      'mobile530': {'max':'530px'},
      // => @media (max-width: 530px) { ... }
      
      'mobil640': {'max':'640px'},
      // => @media (max-width: 640px) { ... }
     
      'mobil670': {'max':'670px'},
      // => @media (max-width: 670px) { ... }
     
      'mobil675': {'max':'675px'},
      // => @media (max-width: 670px) { ... }

      'mobile3': {'max': '768px'},
      // => @media (max-width: 768px) { ... }
      
      'tablemin845': {'max': '845px'},
      // => @media (max-width: 845px) { ... }

      'table1005': {'max':'1005px'} ,
      // => @media (max-width: 1005px) { ... }

      'table': {'max':'1024px'} ,
      // => @media (max-width: 1024px) { ... }
     
      'table1080': {'max':'1080px'} ,
      // => @media (max-width: 1080px) { ... }
      
      'table1170': {'max':'1170px'} ,
      // => @media (max-width: 1170px) { ... }

      'desktop1220': {'max':'1220px'} ,
      // => @media (max-width: 1220px) { ... }

      'desktop': {'max':'1280px'} ,
      // => @media (max-width: 1280px) { ... }
     
      'desktop1350': {'max':'1350px'} ,
      // => @media (max-width: 1350px) { ... }
    },
  },
  plugins: [],
}