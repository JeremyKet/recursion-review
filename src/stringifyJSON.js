// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  if (obj === undefined) {
    return 'undefined';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)){
    for(var i = 0; i < obj.length; i++){
      result += stringifyJSON(obj[i]) + ',';
    }
    return '[' + result.slice(0, result.length-1) +']'
  }
  if (typeof obj === 'object') {
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + result.slice(0, result.length - 1) + '}';
  }
  return obj.toString();
};


