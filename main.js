const display = document.getElementById("display");
const btn = document.querySelectorAll('.buttons button');
const clearBtn =  document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")
const numberBtn = document.querySelector(".number")
const equalBtn = document.querySelector(".equal")



btn.forEach (button =>{
    button.addEventListener('click', function(e) {
        display.innerText += button.innerHTML
    })
    clearBtn.addEventListener('click', (e) => {
        display.innerText = ""
    })
    equalBtn.addEventListener('click', (e) => {
        
    })
});



    // deleteBtn.addEventListener('click', (e) => {
    //     display.innerText = display.innerText.slice(0, -1)
    //     })