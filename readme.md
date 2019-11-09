
# @and-cru/eslint-config
[![package version](https://img.shields.io/npm/v/@and-cru/eslint-config.svg?style=flat-square)](https://npmjs.org/package/@and-cru/eslint-config)
[![package downloads](https://img.shields.io/npm/dm/@and-cru/eslint-config.svg?style=flat-square)](https://npmjs.org/package/@and-cru/eslint-config)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@and-cru/eslint-config.svg?style=flat-square)](https://npmjs.org/package/@and-cru/eslint-config)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> ESLint & Prettier config for &CRU

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## About

Shareable configs are designed to work with the `extends` feature of `eslint` files.
You can learn more about
[shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npx install-peerdeps --dev @and-cru/eslint-config
```

## Usage

Add this to your `.eslintrc` file in the root of your project:

```json
{
  "extends": "@and-cru"
}
```

Then add the scripts to your `package.json`:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

### Add Badge [![and-cru-code-style](https://img.shields.io/badge/code%20style-%26CRU-EAEBE3.svg?style=flat-square)](https://www.andcru.io/)

```
[![and-cru-code-style](https://img.shields.io/badge/code%20style-%26CRU-EAEBE3.svg?style=flat-square)](https://www.andcru.io/)
```


## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT © &CRU
