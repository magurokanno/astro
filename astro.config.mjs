import { defineConfig } from "astro/config";
import remarkHeadingId from "remark-heading-id";

// https://astro.build/config
export default defineConfig({
	// *****MD
	// ****-MDの見出しIDを設定する：remark-heading-id
	markdown: {
		remarkPlugins: [remarkHeadingId],
	},
});
