import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import prefetch from "@astrojs/prefetch";

import htaccess from "astro-htaccess";

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
    htaccess({
      generateHtaccessFile: true,
      customRules: [
        "RewriteEngine on",
        "RewriteCond %{REQUEST_FILENAME} !-d",
        "RewriteCond %{REQUEST_FILENAME} !-f",
        "RewriteRule ^([^\.]+)$ $1.html [NC, L]",
      ],
    }),
  ],
});
