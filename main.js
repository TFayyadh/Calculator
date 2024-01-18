const display = document.getElementById("display");
const btn = document.querySelectorAll('.buttons button');
const clearBtn =  document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")
const numberBtn = document.querySelector(".number")
const equalBtn = document.querySelector(".equal")



function addToDisplay(input){
    display.innerHTML += input
}

function clearDisplay(){
    display.innerHTML = ""
}

function calculate(){
    try{
        display.innerHTML = eval(display.innerHTML);
    }
    catch(error){
        display.innerHTML = "ERROR"
    }
}

function deleteNumber(){
    display.innerHTML = display.innerHTML.slice(0,-1)
}
    // deleteBtn.addEventListener('click', (e) => {
    //     display.innerText = display.innerText.slice(0, -1)
    //     })