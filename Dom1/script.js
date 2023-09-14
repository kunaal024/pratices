{/* <h1 class="one" id="two" name = "nm">vegeatable</h1> */}

let headone = document.querySelector("h1")
console.log(headone)

let byclass = document.querySelector('.one')
console.log(byclass)

let byid  = document.querySelector('#two')
console.log(byid)


let byattribute = document.querySelector('h1[name = "nm"]')
console.log(byattribute)


{/* <P id="three" class="four" name = "five">para</P> */}

let para =document.querySelector('p')
let byId = document.querySelector('three')
let byclassA = document.querySelector('four')
console.log(para) 
console.log(byId)
console.log(byclassA)

let headtwo = document.querySelector('#two')
console.log(headtwo)
headtwo/addEventListener('click',function(){
    headtwo.textContent = 'the kunaal'
    headtwo.computedStyleMap.color = 'red'
})
