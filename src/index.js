const helloWorld = () => {
    return  'Hello world!'
}

const multiply = require('./multiply.js');

module.exports = {
    helloWorld,
    multiply
}