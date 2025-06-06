import tailwind from "@astrojs/tailwind";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	vite: {
		resolve: {
			alias: {
				"@": "/src",
				"@components": "/src/components",
			},
		},
	},
	output: "static",
	build: {
		inlineStylesheets: "auto",
	},
});
