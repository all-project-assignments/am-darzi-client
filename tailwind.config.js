/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
            title: `2.6rem;`,
            normal: '1.8rem',
            paragraph: `1.2rem;`
          },
        fontFamily : {
            'gotham': ['Poppins'],
            'great': ['Great Vibes', 'sans']
        },
        colors: {
            primary: '#B87E32',
            textColor: '#C0C5BE',
            textSecondary: '#422814',
            lightPink: '#D35885',
            pink: '#D15985',
        }
    },
  },
  plugins: [],
}