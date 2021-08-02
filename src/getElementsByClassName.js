// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

//input className, output array
//iterate through each element with that classname
//if that element has that class name
//push that element into an array



  var result = [];
  var getElementByClass = function(element) {
    if (element !== undefined) {
      var classList = element.classList;
      if (element.length) {
        for (var i = 0; i < element.length; i++) {
          if (element[i].classList !== undefined) {
            getElementByClass(element[i]);
          }
        }
      } else {
        if (classList) {
          if (classList.contains(className)) {
            result.push(element);
          }
          getElementByClass(element.childNodes);
        }
      }
    }
  };
  getElementByClass(document.body);
  return result;
};
