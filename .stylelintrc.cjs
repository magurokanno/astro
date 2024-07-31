module.exports = {
    overrides: [
        {
            files: ['*.astro', '**/*.astro,**/*.scss', 'src/**/*.tsx', 'src/**/*.ts'],

            // `*.astro` では postcss-html を指定しないとシンタックスエラーになってしまう
            customSyntax: 'postcss-html',

            rules: {
                // 次の擬似クラスの使用を許可
                // :global()
                'selector-pseudo-class-no-unknown': [
                    true,
                    {
                        ignorePseudoClasses: ['global'],
                    },
                ],
            },
        },
    ],
    plugins: ['stylelint-scss'],
    extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
    rules: {
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        'no-invalid-double-slash-comments': null,
        'alpha-value-notation': [
            'number',
            {
                exceptProperties: [
                    'opacity',
                    'fill-opacity',
                    'flood-opacity',
                    'stop-opacity',
                    'stroke-opacity',
                ],
            },
        ],
        'at-rule-no-unknown': [
            true,
            { ignoreAtRules: ['include', 'mixin', 'each', 'charset', 'use'] },
        ],
        'length-zero-no-unit': true,
        'color-named': 'never',
        'color-hex-length': null,
        'color-function-notation': 'legacy',
        'custom-property-pattern': '^[a-zA-Z][a-zA-Z0-9_-]+$',
        'declaration-block-single-line-max-declarations': 1,
        'selector-id-pattern': '^[a-zA-Z][a-zA-Z0-9_-]+$',
        'selector-class-pattern': '^[a-zA-Z][a-zA-Z0-9_-]+$',
        'keyframes-name-pattern': null,
        'scss/at-mixin-pattern': null,
        'scss/dollar-variable-pattern': null,
        'scss/percent-placeholder-pattern': null,
        'scss/at-extend-no-missing-placeholder': null,
        'function-url-quotes': ['always', { severity: 'warning' }],
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/selector-no-union-class-name': null,
        'function-url-no-scheme-relative': null,
        'number-max-precision': null,
        'font-family-name-quotes': ['always-where-recommended', { severity: 'warning' }],
        'property-no-vendor-prefix': [
            true,
            {
                ignoreProperties: ['appearance', 'text-size-adjust'],
            },
        ],
    },
};
