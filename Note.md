Coding Notes
------
##### Node.js
1. More understand what exports means in module:  
**exports**(for example: `exports.xxx`) is a **reference** to the value of `module.exports`</b>,  
real exporting is `module.exports`(if they have different values).
2. Use keyword `const` and `let` instead of `var` to find the bugs easier.
3. Use `Function_Name.prototype.member_Name` to make this member becomes **private**.
4. continue///

##### Mongodb
1. What is **Mongoose**?  
It is an **odm**(object-document mapping). More simple, it is a thing that translates an document to an object, and vice versa.  
For example, we can call:  
`.connect('xxx')`  
`.connection.XXX`  
`.Schema({name:String, email:{type: String, lowercase: true}})`



