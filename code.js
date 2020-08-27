// calls two event listeners on page load. This prevents the code from running automatically and allows the user to input a value
window.onload = function () {
  // main logic will run X amount of times (depending on the value the user entered in the number field). This code will run when the "flip Coin" button is pressed
  document.getElementById("flip").addEventListener("click", coinFlip);
  // adds a listener for resetGame function
  document.getElementById("restartGame").addEventListener("click", resetGame);
};

// clears the values for HTML class results and sets value of after to an empty string again.
function resetGame() {
  document.getElementsByClassName("results").innerHTML = "";
  after = [];
  location.reload(true);
}

// creates our strings.
var before = ["heads", "tails"];
var after = [];

/* this function takes the value of the number input for the user and then loops through the first part. This first part searches the before var for a random index (between 1 & 2) and then pushes that value to the after var. The second part of this code searches through the after var and filters the results by their outcome and then prompts the lets the user know how many heads and tails they flipped*/
function coinFlip() {
  repeat = document.getElementById("name").value;
  for (let i = 0; i < repeat; i++) {
    after.push(before[Math.floor(Math.random() * before.length)]);
  }
  var findHeads = "heads";
  var heads = after.reduce(
    function (findHeads, total, number) {
      return (total += number == findHeads);
    }.bind(this, findHeads),
    0
  );
  document.getElementById("heads").innerHTML =
    "You Flipped Heads " + heads + " times";

  var findTails = "tails";
  var tails = after.reduce(
    function (findTails, total, number) {
      return (total += number == findTails);
    }.bind(this, findTails),
    0
  );
  document.getElementById("tails").innerHTML =
    "You Flipped Tails " + tails + " times";
}

/*var before = ["heads" , "tails"];
var after = []


 repeat = 33;
  for (let i = 0; i < repeat; i++) {
let value = before[Math.floor(Math.random() * before.length)]
after.push(value)
  }
console.log(after) */
