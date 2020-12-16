module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      },
      rules: {
        'class-methods-use-this': 'off',
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        'no-param-reassign': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        '@typescript-eslint/camelcase': 'off',
        'object-curly-spacing': 'error',
        "semi": "error",
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/indent": ["error", 2],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': ["error", { "allow": ["arrowFunctions"] }],
        'vue/html-closing-bracket-newline': ["error", {
          "singleline": "never",
          "multiline": "always"
        }],
        'vue/html-indent': 1,
        'vue/max-attributes-per-line': ["error", {
          "singleline": 2,
          "multiline": {
            "max": 1,
            "allowFirstLine": true,
          }
        }]
      },
    }
  ]
};
