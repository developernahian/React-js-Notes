/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // font primary ta index.css file theke body{color: ...} hisebe use korechi. tai ekhane comment kore rekhechi... 
        // primary: "rgb(19, 19, 19)",
        secondary: "rgba(19, 19, 19, 0.7)",
        tertary: "rgba(19, 19, 19, 0.6)",
        white_primary: "rgb(255, 255, 255)",
        white_secondary: "rgba(255, 255, 255, 0.7)",
        white_teritary: "rgba(255, 255, 255, 0.6)",
      },

      fontFamily: {
        // sora font index.css file theke body te use korechi tai ekhane comment kore rekhechi
        // className="font-inter" evabe intear font tailwindcss e use kora jabe
        // sora: ["Sora"],
        inter: ["Inter"],
      },

      backgroundImage: {
        // bgShadow: "url('bg-shadow.png')",//surge Deploy te image paina tai evabe na niye assets/images theke import kore use korechi
      },

    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

