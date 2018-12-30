module.exports = {
  extends: [
    'google',
    'plugin:jest/recommended',
  ],
  plugins: [
    'jest',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  rules: {
    'no-invalid-this': ["off"],
    "max-len": [
      "warn", {
        "code": 80, 
        "tabWidth": 2,
        "ignorePattern": "^\\s*const\\s.+=\\s*require\\s*\\(",
        "ignoreComments": true,
        "ignoreUrls": true
      }],
  }
};