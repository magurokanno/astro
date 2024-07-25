import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	return rss({
		title: "出力されるXMLの`<title>`フィールド",
		description: "出力されるXMLの`<description>`フィールド",
		site: context.site ?? "",
		// EDIT コンテンツに応じてitemsを記述する
		items: [], // RSSで配信するコンテンツ
		// stylesheet: "スタイルシートの絶対パス",
	});
}
