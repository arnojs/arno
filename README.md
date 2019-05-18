# @arnojs/arno

A web framework base on eggjs.

![Travis (.org)](https://img.shields.io/travis/arnojs/arno.svg?style=flat-square)

## QuickStart

```bash
$ npm install
$ npm test
```

publish your framework to npm, then change app's dependencies:

```js
// {app_root}/index.js
require('@arnojs/arno').startCluster({
  baseDir: __dirname,
  // port: 7001, // default to 7001
});

```

## Questions & Suggestions

Please open an issue [here](https://github.com/arnojs/arno/issues).

