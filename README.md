# DietLabs’s shared EsLint config

## Setup

```sh
npm install --save-dev eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
npm install --save-dev git://github.com:DietLabs/eslint-config-dietlabs.git
echo '{"extends": "dietlabs"}' > .eslintrc.json
eslint --fixup .
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
