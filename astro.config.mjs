
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  server: {  //delete -afer
    host: true,
    // allowedHosts: ['.loca.lt'],

    allowedHosts: ['.ngrok-free.app'],
    // allowedHosts: ['.serveo.net'],
  },  
  vite: {
    plugins: [tailwindcss()],

  },
  i18n: {
    locales: ["uk", "cs"],
    defaultLocale: "cs",
    
  },

})