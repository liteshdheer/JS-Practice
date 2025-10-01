// ES5 Javascript

// var detail = {
//     name: "Sutherland",
//     age:50,
//     location:"Noida"
// }

// var name = detail.name;
// var age = detail.age;
// var location = detail.location;

// console.log(name);
// console.log(age);
// console.log(location);


// ES6 Javascript

let details = {
    name: "Litesh",
    age:14,
    location:"Delhi"
}

let {name,age,location} = details;

console.log(name);
console.log(age);
console.log(location);


// Promisis ES6

const myPromise = new Promise((resolved,rejected) => {
        let a = 4;
        let b = 5;
        let c = a +b;

        if(c === 4){
            resolved(`Yes!, ${a} + ${b} = 4`);
        }else {
            rejected(`No! ${a} + ${b} = 4`);
        }

    });

    myPromise.then((n) => {
        console.log(n);
    }).catch((err) => {console.log(err)});


// Spread Operator
let oldArray = [1,2,3,4,5,6,7,8,];
let newArray = [...oldArray,54,54,5,55]

console.log(newArray);


// Rest parameter

const sum = (...numbers) => {
console.log(numbers);
};

sum('showing numbers',12457252,12,12,12,1,21,2,3,3,5,5,4,);


const totalSum = (...number) => {
let total = 0;
number.forEach((m) => {
 total += m;
});
console.log('total of numbers',total);
};

totalSum(2,12,12,12,1,21,2,3,3,5,5,4,);