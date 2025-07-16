let uscore = 0;
let cscore = 0;
let compchoise = () => {
    let arr = ["stone", "paper", "scissor"];
    let a = Math.floor(Math.random() * 3);
    return arr[a];
}

let elements = document.querySelectorAll(".logo");
elements.forEach(element => {
    element.addEventListener("click", () => {
        const user = element.getAttribute("id");
        playgame(user);

    })
})

const winner = (userwin, computerchoise, userchoise) => {
    let result = document.querySelector("#result");
    let userscore = document.querySelector(".score1");
    let compscore = document.querySelector(".score2");
    if (userwin === true) {
        // console.log("user win! computer choose : ", computerchoise);
        result.innerText = `You Win! your ${userchoise} beats ${computerchoise}`;
        userscore.innerText = ++uscore;
        result.style.backgroundColor = "green";

    } else {
        // console.log("computer win! computer choose : ", computerchoise);
        result.innerText = `You lose! ${computerchoise} beats your ${userchoise}`;
        compscore.innerText = ++cscore;
        result.style.backgroundColor = "red";
    }

}

function playgame(userc) {
    let userchoise = userc;
    let computerchoise = compchoise();
    // console.log("USER CHOOSE = ", userchoise);
    // console.log("COMPUTER CHOOSE = ", computerchoise);
    let userwin = true;
    if (userchoise === computerchoise) {
        let result = document.querySelector("#result");
        result.innerText = "It's a Draw.";
        // console.log("it's a draw");
    } else if (userchoise === "paper") {
        userwin = computerchoise === "stone" ? true : false;
        winner(userwin, computerchoise, userchoise);
    } else if (userchoise === "stone") {
        userwin = computerchoise === "paper" ? false : true;
        winner(userwin, computerchoise, userchoise);
    } else {
        userwin = computerchoise === "paper" ? true : false;
        winner(userwin, computerchoise, userchoise);
    }
}



// class user {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewdata(){
//         console.log("JAI JAAT");
//     }
// }
// let student1 = new user("ajay","abc@gmail.com");
// console.log(student1);
// let student2 = new user("bharti","bharti@gmail.com");
// console.log(student2);
