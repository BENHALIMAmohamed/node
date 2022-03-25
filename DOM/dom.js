let chiffre=document.getElementsByClassName('chiffre')
var c = parseInt(chiffre[0].innerHTML)



function plus(){
    c++
    chiffre[0].innerHTML=c

}

function moins(){
    let i=0
    while (0<c && i<1){
        c=c-1
        chiffre[0].innerHTML=c 
        i++  
     }
}