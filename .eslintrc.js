module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "airbnb",
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "comma-dangle": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": "warn",
    "no-console": 1,
    "no-unexpected-multiline": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }]
  }

}
