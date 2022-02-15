// display()

// var strFirst = "Greetings!!!!"

// display()

// function display() {
//     console.log("strFirst", strFirst);
    
// }


// setTimeout( () => console.log("Inside the SetTimeOut"), 1000)


// Promise.resolve().then( () => console.log("Inside the Promise....") )


// while(true) {
//     console.log("Inside the Loop.....");
// }


const users = [
    { id: 1, name: "tony", surname: "stark", age: 45, cool: true , budget: 50200, email: "stark@gmail.com"},
    { id: 2, name: "steve", surname: "strange", age: 40, cool: true, budget: 45850, email: "strange@gmail.com" },
    { id: 3, name: "bruce", surname: "banner", age: 35, cool: false, budget: 30900, email: "banner@gmail.com" },
    { id: 4, name: "steve", surname: "rogers", age: 73, cool: false, budget: 15050, email: "rogers@gmail.com" },
    { id: 5, name: "sia", surname: "yung", age: 33, cool: true, budget: 22200, email: "yung@gmail.com" },
    { id: 6, name: "mystic", surname: "man", age: 30, cool: false, budget: 19998, email: "man@gmail.com" },
  ];


//   Array.prototype.myMap = function(callback, thisVal = this) {
//     const newArray = [];
//     for (let i = 0; i < thisVal.length; i++) {
//         newArray.push(callback(thisVal[i], i, thisVal));
//     }
//     return newArray;
// }

Array.prototype.myMap = function(callback, thisVal = this) {
    const reducer = (acc, val, i, thisArg) => {
        acc.push(callback(val, i, thisArg))
        return acc;
    }
    return thisVal.reduce(reducer, [])
}

const mappedUsers = users.myMap( user => ({
    id: user.id,
    age: user.age,
    fullname: `${user.name} ${user.surname}`
}) )

// Array.prototype.myMap = function(callback, thisVal) {
//     const newArray = [];
//     for (let i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i], i, this));
//     }
//     return newArray;
// }

console.log(mappedUsers);