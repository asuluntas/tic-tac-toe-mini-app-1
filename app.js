console.log("tictactoe");
console.log(document);

// document.addEventListener("DOMContentLoaded", function(){
//   // Handler when the DOM is fully loaded
// });

var turn = true;
document.getElementById("table").addEventListener("click", function(e){

  var x = document.createTextNode("X");
  var o = document.createTextNode("O");

  if (e.target.classList.contains("x") || e.target.classList.contains("o")) {
    console.log("Please select another square!");
  } else {
    if (turn) {
      e.target.appendChild(x);
      e.target.classList.add("x");
      turn = !turn;
    } else {
      e.target.appendChild(o);
      e.target.classList.add("o");
      turn = !turn;
    }
  }
});

function checkForWin(sign) {
  if ()
}

