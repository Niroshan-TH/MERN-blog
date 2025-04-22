// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

module.export ={
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "node-modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: { extend: {} },
  plugins: [require('flowbite/plugin')],
};
