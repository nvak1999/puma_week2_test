/** 
 Hint :  function nameOfFunction(input1,input2,input3........){
  step 1
  step 2
  step 3
===> to print to the console : console.log() 
===> to return any value     : return theValue
}
*/
/** 
 * Part1 (7)
   Given an array text = ["text 1", "text 2", "text 3","text 4", "text 5"]
      1- add "last text" to END the array 
      2- print to the console all the texts
      3- write a function to print to console random text of the array
      4- enhance the function so that it take an number input that less than length of array
      5- if the input is odd, print only ODD-position text
      6- if the input is even, print only even-position text
      7- if the input is zero, randomly assign new number and do step 5->6
 */

/**
 * Part 2 (3)
  Instead of printing to the console, let now print the result to the website (HTML document)
  Make a button that when clicked :
  1 : `The length of the array is : ....`
  2 : `The number is : ..., it is : .... (odd/even)`
  3 :  Make a button to random a number 
        - then execute step 4 part 1
        - then changing value of step 1,2, show to website
*/

/** Bounus:
 * Do not create more files. Change all text color into anycolor but black
 * Create another button that create another button that able to make another button
 */

let myarr = ["text 1", "text 2", "text 3", "text 4", "text 5"];
newLength = myarr.push("end");
console.log(myarr);

function random(arr) {
  var i = 0;

  while (i < 6) {
    var numberRandom = Math.floor(Math.random() * 6);
    console.log(arr[numberRandom]);
    i++;
  }
  console.log("----------------");
}
random(myarr);

function randomless(arr, number) {
  var x = arr.length;
  if (number > x) {
    console.log("Nuber need to less than length of array");
  } else
    for (var i = 0; i < number; i++) {
      console.log(arr[i]);
    }
  console.log("---------------");
}
randomless(myarr, 2);
let ODD = [myarr[1], myarr[3], myarr[5]];
let even = [myarr[0], myarr[2], myarr[4]];
function randomODD(arr, number) {
  if (number == 0) {
    number = Math.floor(Math.random() * 6);
  }
  if (number % 2 == 0) {
    for (var i = 0; i < number; i = i + 2) {
      console.log(arr[i]);
    }
  } else
    for (var i = 1; i < number; i = i + 2) {
      console.log(arr[i]);
    }
}

function randomNumberNnHtml(yournumber) {
  document.getElementById(
    "field2"
  ).innerHTML = `The length of the array is :${myarr.length}`;
  document.getElementById("field3").innerHTML = `The number ODD is : ${ODD}`;
  document.getElementById("field4").innerHTML = `The number even is : ${even}`;
}
