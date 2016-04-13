# is-length

> Checks if the given value is a valid array-like length.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/is-length/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/is-length/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/is-length)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/is-length/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/is-length)


## Install

```
$ npm install --save is-length 
```


## Usage

```js
var isLength = require('is-length');

isLength(3);                // => true
isLength('3');              // => false
isLength();                 // => false
isLength(Number.MAX_VALUE); // => false
isLength(Infinity);         // => false
```

## Related

- [to-length](https://github.com/bubkoo/to-length) - Converts value to an integer suitable for use as the length of an array-like object.
- [is-nil](https://github.com/bubkoo/is-nil) - Checks if the given value is null or undefined.
- [is-null](https://github.com/bubkoo/is-null) - Checks if the given value is null.
- [is-window](https://github.com/bubkoo/is-window) - Checks if the given value is a window object.
- [is-array-like](https://github.com/bubkoo/is-array-like) - Checks if the given value is an array or an array-like object.
