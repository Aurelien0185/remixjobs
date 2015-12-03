Coding Notes
------
##### Node.js
1. More understand what exports means in module:  
**exports**(for example: `exports.xxx`) is a **reference** to the value of `module.exports`</b>,  
real exporting is `module.exports`(if they have different values).
2. Use keyword `const` and `let` instead of `var` to find the bugs easier:  
Tips: dont forget to use `"use strict";` before you using those. Or you will get syntax error like:  
[Block-scoped declarations (let, const, function, class) not yet supported outside **strict mode**](http://stackoverflow.com/questions/33001246/uncaught-syntaxerror-block-scoped-declarations-let-const-function-class-no)
3. Use `Function_Name.prototype.member_Name` to make this member becomes **private**.
4. continue///

##### Mongodb
1. What is **Mongoose**?  
It is an **odm**(object-document mapping). More simple, it is a thing that translates an document to an object, and vice versa.  
For example, we can call:  
`.connect('xxx')`  
`.connection.XXX`  
`.Schema({name:String, email:{type: String, lowercase: true}})`



