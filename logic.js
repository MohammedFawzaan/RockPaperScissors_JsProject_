let user = prompt('Rock Paper Scissors');
let computer = "";

let you = 0, comp = 0;

let random = Math.floor(Math.random()*3);
if(random==1) {
    computer = "Rock";
} else if(random==2) {
    computer = "Paper";
} else if(random==3){
    computer = "scissors";
}

console.log("You entered : ",user);
console.log("conputer entered : ",computer);

let count = 1;
while(count<3) {
    
    user = prompt('Rock paper Scissors');

    random = Math.floor(Math.random()*3);
    if(random==1) {
        computer = "Rock";
    } else if(random==2) {
        computer = "Paper";
    } else if(random==3){
        computer = "scissors";
    }

    console.log("You entered : ",user);
    console.log("conputer entered : ",computer);

    if(user=="Rock" && computer=="Paper" ) {
        comp++;
    } else if(user == "Paper" && computer=="Scissors") {
        comp++;
    } else if (user == "Scissors" && computer == "Rock") {
        comp++;
    } else if(user=="Paper" && computer=="Rock" ) {
        you++;
    } else if (user == "Scissors" && computer=="Paper") {
        you++;
    } else if (user == "Rock" && computer == "Scissors")  {
        you++;
    } else {
        console.log("Draw")
    }
    count++;
}

if(you > comp) {
    console.log("You are the winner");
} else {
    console.log("Computer is the winner");
}