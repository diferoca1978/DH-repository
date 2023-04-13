//Game stone, paper or scissors use the tables or true and comparative operators.
 

let user = "paper";
    computer = "scissors";
  if(user === computer) {
    console.log("continue");
} else if (user == "stone" && computer == "scissors") {
    console.log("User Win");
} else if (user == "paper" && computer == "stone") {
    console.log("User win");
} else if(user == "scissors" && computer == "paper") {
    console.log("User Win");
} else {
    console.log("Computer win");
}