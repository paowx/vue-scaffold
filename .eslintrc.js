// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    "quotes": [1, "single"],                // 引号类型：使用单引号
    "semi": ["error", "never"],             // 禁止分号作为语句结尾
    "eqeqeq": 0,                            // 关闭强制使用 '===' 和 '!==' 来做判断比较
    "no-unused-vars": 0,                    // 关闭强制 声明未使用变量
    "space-before-function-paren": 0,       // 关闭函数名后的空格
    "prefer-const": 0,                      // 关闭首选const
    "no-undef": 0,                          // 关闭不能使用未定义变量
    "no-tabs": 0,
    "camelcase": 0,
    "no-debugger": "warn",
    "no-multiple-empty-lines": [1, {"max": 2}], // 空行最多不能超过2行
    "spaced-comment": 0, //注释风格要不要有空格什么的
    "no-unneeded-ternary": 0,
    "no-useless-escape": 0
  }
}
