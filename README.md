[![npm version](https://img.shields.io/npm/v/react-center.svg?style=flat-square)](https://www.npmjs.com/package/react-center) [![Build Status](https://img.shields.io/travis/aush/react-center.svg?style=flat-square)](https://travis-ci.org/aush/react-center) [![Dependency Status](https://img.shields.io/david/aush/react-center.svg?style=flat-square)](https://david-dm.org/aush/react-center) [![devDependency Status](https://img.shields.io/david/dev/aush/react-center.svg?style=flat-square)](https://david-dm.org/aush/react-center#info=devDependencies) [![Coverage Status](https://img.shields.io/coveralls/aush/react-center.svg?style=flat-square)](https://coveralls.io/github/aush/react-center?branch=master) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/aush/react-center/master/LICENSE)

# React Center
Simple react component to center content horizontally and vertically
###Install
`npm install --save react-center`

Don't forget to manually install React^0.14 (peer dependency) if you're using npm@3.
###Use
#####ES6
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Center from 'react-center';

ReactDOM.render(
  <Center>
    <div>1</div>
  </Center>,
  document.getElementById('app')
);
```
#####ES5
```javascript
var Center = require('react-center');
...
```
#####Good old 1998 Script Tag:
The component depends on React ^0.14 (a introduction of stateless components), so if you're using it without a build step, React ^0.14 must be present as a global.
````html
<script src="https://npmcdn.com/react@^0.14/dist/react.min.js"></script>
<script src="https://npmcdn.com/react-dom@^0.14/dist/react-dom.min.js"></script>
<script src="https://npmcdn.com/react-center"></script>
````
###API
Check [tests](/test/center.spec.js).
###Demo
Navigate to the 'demo' folder and execute
```
npm install
npm run build
npm start
```
###Codepen example
http://codepen.io/aush/pen/vLQYJY
