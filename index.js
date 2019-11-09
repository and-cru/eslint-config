module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    semi: [2, "never"],
    "no-param-reassign": "off",
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        semi: false,
        trailingComma: "es5",
        printWidth: 100,
      },
    ],
  },
  plugins: ["prettier", "react-hooks"],
}
