module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["airbnb-base", "prettier"],
  rules: {
    "no-process-exit": "error",
    "no-console": "error",
    "import/extensions": "off",
    "func-style": ["error", "expression"],
    "max-depth": ["error", 2], // indent(인덴트, 들여쓰기) depth를 2까지만 허용한다.
    "no-ternary": "error", // 삼항연산자를 사용하지 않는다.
  },
};
