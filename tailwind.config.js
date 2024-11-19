/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      colors:{
        "base":"#303446",
        "mantle":"#292c3c",
        "crust":"#232634",
        "text-color":"#c6d0f5",
        "subtext-color":"#b5bfe2",
        "redish":"#e78284"
      },
      extend: {},
    },
    plugins: [],
  }