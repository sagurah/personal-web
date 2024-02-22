/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        motivation: {
          words: ['Hardworking', 'Humble', 'Curious', 'Adaptive', 'Optimistic', 'Collaborative', 'Respectful', 'Responsible', 'Reliable', 'Trustworthy'],
          delay: 1.5
        }
      }
    })
  ],
}

