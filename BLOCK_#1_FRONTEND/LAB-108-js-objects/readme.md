![](https://user-images.githubusercontent.com/970858/63474771-d6734700-c469-11e9-83bb-9429da563909.png)


# JS Objects

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Today you have learnt how to define and use Objects. Using objects we can represent the real world better with complex structures. Today's lab will have lots of exercises that are increasingly difficult using objects.

Ready?

## Requirements

- [Learn how to fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `code/labs` folder

## Starter code

You have to solve the different problems in the `starter-code/index.js` file. This Javascript file is included in the `starter-code/index.html`. 


To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:

After you open it, you can open the `Chrome Developer Tools` and see the `console.log`  of your exercises.



## **RULES**

 - All your functions must be [pure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
 - No more than 10 lines per function


---
## Iteration 1

Create the following functions:

### 1.1/ **fullName(person)**

This function has to return the join of the firstName and the lastName attributes of the `person` argument with a space between them.

```js
E.g. { firstName : 'Luis' , lastName: 'Burón' }  =>   "Luis Burón"
```   
---

## Iteration 2 - Who is online?

You have a chat application and you want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in seconds), create a function to work out who is online, offline and afk.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered afk.

The input data has the following structure:
```js
[{
  username: 'David',
  status: 'online',
  lastActivity: 600
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 2320
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 4320
}]
```
The corresponding output should look as follows:
```js
{
  online: ['David'],
  offline: ['Lucy'],
  afk: ['Bob']
}
```
If for example, no users are online the output should look as follows:
```js
{
  offline: ['Lucy'],
  afk: ['Bob']
}
```

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {}


--- 

## Iteration 3 - Overheating

All the components of a computer have a defined maximum temperature at which it can continue to function properly.

But we know you, and sometimes when you play Fortnite, some of your components overheat.

Your function will receive two parameters. `yourComputer` is an object that represents your computer with the current temperatures of its components in real time. `maxTemperatures` is the maximum temperature of all the components of a computer.

Your function has to return another new object with the same components your computer has but returning `true` if the temperature  of the component is okay or `false` if the component is overheating-

```js 
var yourComputer = { 
  cpu : 25,
  gpu : 45,
  motherBase : 15,
  dvdDriver : 25,
  rom : 5,
  ram : 10,
}
var maxTemperatures = { 
  cpu : 33,
  gpu : 42,
  motherBase : 20,
  dvdDriver : 20,
  rom : 10,
  ram : 20,
}

var results = yourFunction(yourComputer, maxTemperatures);

console.log(results); 
/* { 
    cpu : true,
    gpu : false,
    motherBase : true,
    dvdDriver : false,
    rom : true,
    ram : true
  } 
*/
```


--- 

## Bonus

**Extra exercises**

### 1/ **strCount()**

Create a function `strCount` (takes an object as argument) that will count all string values inside an object. 

For example:

```js
strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
})
// returns 3
```

### 2/ **fullNameFormatted(person)**

This bonus excersise is an update from the first one. This function has to return the join of the firstName and the lastName attributes of the `person` argument with a space between them. Also it has to transform the first letter of both values to upperCase if necessary. 

```js
E.g. { firstName : 'Luis' , lastName: 'burón' }  =>   "Luis Burón"
```

### 3/ **fullNameFormattedv2(person)**

This function has to return the join of the firstName and the lastName attributes of the `person` argument with a space between them. Also it has to transform the first letter of every word of both values to upperCase if it is necessary. In this case, you can receive as `lastName` or `firstName` value a compound name. 

```js
E.g. { firstName : 'Luis Álvaro' , lastName: 'burón mejías' }  =>   "Luis Álvaro Burón Mejías"
```



## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin main
```

Then create a Pull Request!!

![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)
