var array = [1,2,3,5,6]
// for loop
for (var i =0; i < array.length; i++){
    // console.log('loop - ',array[i])
}
//----Filter / map / reduce ----
var findFilter = array.filter(function (value){
    return value <3;
})

var useMap = array.map(function (value){
    return value * 3;
})

var useReduce = array.reduce(function (total,value){
    return total * value;
})
// console.log('filterResult - ',findFilter)
// console.log('mapResult - ',useMap)
// console.log('reduceResult - ',useReduce)

//----Object inharetance-----
var person = {
    name: 'shyam',
    age: 50
}
// console.log('person - ', person);

var anotherPerson = Object.create(person);
anotherPerson.location = 'USA'
// console.log('anotherPerson inheritance -', anotherPerson.age)

//----Closer function----
function getItem(input) {
    var number = input;
    return function (){
        return number * 2;
    }
}

var cal = getItem(100);
var cals = getItem(200);
// console.log('clouser function - ',cals());

//----Try catch use----
var a = 8;
var b = 9;

try {
    var c = a*b;
    console.log('try - ',c);
} catch(error){
    console.log('catch - ',error);
} finally {
    console.log('finally');
}

var x = 7;
console.log(x)

// IIFE Immediatly invoke fuction exceution
// (function(){console.log("Hello")})();

//Arguments 
function hello(message) {
    console.log(message);
    console.log(arguments[1]);
}

hello("hello",10 ,20);

 function hellos(message,num1, num2) {
    console.log(message);
    console.log(arguments[1]);
}

console.log(hellos.length);

// setTimeout use for after some sec it code will show
setTimeout(function(){
    console.log("It will Run after 4 sec");
}, 4000);

setTimeout(function(){
    console.log("It will Run after 2 sec");
}, 2000);

console.log("Runing");


// setInterval use continue run after how much sec given and to stop Interval use setTimeout
var interval = setInterval(function (){
    console.log("Clock")
}, 500);


setTimeout(function() {
    clearInterval(interval);
}, 3000);

// parseInt , toString() , toFixed , parseFloat function

var a = '50.111111';

console.log(parseInt(a));
console.log(parseFloat(a));

var b = 50.123;

console.log(b.toString());
console.log(b.toFixed(1));













