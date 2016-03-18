// @flow

//// Classes //////////////////////////////////////////////////////////
class Polygon {
  height: number;
  width: number;
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }
  foo() { return this.height }
  bar(y) { return this.width * y }
}

var square = new Polygon(10, 4);

console.log("Working with polygons");
console.log("height is " + square.foo());
console.log("twice width is " + square.bar(2));

// All of the stuff above this like is correct
const area = function(shape: Polygon) {
  return shape.height * shape.width;
}

// How can we alter the object literal below so that our type check passes?
var space_to_colour_in = area({ height: 1, width: 1});
