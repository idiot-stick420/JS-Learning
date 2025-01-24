// Primitive -> 7
/*
    String
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt // to define bigint, add n at the end of the number
*/

// JS is dynamically typed language like python, meaning the data types are allocated at run-time

// Reference Type
/*
    Arrays      []
    Objects     {} like dictionary in python
    Functions   ()
        const myFun = function()  {
            log
        }

    All the non-primtive data types have a object in from=nt of them while printing their types
    like ->
        typeof(myFun) => object Function

*/

const id1 = Symbol('123');
const id2 = Symbol('123');
console.log(id1 === id2); // Gives false, because that is the sole purpose of Symbol data type
// Even passsing the same data they won't be the same
