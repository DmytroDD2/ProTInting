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



  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'cs',
        locales: {
          cs: 'cs',
          uk: 'uk'
        }
      },

    
      serialize: (item) => ({
        url: item.url,
        lastmod: (item.lastmod ? new Date(item.lastmod).toISOString().split('T')[0] : undefined),
        changefreq: 'weekly',
        priority: item.url === 'https://gradec-kralove.netlify.app/cs/home/' || item.url === "https://gradec-kralove.netlify.app/uk/home/" ? 1.0 : 0.7
      })
    })
  ]
})