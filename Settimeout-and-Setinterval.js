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