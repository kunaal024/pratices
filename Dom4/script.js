let ullist = document.querySelector('ul')
let input = document.querySelector("input")
let button = document.querySelector('button')

console.log(ullist)
console.log(input)
console.log(button)


button.addEventListener('click',function(){
    let liTExt =input.value
    let newelement =  document.createElement('li')
    newelement.textContent = liTExt
    ullist.appendChild(newelement)
    input.value = ""
})

ullist.querySelector('click',function(){
    ullist.style.color = "red"
})

