/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      './src/app/home/navigation/navigation.component.html',
      './src/app/home/about/about.component.html',
      './src/app/home/projects/projects.component.html',
      './src/app/projects/project-directory.component.html',
      './src/app/footer/footer.component.html',
      './src/app.component.ts'
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Avenir', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
  }
}
