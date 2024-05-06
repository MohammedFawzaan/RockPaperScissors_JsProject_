let b1 = document.querySelector('#b1');
let yp = 0, cp = 0;

let yourcall = document.querySelector('#yourcall');
let compcall = document.querySelector('#compcall');

let yourpoints = document.querySelector('#yourpoints');
let comppoints = document.querySelector('#comppoints');

let win = document.querySelector('#win');

let computerfun = function() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else if (random == 2) {
        return "Scissors";
    }
}

b1.addEventListener('click', function () {
    let computer = computerfun();

    yourcall.innerHTML = "Rock";
    compcall.innerHTML = computer;

    if (computer == "Rock") {
        console.log('Draw');
    } else if (computer == "Paper") {
        cp++;
        comppoints.innerHTML = cp;
        win.innerHTML = "Computer won this Round";
    } else if (computer == "Scissors") {
        yp++;
        yourpoints.innerHTML = yp;
        win.innerHTML = "You won this round";
    } else {
        console.log("Draw")
    }
});


let b2 = document.querySelector('#b2');

b2.addEventListener('click', function () {
    let computer = computerfun();
    
    yourcall.innerHTML = "Paper";
    compcall.innerHTML = computer;
    
    if (computer == "Paper") {
        console.log('Draw');
    } else if (computer == "Scissors") {
        cp++;
        comppoints.innerHTML = cp;
        win.innerHTML = "Computer won this Round";
    } else if (computer == "Rock") {
        yp++;
        yourpoints.innerHTML = yp;
        win.innerHTML = "You won this round";
    } else {
        console.log("Draw")
    }
});

let b3 = document.querySelector('#b3');

b3.addEventListener('click', function () {
    let computer = computerfun();
    
    yourcall.innerHTML = "Scissors";
    compcall.innerHTML = computer;
    
    if (computer == "Scissors") {
        console.log('Draw');
    } else if (computer == "Rock") {
        cp++;
        comppoints.innerHTML = cp;
        win.innerHTML = "Computer won this Round";
    } else if (computer == "Paper") {
        yp++;
        yourpoints.innerHTML = yp;
        win.innerHTML = "You won this round";
    } else {
        console.log("Draw")
    }
});

let b4 = document.querySelector('#Restartbtn');

b4.addEventListener('click', function () {
    yourpoints.innerHTML = '0';
    comppoints.innerHTML = '0';
    
    yourcall.innerHTML = 'Nothing';
    compcall.innerHTML = 'Nothing';

    win.innerHTML = "Play";
});