import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://gt-dev.vercel.app",
  output: "static",
  integrations: [
    tailwind(),
    react(),
    compress({
      path: "./.vercel/output/static",
    }),
    sitemap(),
    robotsTxt({
      sitemap: true,
    }),
    prefetch(),
  ],
});
