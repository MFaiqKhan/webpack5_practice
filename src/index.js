import generateJoke from "./generateJoke";

console.log(generateJoke());  // this won't work if we don't have module bundler installed in the package 
//                              // Uncaught SyntaxError: Cannot use import statement outside a module


// we can work it out by adding type to module in package but webpack will do it for us automatically