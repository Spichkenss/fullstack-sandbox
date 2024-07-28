module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "class-methods-use-this": "off",
    "no-empty-function": "off",
    "no-useless-constructor": "off",
    "no-unused-vars": "off",
  },
};
