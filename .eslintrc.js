module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": new Date().getFullYear(),
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  "plugins": [
    "prettier",
    "react-hooks"
  ],
  "rules": {
    "eslint-comments/no-unused-disable": 'error',
    "eslint-comments/disable-enable-pair": 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'error',
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "singleQuote": true,
        "trailingComma": 'all',
      }
    ],
  }
}