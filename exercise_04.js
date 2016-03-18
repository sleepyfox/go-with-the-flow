//// @flow

//// Nulls ////////////////////////////////////////////////////////////
const length = x => x.length;

// What is wrong with our calculation?
const total = length('hello') + length(null);
