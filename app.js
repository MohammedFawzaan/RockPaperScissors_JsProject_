let b1 = document.querySelector('#b1');
let yp = 0, cp = 0;

b1.addEventListener('click', function () {
    let computer = "";
    let random = Math.floor(Math.random()*3);
    if (random == 0) {
        computer = "Rock";
    } else if (random == 1) {
        computer = "Paper";
    } else if (random == 2) {
        computer = "Scissors";
    }
    
    yourcall.innerHTML = "Rock";
    compcall.innerHTML = computer;
    
    if(computer=="Rock" ) {
        console.log('Draw');
    } else if(computer=="Paper") {
        cp++;
        comppoints.innerHTML = cp;
    } else if (computer=="Scissors")  {
        yp++;
        yourpoints.innerHTML = yp;
    } else {
        console.log("Draw")
    }
});

let b2 = document.querySelector('#b2');

b2.addEventListener('click', function() {
    let computer = "";
    let random = Math.floor(Math.random()*3);
    if (random == 0) {
        computer = "Rock";
    } else if (random == 1) {
        computer = "Paper";
    } else if (random == 2) {
        computer = "Scissors";
    }
    
    yourcall.innerHTML = "Paper";
    compcall.innerHTML = computer;

    if(computer=="Paper") {
        console.log('Draw');
    } else if(computer=="Scissors") {
        cp++;
        comppoints.innerHTML = cp;
    } else if (computer=="Rock")  {
        yp++;
        yourpoints.innerHTML = yp;
    } else {
        console.log("Draw")
    }
});

let b3 = document.querySelector('#b3');

b3.addEventListener('click', function() {
    let computer = "";
    let random = Math.floor(Math.random()*3);
    if (random == 0) {
        computer = "Rock";
    } else if (random == 1) {
        computer = "Paper";
    } else if (random == 2) {
        computer = "Scissors";
    }
    
    yourcall.innerHTML = "Scissors";
    compcall.innerHTML = computer;

    if(computer=="Scissors") {
        console.log('Draw');
    } else if(computer=="Rock") {
        cp++;
        comppoints.innerHTML = cp;
    } else if (computer=="Paper")  {
        yp++;
        yourpoints.innerHTML = yp;
    } else {
        console.log("Draw")
    }
});

let yourcall = document.querySelector('#yourcall');
let compcall = document.querySelector('#compcall');

let yourpoints = document.querySelector('#yourpoints');
let comppoints = document.querySelector('#comppoints');

let h3 = document.querySelector("#win h3");

h3.addEventListener('click', function() {
    if(yp == 3) {
        h3.innerHTML = "You won";
    } else if(cp == 3) {
        h3.innerHTML = "Computer won";
    } else {
        h3.innerHTML = "Play";
    }
});