// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
// export default defineConfig({});
import path from 'path';
export default defineConfig({
  server: {  //delete -afer
    host: true,
    allowedHosts: ['.serveo.net'], // або точну адресу
  },  
  vite: {
    plugins: [tailwindcss()],
    // resolve: {
    //   alias: {
    //     '@': path.resolve('./src'),
    //   },
    // },
  },
  i18n: {
    locales: ["uk", "cs"],
    defaultLocale: "uk",
    
    // prefixDefaultLocale: true,  // /uk/..., /cs/...
  },

})