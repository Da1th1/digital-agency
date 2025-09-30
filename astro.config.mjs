import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: "https://positivustheme.vercel.app",
  integrations: [tailwind()],
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});