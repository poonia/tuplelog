---
"title": "Promise in Javascript"
"author": "Praveen Poonia"
"created": 2021-06-11
"description": Promises are an alternative way to manage your asynchronous code in JavaScript.
---


#### Lets understand Callback function 

A callback function (say, Y) is a function that is passed to another function (say, X) as a parameter, and Y gets executed inside X. 

JavaScript uses callback functions to handle asynchronous control flow. 

```jsx
$( "#dataRow" ).on( "click", function() { 
  alert(‘hello’); 
});
```

#### How Callback function work? 
    
```jsx
  function writeCode(callback) { 
    //do something and after that call the callback(); //…..  
    }
```
    

#### What are promises?

Promises are an alternative way to manage your asynchronous code in JavaScript.
A promise is an object who represents the result of an asynchronous operation.
It is a place holder for a value that will become available in the future.

#### Promises states
- PENDING - The initial state of a promise.
- RESOLVED - a successful operation - returns a Value.
- REJECTED - a failed operation - throws an exception. has a 'Reason' property.
- SETTLED - means either resolved or rejected Once a promise is settled, it is immutable and cannot be changed.

Create → Use → Flow

#### Creating Promises

```new Promise( )```

```jsx
var promise = new Promise(function(resolve, reject) {
  if( /*  some condition  */) {
    resolve('success');
  } else {
    reject('reject');
  }
});

promise.then(function(result) {
  console.log(result); //success
}, function(reason) {
  console.log(reason); //reject
});
```

```jsx
function get_user(id){  
	return new Promise((resolve, reject) => {
    fetch(`https://somedomain.com/api/users/${id}`)
        .then(response => response.json())
        .then(user_data => {
        	if(user_data.active) resolve(user_data);
            else reject(new Error('This user is not active any longer'))
            //reject due to an application logical error
        })
        .catch(err => reject(err)) //reject due to a communication error
  })
}
```

Promisification

```jsx
const fs = require('fs');
function readFile(filename, enc){  
return new Promise((resolve, reject) => {

     fs.readFile(filename, enc, (err, data) => {
       if (err) reject(err);
       else resolve(data);
     })
    
  })
}
```

USE 

`Promise.prototype.then( )`

```jsx
get_user(id)
.then(on_resolved, on_rejected)
```

```jsx
get_user(862726)
.then(user_data => console.log(user_data) //success...
,err => console.error(err.message)) //failure...
```

Chaining Promises

"*a Promise handler always return another Promise*"*therefore it can be chained to other Promises*

```jsx
get_user(id)
	 .then(on_resolved_1, on_rejected_1)
         .then(on_resolved_2)
         .then(null, on_rejected_2)
```

Promise.prototype.catch( )

```jsx
get_user(id)
	 .then(null, on_rejected)
```

↓

```jsx
get_user(id)
	 .catch(on_rejected)
```

Chaining Promises( )

```jsx
get_user(id)
        .then(step1)
        .then(step2)
        .then(step3)
        .then(step4)
        .catch( err => {
            // The chain is broken and goes to the catch
            // Handle any errors from all above steps
        })
```

```jsx
get_user(id)
        .then(step1,on_get_user_reject)
        .then(step2,on_step1_reject)
        .then(step3,on_step2_reject)
        .then(step4,on_step3_reject)
        .catch( err => {
            // The chain is NOT broken
            // Handle any errors from step4
        })
```

FLOW

Promise.each()

***Serial** iteration on a collection and then...*

```jsx
var items = [0,1,2,3,4,5,6,7,8,9];

    Promise.each(items, item => {
    
      return Promise.delay(Math.random() * 2000)
                  .then(()=>  console.log(`Finished item: ${item}`) );
    
    })
    .then( origin_array => {
        console.log(`All tasks are done now... ${origin_array}`);
    })
    .catch( err => 
        console.error(err.message)
    });
```

Promise.map()

***Parallel** iteration on a collection and then...*

```jsx
var items = [0,1,2,3,4,5,6,7,8,9];

    Promise.map(items, item => {
        
        return Promise.delay(Math.random() * 2000)
            .then(()=> {
              console.log(`Finished item: ${item}`);
            });
    
    }, {concurrency: 3}) //adjust concurrency...
    
    .then(() => console.log('All tasks are done now...'))

    .catch( err => console.error(err.message));
```

Promise.all()

***Parallel*** *execution of different async operationsand then...*

```jsx
Promise.all(pending_promises_Array)
        .then( items => console.log('All operations are complete!', 'items: ',items))
        .catch( err =>  console.error( err.message ) );
```

- *input - an array of promises*
- *output an array of results values - (ordered respectively to the original array order!)*

Promise.race()

*The .then( )* handler runs after the first async operation is complete

```jsx
Promise.race(pending_promises_Array)
        .then( item => {
            console.log(`The first operation is complete!, first item: ${item}`);
        })
        .catch( err => {
             console.log(`Error: ${err.message}`);
        })
```

Promise.some()

*Similar to race()*

*The .then()* *handler runs after the (n)th async operation is complete*

```jsx
Promise.some(pending_promises_Array, 2)
        .spread( (first, second) => {
            console.log(`first: ${first}, second: ${second}`) 
        })      
        .catch( err => {
            console.log(`Error: ${err.message}`) 
        })
```