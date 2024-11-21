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
        "redish":"#e78284",
        "mauve":"#ca9ee6",
        "sky": "#99d1db",
        "shappira": "#85c1dc",
        "bluish":"#8caaee",
        "teal":"#81c8be",
        "lavender":"#babbf1",
      },
      extend: {},
    },
    plugins: [],
  }