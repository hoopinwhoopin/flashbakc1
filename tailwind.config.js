/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js', "./node_modules/flowbite/**/*.js",flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
        "url('/src/assets/images/tj.svg')",
        newCollection:
          "url('src/assets/images/actualtj.svg')",
          aboutbrand :
          "url('src/assets/images/about.svg')",
      },
    },
  },
  plugins: [require('flowbite/plugin'),flowbite.plugin(),],
};
