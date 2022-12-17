// button selection here
var totalButton = document.querySelector(".total-button");

function num() {
  // input selection here
  var input1 = document.querySelector(".input-01").value;
  var input2 = document.querySelector(".input-02").value;
  var totalAmmount = document.querySelector(".total-ammount");

  var summation = parseInt(input1) + parseInt(input2);
  totalAmmount.innerText = "hello";
}