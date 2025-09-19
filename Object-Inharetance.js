//----Object inharetance-----
var person = {
    name: 'shyam',
    age: 50
}

console.log('person - ', person);

var anotherPerson = Object.create(person);

anotherPerson.location = 'USA'
console.log('anotherPerson inheritance -', anotherPerson.age);