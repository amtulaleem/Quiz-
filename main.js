//Program Title
// COIN FLIP SIMULATOR
//HTML Variables
document.getElementById("btn");
addEventListener("click", btnClicked);
let question = document.getElementById("question");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  let input = document.getElementById("search-in");
  // generate A Random Number

  if (randNum < 0.2) {
    document.getElementById("output").innerHTML = "Outlook not so good.";
  } else if (randNum < 0.4) {
    document.getElementById("output").innerHTML = "Without a doubt, yes";
  } else if (randNum < 0.6) {
    document.getElementById("output").innerHTML = "Don't count on it.";
  } else if (randNum < 0.8) {
    document.getElementById("output").innerHTML = "As I see it, yes.";
  } else {
    document.getElementById("output").innerHTML = "Concentrate and ask again";
  }
}
