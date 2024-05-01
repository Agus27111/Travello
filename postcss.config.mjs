/** @type {import('postcss').Plugin[]} */
const plugins = [
  require('postcss-import'),
  require('tailwindcss'),
  require('postcss-custom-properties'),
  // Daftar plugin lainnya jika Anda membutuhkannya
];

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-custom-properties': {},
    // Anda juga dapat menambahkan plugin lain yang Anda butuhkan di sini
  },
};
