import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://gradec-kralove.netlify.app',

  server: {  //delete -afer
    host: true,
    // allowedHosts: ['.loca.lt'],

    // allowedHosts: ['.ngrok-free.app'],
    // allowedHosts: ['.serveo.net'],
  },

  vite: {
    plugins: [tailwindcss()],

  },

  // i18n: {
  //   locales: ["uk", "cs"],
  //   defaultLocale: "cs",
    
  // },

  // integrations: [sitemap()],

  integrations: [

    sitemap({
      i18n: {
        defaultLocale: 'cs',
        locales: {
          uk: 'uk',
          cs: 'cs'
        }
      },
      
      entryLimit: 50000,
      // changefreq: 'weekly',
      // priority: 0.7,
      // lastmod: new Date(),
    })
  ]
})