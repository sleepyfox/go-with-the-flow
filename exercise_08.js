// @flow

//// Maybe ////////////////////////////////////////////////////////////
//
// 1. How can we alter the function type definition to make this pass?
// 2. How can we change the code (and not the function's type annotation)
//    to make this code safe?
var greeter = function(name: string): string {
  var greeting;
  if (name === 'Fox') {
    greeting = 'Hello ' + name + '!';
  }
  return greeting;
}

console.log(greeter('Fox'));
console.log(greeter('Jo'));
