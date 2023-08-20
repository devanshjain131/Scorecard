let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")

let count = 0
let countd=0

function plusone(){
    count+=1
    countHome.textContent = count
}

function plustwo(){
    count+=2
    countHome.textContent = count
}

function plusthree(){
    count+=3
    countHome.textContent = count
}

function pone(){
    countd+=1
    countGuest.textContent = countd
}

function ptwo(){
    countd+=2
    countGuest.textContent = countd
}

function pthree(){
    countd+=3
    countGuest.textContent = countd
}