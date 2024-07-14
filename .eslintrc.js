module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "quotes": [2, "double", { "avoidEscape": false }],
        "semi": [2, "always"],
        "comma-dangle": [2, "always-multiline"],
        "no-trailing-spaces": ["error"],
        "react/react-in-jsx-scope": "off",
    },
};
