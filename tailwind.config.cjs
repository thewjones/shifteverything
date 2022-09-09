const { postcss } = require("tailwindcss");

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'display': ['p22-mackinac-pro', 'sans-serif'],
      'body': ['proxima-nova', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#dfd5d3',
        'secondary': '#083532',
        'accent':'#6faf00',
        'mushroom':'#a7a09e',
      },
      backgroundImage: {
        'activemenu': "url('./src/lib/assets/tail.svg')",
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), postcss, require("daisyui"),],
}
