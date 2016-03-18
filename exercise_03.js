// @flow

//// Function argument annotations ////////////////////////////////////
const foo = (x:number) => x * 10;
// What is wrong with our call to foo()?
console.log(foo('x'));

// What is our mistake here?
const bar = (x: string, y: number): boolean => x.length * y;
console.log(bar('cat', 2));
