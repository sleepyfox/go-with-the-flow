// @flow

//// Function argument annotations ////////////////////////////////////
const foo = (x:number) => x * 10;
console.log(foo('x'));

const bar = (x: string, y: number): boolean => x.length * y;
console.log(bar('cat', 2));
