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