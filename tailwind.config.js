/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/pexels-pixabay-262978.jpg')",
        'main1': "url('/src/assets/pexels-toa-heftiba-şinca-940302.jpg')",
        'beverages': "url('/src/assets/pexels-photo-10927822.jpeg')",
        'dessert': "url('/src/assets/dessert.jpg')",
        'breakfast': "url('/src/assets/breakfast.jpeg')",
        'lunchDinner': "url('/src/assets/lunchDinner.jpg')",
        'lunch': "url('/src/assets/lunch.jpg')",
        'special': "url('/src/assets/special.jpg')",
        'snacks': "url('/src/assets/Snaks.jpg')",
        'empty': "url('/src/assets/Empty.jpeg')",
        'edit': "url('/src/assets/edit-button.png')",
        'delete': "url('/src/assets/delete-button.png')",
      },
      fontFamily: {
        'sans': ['"Satisfy"', ],
      },
    },
  },
  plugins: [],
}

