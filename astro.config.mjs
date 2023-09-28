import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  server: {
    port: import.meta.env.PROD ? 3000 : 4321,
  },
  integrations: [tailwind()],
});
