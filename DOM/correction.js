
var counter = document.querySelector('p')

console.log(typeof counter.innerHTML)
var value = Number(counter.innerHTML)

// two functions 

// function inc(){
//     value++
//     counter.innerHTML = value
// }
// function dec(){
//     if (value>0){

//         value--
//     }
//     counter.innerHTML = value
// }


// a single function

var buttons = document.querySelectorAll('button')
console.log(buttons)


function count(e){
var cible = e.target
console.log(cible)
if(cible.innerHTML=="+"){
    value++
}else if(cible.innerHTML=="-"){
    if(value>0){
        value--
    }
}
counter.innerHTML=value
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',count)
    
}