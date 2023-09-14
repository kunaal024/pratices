console.log('kunaal')
let a1 = 10
let b = 10
let c = a1+b
let d2 = a1-b
let d1 = a1%b
let d3 = a1*b
let d = a1/b
console.log(c)
console.log(d1)
console.log(d2)
console.log(d3)
console.log(d)


function game (a1,b1){
    console.log(a1+b1)
    console.log(a1-b1)
    console.log(a1*b1)
    console.log(a1/b1)
    console.log(a1%b1)
}
game (10,10)


function home (m,n){
    console.log(m+n)
}
home(1,2)



function home1 (a,b){
    return a+b
}
let t =home1(10,20)
console.log(t)


//comparsion 
//== =! < >

function game1(i,j){
    console.log(i < j)
    console.log(i > j)
    console.log(i == j)
    console.log(i != j)
}
game1(10,15)


function game3(i1,j1){
    console.log(i1 == j1 && i1 ==j1)
    console.log(i1 ==j1 && i1 != j1)
    console.log(i1 !=j1 && i1 != j1)
}
game3(20,20)
  
function game3(i1,j1){
    console.log(i1 == j1 || i1 ==j1)
    console.log(i1 ==j1 || i1 != j1)
    console.log(i1 !=j1 || i1 == j1)
    console.log(i1 != j1 || i1 != j1)
}
game3(20,20)
  


let a = 90
if(a>80){
    console.log("okay")
}
else if(a>70){
    console.log("ok")
}
else if(a>60){
    console.log("k")
}
else{
    console.log("hmmm")
}


let state1 ="maha"
switch(state1){
    case"maha":
    console.log("nagpur")
    break;
    case"haalo":
    console.log("gujrarat")

}


//print number 1  2 3 4  5 6


for(let i = 0 ; i<7 ; i ++){
    console.log(i)
}

// print table of 2

for(let i= 2 ; i <=20; i = i+2){
    console.log(i)
}
//print reverse table of 5

for(let i =50 ; i >=5 ;i = i-5){
    console.log(i)
}


for( let i = 0 ; i < 3 ;i++){
    console.log("kunaal")
}

for(let i = 0 ; i<5 ; i++){
    console.log(i)
    if(i ==3){
        break
    }
}
console.log("------------")

let i =0
while(i<8){
    console.log(i)
    i++;
}
 
console.log("------------")


let state = ["kunaal"]
for(i =0 ; i < state.length ; i++){
    console.log(state[i])
}


console.log("------------")


let city2 ="nagpur"
for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
    //console.log(city2.charAt(i))
}



console.log("------------")



let namee = "kunaal"
for( let i = 0 ; i < namee.length ; i++ ){
    //console.log(namee[i])
    console.log(namee.charAt(i))
}



console.log("------------------------")

let namee1 ="okaya"
// let g =namee1.revesrse(function(e){
//     console.log(g)
// })



for(let i = namee1.length-1 ;i >=0 ; i--){
    console.log(namee1[i])
}


console.log("------------------")

let j = "dimple"
for (let i = 0 ; i <= j.length ; i++){
    console.log(j[i])
}




