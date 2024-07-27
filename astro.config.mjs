import { defineConfig } from "astro/config";
import remarkHeadingId from "remark-heading-id";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	// ***** トップレベル
	// EDIT 最終的な出力URL
	site: "https://www.my-site.dev",
	// ****- 拡張機能：サイトマップ生成
	integrations: [sitemap()],
	// ****- vite
	vite: {},
	// ***** ビルド
	// ****- JSやCSSなどのアセットが出力されるディレクトリ
	build: {
		assets: "_assets",
	},
	// *****MD
	// ****-MDの見出しIDを設定する：remark-heading-id
	markdown: {
		remarkPlugins: [remarkHeadingId],
	},
});
