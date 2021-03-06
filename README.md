# browser-hrtime
browser support for `process.hrtime()`.

[![Build Status](https://travis-ci.com/vltansky/browser-hrtime.svg?branch=master)](https://travis-ci.com/vltansky/browser-hrtime)
[![Coverage Status](https://coveralls.io/repos/github/vltansky/browser-hrtime/badge.svg?branch=master)](https://coveralls.io/github/vltansky/browser-hrtime?branch=master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvltansky%2Fbrowser-hrtime.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvltansky%2Fbrowser-hrtime?ref=badge_shield)

## :package: Installation

#### npm

```bash
$ npm install browser-detect
```

#### yarn

```bash
$ yarn add browser-detect
```

## :page_with_curl: Example
### NodeJS
#### As a polyfill
```js
require('browser-hrtime');

const time = process.hrtime();// [ 1800216, 25 ]
setTimeout(() => {
  const diff = process.hrtime(time);// [ 1, 552 ]
  console.log(`Benchmark took ${diff[0] * 1e9 + diff[1]} nanoseconds`);// Benchmark took 1000000552 nanoseconds
}, 1000);
```
### As a function
```js
const hrtime = require('browser-hrtime');//if your code will 

const time = hrtime();// [ 1800216, 25 ]
setTimeout(() => {
  const diff = hrtime(time);// [ 1, 552 ]
  console.log(`Benchmark took ${diff[0] * require + diff[1]} nanoseconds`);// Benchmark took 1000000552 nanoseconds
}, 1000);
```
If you are using TypeScript you should add to `tsconfig.json` `"esModuleInterop": true`

## Web with module

```js
import hrtime from 'browser-hrtime';

const time = hrtime();// [ 1800216, 25 ]
setTimeout(() => {
  const diff = hrtime(time);// [ 1, 552 ]
  console.log(`Benchmark took ${diff[0] * 1e9 + diff[1]} nanoseconds`);// Benchmark took 1000000552 nanoseconds
}, 1000);
```

or as polyfill:
```js
import 'browser-hrtime';
const time = process.hrtime();// [ 1800216, 25 ]

setTimeout(() => {
  const diff = process.hrtime(time);// [ 1, 552 ]
  console.log(`Benchmark took ${diff[0] * 1e9 + diff[1]} nanoseconds`);// Benchmark took 1000000552 nanoseconds
}, 1000);
```
### usage as an Angular polyfill:
add to `src/polyfills.ts`:
`import 'browser-hrtime';`
Add @types/node to your Angular app

```bash
$ npm i -S @types/node
```

Then in `tsconfig.json`
```json
"angularCompilerOptions": {
    "types" : ["node"]
    ....
}
```

## Web

```html
<script src="node_modules/browser-hrtime/lib/hrtime.min.js"></script>
<!-- Or from CDN: -->
<!-- <script crossorigin src="https://unpkg.com/browser-hrtime/lib/hrtime.min.js"></script> -->
```
```javascript
    console.log(hrtime());
    const first = process.hrtime();
    console.log(first);
    console.log(process.hrtime(first));
```

see [NodeJS documenation](https://nodejs.org/api/process.html#process_process_hrtime_time) for detailed process.hrtime API


## :octocat: Contribution
### environment

1. clone project from Github

```bash
$ git clone git@github.com:vltansky/browser-hrtime.git
```

2. install npm packages

```bash
$ cd browser-hrtime
$ npm install
```

3. build sources

```bash
$ npm run build
```

### test

```bash
$ npm run test
```
=======
## :mag_right: License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvltansky%2Fbrowser-hrtime.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvltansky%2Fbrowser-hrtime?ref=badge_large)

