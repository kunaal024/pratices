// concat
let column = [11,22,44,55,66,77]
let coloumn = [99,100,101]
let add =column.concat(coloumn)
console.log(add)


//flat

let add2 = [[1,2,3],[4,5,6],[7,8,9]]
console.log(add2[0][0])

//join
let add4 = ["kunaaal","rachana"]
let add5 = add4.join('with')
console.log(add5)

//slice

let fruit = ["pineapple","apple","watermelon","banana","orange"]
console.log(fruit.slice(1,5))

//AT

let city =["nagpur", "pune","banglore","jaipur"]
console.log(city.at(2))

//splice
let food =["panner","mushroom","cabbage","tomato"]
console.log(food.splice(0,2))


//push 
let country = ["india","america","europe","japan","pakistan"]
let l=country.push("china")
//console.log(country.push("china"))
console.log(country)

//unshift
let q = country.unshift("staring")
console.log(country)

//pop
let h = country.pop(5)
console.log(h)

//include
let k =country.includes("america")
console.log(k)


//indexoff

let i = country.indexOf("europe")
console.log(i)