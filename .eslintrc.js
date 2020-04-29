module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended'
    ],
    plugins: [
        'prettier'
    ],
    rules: {
        'prettier/prettier': ['error', {
            "tabWidth": 4,
            "endOfLine": "auto"
        }]
    }
}
