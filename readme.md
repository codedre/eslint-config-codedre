![version badge](https://img.shields.io/github/package-json/v/codedre/eslint-config-codedre?color=gre&label=eslint-config-codedre&style=for-the-badge)

# My Custom ESLint and Prettier Setup

These are my settings for ESLint and Prettier that I use in my personal projects. It is based off [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos) and [eslint-config-hzdg](https://github.com/hzdg/linter-configs/blob/master/JavaScript/eslint-config-hzdg).

## What it does

- Lints JavaScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes React via eslint-config-airbnb
- Has optional TypeScript linter config

## Installation

```bash
$ npx install-peerdeps --dev @codedre/eslint-config-codedre
```

Create `.eslintrc` file in the root of your project and add the following:

```
{
  "extends": [
    "@codedre/codedre"
  ]
}
```

## TypeScript

Configure eslint to extend the `codedre` TypeScript config:

> **`.eslintrc`**
>
> ```json
> {
>   "extends": ["@codedre/codedre", "@codedre/codedre/typescript"]
> }
> ```

Add the necessary TypesScript peer dependencies:

```sh
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

TypeScript has its own configuration file that is used by the compiler
and other tools, like editor integrations. This project ships with
a `tsconfig.json` that you can extend in your project:

> **`tsconfig.json`**
>
> ```json
> {
>   "extends": "@codedre/eslint-config-codedre/tsconfig"
> }
> ```

> **NOTE for VSCode users:**
>
> The [vscode-eslint] extension does not currently lint `.ts` or `.tsx` files
> by default. To get eslint to run on your TypeScript files,
> configure the extension in VSCode project (or global) settings:
>
> **`.vscode/settings.json`**
>
> ```json
> {
>   "eslint.validate": [
>     "javascript",
>     "javascriptreact",
>     "typescript",
>     "typescriptreact"
>   ]
> }
> ```

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
