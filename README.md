# start-using-typescript-mda 
Start building webresources using TypeScript for model driven app. This is an example project contains all the configuration to setup the workspace. 

## Prerequisites

You must have the following installed before using the project:

- [Node](https://nodejs.org/en/)
- [Nuget CLI](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Folder Structure

![Folder Structure](https://user-images.githubusercontent.com/40472975/169253535-b14e011d-637d-4c64-a1c4-4a340e76de5b.JPG)

## Configuration

Install the packages within script folder

```
cd .\scripts\
```

### Initialize package.json

```
npm init -y
```

### Install typescript library

```
npm install typescript --save-dev
```

### Add tsconfig.json

```
npx tsc -init
```

Add the following config in the tsconfig.json file.

```
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    "target": "es6",  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [], /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    "module": "es6",  /* Specify what module code is generated. */
    "rootDir": "src", /* Specify the root folder within your source files. */
    "moduleResolution": "node", /* Specify how TypeScript looks up a file from a given module specifier. */
    "resolveJsonModule": true,  /* Enable importing .json files */
    "allowJs": true,  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    "outDir": "../dist",  /* Specify an output folder for all emitted files. */
    "allowSyntheticDefaultImports": true, /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,  /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
    "strict": true, /* Enable all strict type-checking options. */
    "skipLibCheck": true,  /* Skip type checking all .d.ts files. */
  },
  "include": ["./src/code/**/*", "typings/"]
}
```

### Install ESLint and Prettier library and plugins

```
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
```

### Create .eslintrc.json

Create a file '.eslintrc.json' and add the following config.

```
{
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "error"
  }
}
```

### Create .prettierrc.json

Create a file '.prettierrc.json' and add the following config.

```
{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": false,
    "printWidth": 120,
    "tabWidth": 2,
    "endOfLine":"auto"
}
```

### Set ESLint Working Directory

Press clt+shift+p -> Open Settings (UI) -> Select the workspace tab -> Search for code action on save -> Click edit in settings.json. Add the following config.

```
{
  "eslint.workingDirectories": ["scripts"],
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```

### Install Webpack library and plugins

```
npm install --save-dev ts-loader webpack webpack-cli webpack-merge clean-webpack-plugin eslint-webpack-plugin
```

### Create Webpack config.js

Create three files, one common file with base config inorder to define the source entry, output file name etc.. The other two file for Dev and PROD.

### Create webpack.common.js

Create a file 'webpack.common.js' and add the following code.

```
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  devtool: "source-map",
  entry: {
    accountForm: "./src/code/account/accountForm.ts"
  },
  output: {
    filename: "[name]/[name].js",
    sourceMapFilename: "[name]/[name].js.map",
    path: path.resolve(__dirname, "../dist"),
    library: ["PowerApps"],
    libraryTarget: "var",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      fix: true,
      extensions: ["ts", "tsx"],
      lintDirtyModulesOnly: true,
      failOnError: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
```

### Create webpack.dev.js

Create a file 'webpack.dev.js' and add the following code.

```
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
module.exports = merge(commonConfig, {
  mode: "development",
  optimization: {
    minimize: false,
  },
});
```

### Create webpack.prod.js

Create a file 'webpack.prod.js' and add the following code.

```
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
module.exports = merge(commonConfig, {
  mode: "production",
});
```

### Create .eslintignore

Create a file '.eslintignore' and add the following config.

```
webpack.dev.js
webpack.prod.js
webpack.common.js
```
### Install @types/xrm declaration files

```
npm install @types/xrm --save-dev
```

### Install moment library

```
npm install moment
```

### Add Scripts execution(lint and build)

Update package.json "scripts" with following details.

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint ./src/code/**/*.ts --fix",
    "build": "webpack --config webpack.dev.js",
    "dist": "webpack --config webpack.prod.js"
  },
```

### Install XrmDefinitelyTyped declaration files

Before installing XrmDefinitelyTyped, uninstall the @type/xrm.

```
npm uninstall @types/xrm
```
Install XrmDefinitelyTyped nuget package:

```
.\tools\nuget.exe install packages.config -OutputDirectory packages

```


