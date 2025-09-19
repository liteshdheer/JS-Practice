//----Filter / map / reduce ----

var array = [1,2,3,5,6]

var findFilter = array.filter(function (value){
    return value <3;
})

var useMap = array.map(function (value){
    return value * 3;
})

var useReduce = array.reduce(function (total,value){
    return total * value;
})
console.log('filterResult - ',findFilter)
console.log('mapResult - ',useMap)
console.log('reduceResult - ',useReduce)