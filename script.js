// SUMMATION

// button selection here
var totalButton = document.querySelector(".total-button");

function summation() {
  // input selection here
  var input1 = document.querySelector(".input-01").value;
  var input2 = document.querySelector(".input-02").value;
  var totalAmmount = document.querySelector(".total-ammount");

  var summation = parseInt(input1) + parseInt(input2);
  totalAmmount.innerText = "Your Total ammount is " + summation + " BDT!";
}


// SUBTRACTION

// button selection here
var totalButton = document.querySelector(".total-button");

function subtraction() {
  // input selection here
  var input3 = document.querySelector(".input-03").value;
  var input4 = document.querySelector(".input-04").value;
  var subtractionAmmount = document.querySelector(".subtraction-ammount");

  var subtraction = parseInt(input3) - parseInt(input4);
  subtractionAmmount.innerText = "Your Total ammount is " + subtraction + " BDT!";
}