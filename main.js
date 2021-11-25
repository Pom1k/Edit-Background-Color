const body = document.querySelector("body")
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const blue  = document.querySelector("#blue")


body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`

red.addEventListener('input',() =>{
    body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
})

green.addEventListener('input',() =>{
    body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
})

blue.addEventListener('input',() =>{
    body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
})