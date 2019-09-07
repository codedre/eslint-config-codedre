![version badge](https://img.shields.io/github/package-json/v/codedre/eslint-config-codedre?color=gre&label=eslint-config-codedre&style=for-the-badge)

# My Custom ESLint and Prettier Setup

These are my settings for ESLint and Prettier that I use in my personal projects. It is based off [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos) and [eslint-config-hzdg](https://github.com/hzdg/linter-configs/blob/master/JavaScript/eslint-config-hzdg).

## TODO

- [ ] add typescript

## What it does

- Lints JavaScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes React via eslint-config-airbnb

## With VS Code

Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
  // These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
```
