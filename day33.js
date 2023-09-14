// // // let p = "meena"
// // // for (let i = p.length-1 ; i >= 0 ; i--){
// // //     console.log(p[i])
// // // }

// // let num = ["blue","red","skyblue","voilet"]

// //     //retrive
// // console.log(num[0])

// //     //update

// // num[0]="orange"
// // console.log(num)
 
// //     //add ending or starting
// //     //    unshift     push

// // num.push("green")
// // console.log(num)

// // num.unshift("white")
// // console.log(num)

// //     //delete

// // num.pop()
// // //num.unshift()
// // console.log(num)


// let age = [1997,1998,1999,2000,2001]
// let q12= age.map(function(el){
//     return 2023 -el
// })
// console.log(q12)


// let find = [10,11,12,13,14,-15,-46,-87]
// let q11 =find.filter(function(el){
//     return 0>el
// })
// console.log(q11)


let sum = [1,2,3,4,5,6,7,8,9,]
let add1 = 0
for ( let i =0 ; i<sum .length; i++){
    add1 = add1 +sum[i]
}
console.log(add1)


let g =sum.reduce(function(acc,el){
    return acc+ el
},0)
console.log(g)



let y = ["kunaal"]
let o = ["weds"]
let x =["rachana"]
let z= y.concat(o,x)
console.log(z)

let color = [" blue ","orange","white","black","green"]
console.log(color.slice(2))
console.log(color.slice(3))
console.log(color.slice(1,2))
console.log(color.splice(1,3))



let flower = [[" sunflower","rose","jasmin"],["moghra","hebisecus"]]
let buqce = flower.flat()
console.log(buqce)




let [[z1,x1,c],[k,l]]=flower
console.log(k)


let kq ={
    first : "bahlu",
    last : "kablu"
}

console.log(kq.first)

kq.nickName = " chablu"
console.log(kq)
console.log(kq.nickName)

let {first,last} = kq
console.log(first)
