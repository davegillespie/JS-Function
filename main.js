
let swept = false;
let mopped = false;
let dusted = false;

function sweep() {
  swept = true;
  logAndShowResults("Hurray, you swept!");
  allTheThings();
}

function mop() {
  mopped = true;
  logAndShowResults("Yay, you even mopped!");
  allTheThings();
}

function dust() {
  dusted = true;
  logAndShowResults("Unreal, you even dusted!");
  allTheThings();
}

function allTheThings() {
  (swept === true && mopped === true && dusted === true); {
    logAndShowResults("Wow, you are ok at this!");
    let swept = false;
    let mopped = false;
    let dusted = false;
  }
}

const displayMessage = function(message) {
  document.getElementById('results').innerText += `${message}\n`;
}

const logAndShowResults = (message) => {
  displayMessage(message);
  console.log(message);
}







// 2nd example
// let promptName = prompt("what is your name?");
// let promptAge = prompt("what is your age?");
//
// nameAndAge(promptName, promptAge);
//
// function nameAndAge(name, age) {
//   console.log(`${name}, ${age}`);
// }
