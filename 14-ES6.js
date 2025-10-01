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

// const myPromise = new Promise((resolved,rejected) => {
//         let a = 4;
//         let b = 5;
//         let c = a +b;

//         if(c === 4){
//             resolved(`Yes!, ${a} + ${b} = 4`);
//         }else {
//             rejected(`No! ${a} + ${b} = 4`);
//         }

//     });

//     myPromise.then((n) => {
//         console.log(n);
//     }).catch((err) => {console.log(err)});


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

// Map function usecase
// Add li with the help of map
const courses = ["PHP","javascript","angular","reactJS",] 

const newCourses = courses.map((c) => {
    return `<li> ${c} </li>`;
});

console.log(courses);
console.log("LI add in array example",newCourses);


// Another example of map function
const series = [1,2,2,3,2,2,3,2,3,23,2,3,2,32];
const num = 5;

const table = series.map((s => s *num));

console.log("table of 5", table);



