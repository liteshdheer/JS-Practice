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