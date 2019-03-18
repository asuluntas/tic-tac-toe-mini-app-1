console.log("tictactoe");
console.log(document);
document.getElementById("table").addEventListener("click", function(e){
  //console.log(e.target);
  var x = document.createTextNode("X");
  e.target.appendChild(x);

});


var turn = true;

var togglePiece = function() {

  var x = document.createTextNode("X");
  var o = document.createTextNode("O");

  document.getElementById("table").addEventListener("click", function(e){
  if (true) {
    e.target.appendchild(x);
    turn = !turn;
  }
  e.target.appendchild(o);
  turn = !turn;
  });

}

