//concat
//join
//slice
//at
//splice
//flat



let R = ["rachana"]
let K =["kunaal"]
let w =R.concat(K)
console.log(w)

let meet = ["kunaal","rachana"]
let to = meet.join("with")
console.log(to)


let city = ["nagpur","multai","wardha","nagpur","banglore"]
console.log(city.slice(2))
console.log(city.slice(1,2))
console.log(city.slice(2,4))
console.log(city.slice(-3,-1))



let bike = ["r15","pulsar200","tvs"]
a =bike.at(1)
console.log(a)


let tv = ["setmax","zeetv","starplus","sony"]
console.log(tv.splice(0,2))



let column =[[11,22,33,44,55],[66,77,88,99],[101,111,121]]
let k =column.flat()
console.log(k)

//retrive
let serial = ["anupamaa","kumkum","diya","ye hai"]
console.log(serial[1])


//update
serial[2]= "nagin"
console.log(serial)


//add
serial.push("ghum")
console.log(serial)
serial.unshift("kundali")
console.log(serial)


//delete
serial.pop()
serial.shift()
console.log(serial)


//object


let i = {
    firstname:"kunaal",
    lastname:"kanoje",
    age : 24,
    city:"nagpur"
}

//dot notation and bracket


//retrive
console.log(i.lastname)
console.log(i["firstname"])


//update

i.firstname = "kuki"
i['firstname'] ="kuki"
console.log(i)

//delete

delete i.city
delete i[city]
console.log(i)