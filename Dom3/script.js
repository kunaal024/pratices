let firstE = document.querySelector('.fe')
let backE =document.querySelector('.be')
let headOne = document.querySelector('h1')
console.log(firstE)
console.log(backE)
console.log(headOne)


let allelment =document.querySelectorAll('.fe')
console.log(allelment)

let allelmentbe =document.querySelectorAll('.be')
console.log(allelmentbe)

headOne.addEventListener('click',function(){
    for(let i = 0; i <allelment.length ; i++ ){
        console.log(i)
        allelment[i].style.color ="red"
        allelmentbe[i].style.color ='blue'
    }
})

let allelement =document.querySelectorAll('li')
console.log(allelement)
let tagee = document.getElementsByTagName('li')
console.log(tagee)




let byid =document.querySelector('#one')
console.log(byid)
let byid2 =document.getElementById('one')
console.log(byid2)


