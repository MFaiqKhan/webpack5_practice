// will have common js syntax
const path = require('path'); // path is a node module that helps us to get the path of the file

module.exports = {
    mode: 'development',
    entry: { // entry is a object that has key value pairs, can add multiple entries for code splitting
        bundle: path.resolve(__dirname, 'src/index.js'), // __dirname is a variable that holds the path of the current file 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' // [name] is a placeholder for the name of the entry point file, e.g bundle.js
    },
}

//console.log(path.resolve(__dirname, 'src/index.js'));