let ullist = document.querySelector('ol')
let input = document.querySelector('input')
let button =document.querySelector('button')

console.log('ullist')
console.log('input')
console.log('button')


button.addEventListener('click',function(){
    let inputext = input.value
    let newele = document.createElement('li')
    newele.textContent = inputext
    ullist.appendChild(newele)
    input.value = ''
})

