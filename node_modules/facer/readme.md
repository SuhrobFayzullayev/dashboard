# facer
facer is a browser utility that takes a list of font files and returns @font-face declarations for said fonts.

## Install
```
npm install facer
```
…or just copy `index.js` into your project’s directory.

### API
```
facer(

  files (array-like):
    an array or array-like object of File objects.

  callback (function):
    called after all files have been processed.
    the first argument is an error, the second
    is an Object whose keys are font-family
    names and whose values are @font-face
    declarations.

)
```

### Examples

#### Using [browserify](https://github.com/substack/node-browserify)
``` js
var facer = require('facer')
var input = document.querySelector('input[type=file]')

input.onchange = function(e) {
  facer(e.target.files, function(error, fonts) {
    if (error) {
      console.error(error.message)
      return
    }
    console.log(fonts)
  })
}
```

#### Using `<script src="index.js"></script>`
``` js
var input = document.querySelector('input[type=file]')

input.onchange = function(e) {
  facer(e.target.files, function(error, fonts) {
    if (error) {
      console.error(error.message)
      return
    }
    console.log(fonts)
  })
}
```

### License
[MIT](http://opensource.org/licenses/MIT)
