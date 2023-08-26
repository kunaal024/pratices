let column = [11,12,13,14,15,16]
let k1 = column.map(function(el){
    return el -10
})
console.log(k1)


let k2 = column.filter(function(el){
    return el <=13
})
console.log(k2)

let k3 = column.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(k3)

let k4 = column.forEach(function(el,index,arr){
    console.log("welcome"  + el)
})
console.log(k4)


let k5 = column.every(function(el){
    return el>10
})
console.log(k5)


let k6 = column.some(function(el){
    return el >12
})
console.log(k6)


let colour = ["orange","blue","purple","skyblue"]
let colure = ["red","white","black"]
let add =colour.concat(colure)
console.log(add)