console.log("tictactoe");
console.log(document);

// document.addEventListener("DOMContentLoaded", function(){
//   // Handler when the DOM is fully loaded
// });

var turn = true;
document.getElementById("table").addEventListener("click", function(e){
  //console.log(e.target);
  var x = document.createTextNode("X");
  var o = document.createTextNode("O");

  if (e.target.classList.contains("cell")) {
    console.log("Please select another square!");
  } else {
    if (turn) {
      e.target.appendChild(x);
      e.target.classList.add("cell");
      turn = !turn;
    } else {
      e.target.appendChild(o);
      e.target.classList.add("cell");
      turn = !turn;
    }
  }
});



