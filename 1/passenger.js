 
/* 
let count = 0

console.log(count)


// 1. Create a variable, myAge, and set its value to your age

/* // 2. Log the myAge variable to the console 
let myAge=21
console.log(myAge) */
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
/* let count=0
function increment(count){
    count= count+1;
    return count;

} */ 
//document.getElementById("count-el").innerText=5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
}

