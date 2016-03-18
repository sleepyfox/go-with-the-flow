Slides

ES6
## Const
Exactly like var, only immutable
```javascript
const MAX_SIZE = 10;

MAX_SIZE = 12; //SyntaxError
```

## Class
```javascript
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}

var square = new Polygon(2, 2);
```

## Fat Arrow
```javascript
const area = (h, w) => h * w
area(2, 3); // 6

const five = _ => 5;
five(); // 5
```
