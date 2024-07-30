module.exports = {
	plugins: [require.resolve("prettier-plugin-astro")],
	printWidth: 100,
	tabWidth: 4,
	useTabs: false,
	semi: true,
	singleQuote: true,
	quoteProps: "as-needed",
	trailingComma: "es5",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	jsxBracketSameLine: false,
	jsxSingleQuote: false,
	requirePragma: false,
	insertPragma: false,
	proseWrap: "preserve",
	htmlWhitespaceSensitivity: "strict",
	vueIndentScriptAndStyle: true,
	endOfLine: "lf",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: false,

	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
