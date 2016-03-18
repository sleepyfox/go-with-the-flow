# Introduction to Flow
This is a sinmple piece of boilerplate that gives some examples of how to get started with Facebook's 'flow' gradual typing system for JavaScript.

## Dependencies
To install dependencies:

    npm install

## Paths
To avoid having to install flow and babel globally, be sure to add the node_modules/.bin folder to your path:

    export PATH=./node_modules/.bin:$PATH

## Type checking

    npm run flow

## Running your code
In order to run your code without transpiling you can use the babel CLI:

    babel-node exercise_01.js

## Exercises
Can be found in files exercise_01.js through exercise_01.js

## IDE integration
You can add flow type-checking on save to Atom by using the 'ide-flow' plugin.
