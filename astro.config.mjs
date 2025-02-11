import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkHeadingId from 'remark-heading-id';

// https://astro.build/config
export default defineConfig({
    // ***** トップレベル
    // EDIT 最終的な出力URL
    site: 'https://8ware-d.com',
    // ****- 拡張機能：サイトマップ生成
    integrations: [
        sitemap(),
        mdx(),
        partytown({
            // Adds dataLayer.push as a forwarding-event.
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
    // ****- vite
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // EDIT importしたいグローバルscssファイルを記載
                    additionalData: `
					@use "@styles/variable.scss" as *;
					@use "@styles/mixin.scss" as *;
					`,
                },
            },
        },
    },
    // ***** ビルド
    // ****- JSやCSSなどのアセットが出力されるディレクトリ
    build: {
        assets: '_assets',
    },
    // *****MD
    // ****-MDの見出しIDを設定する：remark-heading-id
    markdown: {
        remarkPlugins: [remarkHeadingId],
    },
});
