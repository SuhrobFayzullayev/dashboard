!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.facer=e():"undefined"!=typeof global?global.facer=e():"undefined"!=typeof self&&(self.facer=e())}(function(){var define,module,exports;

if ('FileReader' in window) {
  var reader = new FileReader
  var allowed = /^(eot|woff|ttf|svg)$/
  var filename = /^(.+)\.(.+)$/
  var type = {
    'eot': 'embedded-opentype',
    'woff': 'woff',
    'ttf': 'truetype',
    'svg': 'svg'
  }

  var src = 'url("{path}") format("{format}")'
  var base = [
    '@font-face {',
      'font-family: "{name}";',
      '{fallback}',
      'src: {sources};',
    '}'
  ].join(' ')
}

 return function(files, callback) {
  if (!reader) {
    return callback(new Error(
      'Your browser doesn’t support ' +
      'the FileReader API.'
    ))
  }

  var validate = function(item) {
    var valid = /File/.test(item)
    if (!valid) {
      callback(new Error(
        'Please provide a list of File objects.'
      ))
    }
    return valid
  }

  // Get first value from any Array-like structure.
  var first = (files ? files[0] || 0 : 0)
      .constructor.toString()
  
  // Must be a File 
  if (!validate(first)) {
    return
  }

  var i = 0
  var total = files.length
  var fonts = {} 

  // If the file is a type of font,
  // get the data and continue.
  var process = function() {
    var file = files[i]

    if (!validate(file)) {
      return
    }
    
    var segments = file.name
      .match(filename)
      .slice(1)

    var name = segments[0]
    var extension = segments[1].toLowerCase()

    if (!allowed.test(extension)) {
      return next()
    }
  
    reader.readAsDataURL(file)
    reader.onload = function(e) {
      add(name, extension, e.target.result)
    }
  }

  // Continue processing fonts until
  // they run out, then render the
  // @font-face declaration.
  var next = function() {
    ++i < total ?
      process(i) :
      render()
  }

  // Set the font-family name and return
  // a copy of the @font-face template.
  var outer = function(name) {
    return base.replace(/{name}/, name)
  }

  // Insert all the content into the template.
  var merge = function(wrapper, sources, fallback) {
    // Duplicate the eot declaration, after
    // removing the hash, for older IE.
    var ie = (fallback ? sources[0]
      .replace(/^(.+)\?.+$/, 'src: $1");') :
      ''
    )
    return wrapper
      .replace(/{fallback}/, ie)
      .replace(/{sources}/, sources.join(', '))
  }

  var transform = function(path, format) {
    return src
      .replace(/{path}/, path)
      .replace(/{format}/, format)
  }

  // Generate a list of sources for the
  // font-family, in an appropriate order.
  var make = function(name, data) {
    var wrapper = outer(name)
    var order = ['eot', 'woff', 'ttf', 'svg']
    var suffix = {
      'eot': '?#iefix',
      'svg': '#' + name
    }
    var sources = []
    order.forEach(function(format, index) {
      if (!data.hasOwnProperty(format)) {
        return
      }
      // Adds #blah suffixes to eot
      // and svg formats.
      var path = (suffix[format] ?
        data[format] + suffix[format] :
        data[format]
      )
      sources.push(transform(
        path, type[format]
      ))
    })
    var fallback = (
      sources.length > 1 &&
      data.hasOwnProperty('eot')
    )
    return merge(wrapper, sources, fallback)
  }

  // Render a @font-face declaration for
  // every font-family that was processed.
  var render = function() {
    var blocks
    for (var font in fonts) {
      blocks = blocks || {}
      blocks[font] = make(font, fonts[font])
    }
    if (!blocks) { 
      return callback(new Error(
        'Please provide at least one web font file.'
      ))
    }
    callback(null, blocks)    
  }
 
  // Add the data URL into the fonts object. 
  var add = function(name, ext, url) {
    fonts[name] = fonts[name] || {}
    fonts[name][ext] = fonts[name][ext] || url
    next()
  }
 
  process() 
}

});
