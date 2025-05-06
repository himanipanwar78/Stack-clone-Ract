import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

theme: {
    extend: {
      colors: {
        customBlue: '#1e40af',
        customeGray: '#E3E6E8 ',
        customeOrange: '#E56F0D'
         // Replace with your custom color
      },
    },
  },

});