import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/utils/readingTime";
import oneDarkPro from './src/utils/shiki-theme/one-dark-pro.json';


// const t = shiki.loadTheme('./one-dark-pro')



// https://astro.build/config
export default defineConfig({
  site: 'https://tuplelog.com',
  integrations: [
      mdx(),
      sitemap(),
      tailwind({
        config: {
          applyBaseStyles: false
        }
      })
  ],
  markdown:{
      shikiConfig: {
          theme: oneDarkPro,
          wrap: true,
      },
      extendDefaultPlugins: true,
      remarkPlugins: [remarkReadingTime],
  }
});