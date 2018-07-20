module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "extends": "airbnb",
    "rules": {
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "prefer-destructuring": "off",
        "react/destructuring-assignment": "off",
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
        }],
        "jsx-a11y/label-has-for": [ "error", {
            "required": {
                "some": [ "nesting", "id" ]
            }
        }],
        "no-restricted-syntax": [
          "error",
          {
            "selector": "ForInStatement",
            "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
          },
          {
            "selector": "ForOfStatement // DISABLED",
            "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
          },
          {
            "selector": "LabeledStatement",
            "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
          },
          {
            "selector": "WithStatement",
            "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
          }
        ]
    }
};
