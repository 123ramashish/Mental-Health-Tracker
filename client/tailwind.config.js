// const flowbite = require("flowbite-react/tailwind");
import flowbite from "flowbite-react/tailwind";
import tailwindScrollbar from "tailwind-scrollbar";
// import lineclamp from "@tailwindcss/line-clamp";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    flowbite.content(),
  ],
 theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    }
  },
  plugins: [flowbite.plugin(), tailwindScrollbar],
};
