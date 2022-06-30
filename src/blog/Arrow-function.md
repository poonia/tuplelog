---
"title": "Arrow function in Javascript"
"author": "Praveen Poonia"
"created": 2021-06-11
"description": Arrow functions are a more concise syntax for writing function expressions. Arrow functions – also called “fat arrow” functions.
---


# Arrow function

Arrow functions are a more concise syntax for writing function expressions.
Arrow functions – also called “fat arrow” functions

They are one-line mini functions which work much like Lambdas in other languages like C# or Python.

Function body
Arrow functions can have either a "concise body" or the usual "block body".

In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.

two main benefits:

1. A shorter syntax then typical functions
2. No binding of this

Syntax -
`() => { statements }(parameters) => { statements }`

One param -
`parameter => { statements }`

if the expression is being returned
`parameter => expression` or `() => expression`
Example -

`function add2(num) { return num + 2; } add2(2); // 4`

`const add2 = num => num + 2 add2(2); // 4`

No binding of this

`this` is bound lexically
Arrow Functions lexically bind their context so this actually refers to the originating context

Lexical Scoping just means that it uses thisfrom the code that contains the Arrow Function.

An arrow function does not have its own this. The this value of the enclosing lexical context is used i.e. Arrow functions follow the normal variable lookup rules. So while searching for this which is not present in current scope they end up finding this from its enclosing scope. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the lexically enclosing function:

e.g. -

```jsx
function Person(){
	this.age = 0;
	setInterval(() => {
		this.age++; // |this| properly refers to the Person object
	}, 1000);
}
var p = new Person();

/* ES5 function object context */
// variant 1
var self =this;
this.nums.forEach(function(v) {
	if(v % 5 === 0)
		self.fives.push(v);
});

// variant 2
this.nums.forEach(function(v) {
	if(v % 5 === 0)
		this.fives.push(v);
}, this);

//variant 3 (since ES5.1)
this.nums.forEach(function(v) {
	if(v % 5 === 0)
		this.fives.push(v);
}.bind(this));

// ES6 Arrow function object context
this.nums.forEach((v) => {
	if(v % 5 === 0)
		this.fives.push(v);
});
```