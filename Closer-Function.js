//----Closer function----
function getItem(input) {
    var number = input;
    return function (){
        return number * 2;
    }
}

var cal = getItem(100);
var cals = getItem(200);
console.log('clouser function - ',cal());
console.log('clouser function - ',cals());