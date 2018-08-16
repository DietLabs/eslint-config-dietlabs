# DietLabs’s shared EsLint config

## Setup

### Install package with its’ peer dependencies

```sh
npx install-peerdeps --dev @dietlabs/eslint-config
```

### Use the configuration

```sh
echo '{"extends": "@dietlabs"}' > .eslintrc.json
```

### Add `lint-js` npm script and run it

```sh
npx add-npm-scripts lint-js "eslint --fixup --ext .js,.jsx ./" --warn
npm run lint-js
```

## Lint while WebPackin’

```sh
npm install --save-dev eslint-loader
```

Then in `webpack.config.js`:

```js
const lintingRules = require('eslint-config-dietlabs/webpack-rules');

module.exports = {
    rules: [
        // Your rules
    ].concat(lintingRules)
};
```


## Lint while commitin’

You want something in the shape of:

```sh
#!/bin/bash

CODE=0
for FILE in $( git diff --cached --name-only --diff-filter=ACM HEAD -- '*.js' '*.jsx' )
do
    git show ":$FILE" \
        | ./node_modules/.bin/eslint --stdin --stdin-filename "$FILE" \
        || CODE=$?
done

return $CODE
```
