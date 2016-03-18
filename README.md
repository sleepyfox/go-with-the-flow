# Introduction to Flow
This is a sinmple piece of boilerplate that gives some examples of how to get started with Facebook's 'flow' gradual typing system for JavaScript.

## Dependencies
To install dependencies:

    npm install

## Paths
To avoid having to install flow and babel globally, be sure to add the node_modules/.bin folder to your path:

    export PATH=./node_modules/.bin:$PATH

## Type checking
To get a status report of what is potentially wrong with *ALL* your code, simply run:

    npm run flow

If you want to check just a single file then you can do:

    cat exercise_01.js | flow check-contents

## Running your code
In order to run your code without transpiling you can use the babel CLI:

    babel-node exercise_01.js

(Don't forget the PATH advice above!)

## Exercises
Can be found in files exercise_01.js through exercise_0?.js

## IDE integration
You can add flow type-checking on save to Atom by using the 'ide-flow' plugin.
