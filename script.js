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


// MULTIPLICATION

// button selection here
var multiplicationButton = document.querySelector(".total-button");

function multiplication() {
  // input selection here
  var input5 = document.querySelector(".input-05").value;
  var input6 = document.querySelector(".input-06").value;
  var multiplicationAmmount = document.querySelector(".multiplication-ammount");

  var multiplication = parseInt(input5) * parseInt(input6);
  multiplicationAmmount.innerText = "Your Total ammount is " + multiplication + " BDT!";
}


// DIVISION

// button selection here
var divisionButton = document.querySelector(".division-button");

function division() {
  // input selection here
  var input7 = document.querySelector(".input-07").value;
  var input8 = document.querySelector(".input-08").value;
  var divisionAmmount = document.querySelector(".division-ammount");

  var division = parseInt(input7) / parseInt(input8);
  divisionAmmount.innerText = "Your Total ammount is " + division + " BDT!";
}