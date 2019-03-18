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

  if (turn) {
    e.target.appendChild(x);
    turn = !turn;
  } else {
    e.target.appendChild(o);
    turn = !turn;
  }

});



