console.log("tictactoe");
console.log(document);

// document.addEventListener("DOMContentLoaded", function(){
//   // Handler when the DOM is fully loaded
// });
var target;
var turn = true;
document.getElementById("table").addEventListener("click", function(e){

  target = e.target;

  var x = document.createTextNode("X");
  var o = document.createTextNode("O");

  if (target.classList.contains("x") || target.classList.contains("o")) {
    console.log("Please select another square!");
  } else {
    if (turn) {
      target.appendChild(x);
      target.classList.add("x");
      if (checkForWin("x")) {
        console.log("hey");
        alert("Player X has won!")
      }
      turn = !turn;
    } else {
      target.appendChild(o);
      target.classList.add("o");
      if (checkForWin("o")) {
        alert("Player O has won!")
      }
      turn = !turn;
    }
  }
});



var checkForWin = function(sign) {
  console.log(sign);
  console.log(target);
  if ((target.classList.contains("r1c1") && target.classList.contains(sign)) && (target.classList.contains("r1c2") && target.classList.contains(sign)) && (target.classList.contains("r1c3") && target.classList.contains(sign))) {
    console.log("r1");
    console.log("target", target);
    return true;
  } else if ((target.classList.contains("r2c1") && target.classList.contains(sign)) && (target.classList.contains("r2c2") && target.classList.contains(sign)) && (target.classList.contains("r2c3") && target.classList.contains(sign))) {
    return true;
  } else if ((target.classList.contains("r3c1") && target.classList.contains(sign)) && (target.classList.contains("r3c2") && target.classList.contains(sign)) && (target.classList.contains("r3c3") && target.classList.contains(sign))) {
    return true;
  } else if ((target.classList.contains("r1c1") && target.classList.contains(sign)) && (target.classList.contains("r2c1") && target.classList.contains(sign)) && (target.classList.contains("r3c1") && target.classList.contains(sign))) {
    return true;
  } else if ((target.classList.contains("r1c2") && target.classList.contains(sign)) && (target.classList.contains("r2c2") && target.classList.contains(sign)) && (target.classList.contains("r3c2") && target.classList.contains(sign))) {
    return true;
  } else if ((target.classList.contains("r1c3") && target.classList.contains(sign)) && (target.classList.contains("r2c3") && target.classList.contains(sign)) && (target.classList.contains("r3c3") && target.classList.contains(sign))) {
    return true;
  } else if ((target.classList.contains("r1c1") && target.classList.contains(sign)) && (target.classList.contains("r2c2") && target.classList.contains(sign)) && (target.classList.contains("r3c3") && target.classList.contains(sign))) {
    return true;
  } else if ((target.classList.contains("r1c3") && target.classList.contains(sign)) && (target.classList.contains("r2c2") && target.classList.contains(sign)) && (target.classList.contains("r3c1") && target.classList.contains(sign))) {
    return true;
  } else {
    return false;
  }
}

// ["r1c1" sign, "r1c2" sign, "r1c3" sign]
// ["r2c1" sign, "r2c2" sign, "r2c3" sign]
// ["r3c1" sign, "r3c2" sign, "r3c3" sign]