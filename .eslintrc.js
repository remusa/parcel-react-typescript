const prettierConfig = {
    "trailingComma": "es5",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 4,
    "semi": false,
    "jsxSingleQuote": true,
    "useTabs": false,
    "jsxBracketSameLine": false,
    "endOfLine": "auto",
    "bracketSpacing": true
}

module.exports = {
    "extends": ["wesbos"],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
        "prettier/prettier": [
            "error",
            prettierConfig
        ],
        "react/jsx-filename-extension": [
            {
                "extensions": [".ts", ".tsx"]
            }
        ],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "no-unused-expression": [true, "allow-tagged-template"]
    }
}
