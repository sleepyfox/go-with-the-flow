// @flow

//// Inference ////////////////////////////////////////////////////////
//
// The code below fails to type check, even though there are no type
// annotations, what is going on and how can we fis it?
const baz = x => x.length;
var res = baz('Hello') + baz(42);
