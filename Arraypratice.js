
//push
//unshift
//shift
//pop
//include
//indexoff
//lenght = properties
//fliter
//reduce
//map
//foreach

//map
let number = [1991,1992,1993,1994]
let q =number.map(function(el,index,arr){
    return 2023 - el
})
console.log(q)


//filter

let number1 =[11.12,13,14,-10,44,-88,50]
let q2 =  number1.filter(function(el){
    return el >0
})
let q1 =number1.filter(function(el){
    return el <0
})
console.log(q1)
console.log(q2)


//indexof
//includes
//push
//pop
//unshift
//shift

let colour = ["orange", "blue", "green","white"]
let a1 = colour.indexOf("orange")
let a2 = colour.includes("blue")
let q3 =colour.push("black")
let q4 = colour.unshift("purple")
let q5 = colour.shift()
let q6 = colour.pop()
console.log(q3)
console.log(colour)
console.log(q5)
console.log(q6)
console.log(a1)
console.log(a2)


//reduce

let box = [11,12,13,114,15]
let a = box.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(a)

let o = "rachana"
for(i = 0; i < o.length; i++){
    //console.log(i)
    console.log(o[i])
}

for(i = o.length-1; i =0 ;i--){
    console.log(o[i])
}
//console.log(o.length)

let k = ["onion","pumpkin","potato","capsicum"]
k.forEach(function(el){
    el.includes("onion")
})
console.log(k)