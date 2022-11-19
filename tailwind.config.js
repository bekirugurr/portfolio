/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily:{
        body: ['"Red Hat Display"', 'sans-serif']
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        js: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(45rem) translateY(-50rem) rotate(720deg)'}
        },
        js2: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '30%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(65rem) translateY(50rem) rotate(720deg)'}
        },
        ts: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(720deg)'},
          '30%': { transform: 'translateX(0) translateY(0) rotate(720deg)'},
          '100%': { transform: 'translateX(-45rem) translateY(-50rem) rotate(0deg)'}
        },
        ts2: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(20rem) translateY(55rem) rotate(1080deg)'}
        },
        react: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(65rem) translateY(50rem) rotate(1080deg)'}
        },
        react2: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '50%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(-75rem) translateY(50rem) rotate(1080deg)'}
        },
        next: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(-90rem) translateY(-30rem) rotate(1080deg)'}
        },
        html: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '25%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(75rem) translateY(-30rem) rotate(1080deg)'}
        },
        django: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(-50rem) translateY(27rem) rotate(1080deg)'}
        },
        python: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '10%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(75rem) translateY(30rem) rotate(1080deg)'}
        },
        python2: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '20%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(-100rem) translateY(-20rem) rotate(1080deg)'}
        },
        redux: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '45%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(-75rem) translateY(30rem) rotate(1080deg)'}
        },
        tailwind: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '20%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(-75rem) translateY(75rem) rotate(1080deg)'}
        },
        tailwind2: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          // '40%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(100rem) translateY(25rem) rotate(1080deg)'}
        },
        bootstrap: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '45%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(-75rem) translateY(-70rem) rotate(1080deg)'}
        },
        psql: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '40%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(60rem) translateY(30rem) rotate(1080deg)'}
        },
        css: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '30%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(30rem) translateY(60rem) rotate(1080deg)'}
        },
        sass: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '20%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(45rem) translateY(-70rem) rotate(1080deg)'}
        },
        jest: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '10%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(35rem) translateY(30rem) rotate(1080deg)'}
        },
        jQuery: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '30%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(-15rem) translateY(20rem) rotate(1080deg)'}
        },
        mui: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '10%': { transform: 'translateX(0) translateY(0) rotate(0deg)'},
          '100%': { transform: 'translateX(55rem) translateY(-20rem) rotate(1080deg)'}
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'js-roll': 'js 20s linear infinite',
        'js2-roll': 'js2 40s linear infinite',
        'ts-roll': 'ts 30s linear infinite',
        'ts2-roll': 'ts2 30s linear infinite',
        'react-roll': 'react 35s linear infinite',
        'react2-roll': 'react2 60s linear infinite',
        'next-roll': 'next 35s linear infinite',
        'html-roll': 'html 28s linear infinite',
        'django-roll': 'django 22s linear infinite',
        'python-roll': 'python 25s linear infinite',
        'python2-roll': 'python2 50s linear infinite',
        'redux-roll': 'redux 40s linear infinite',
        'tailwind-roll': 'tailwind 48s linear infinite',
        'tailwind2-roll': 'tailwind2 38s linear infinite',
        'bootstrap-roll': 'bootstrap 48s linear infinite',
        'psql-roll': 'psql 30s linear infinite',
        'css-roll': 'css 32s linear infinite',
        'jest-roll': 'jest 20s linear infinite',
        'sass-roll': 'sass 32s linear infinite',
        'jQuery-roll': 'jQuery 21s linear infinite',
        'mui-roll': 'mui 25s linear infinite',
      },
    },
  },
  plugins: [],
}
