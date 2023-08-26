let year = [1999,1998,1997,1996]
let w = []
// for ( i = 0; i<year.length;i++){
//     console.log(i)
//     console.log(year[i])
//     let q1 =2000 - year[i]
//     w.push(q1)
// }
// console.log(w)



let q2 = year.map(function(el){
    return 2023 - el
})
console.log(q2)