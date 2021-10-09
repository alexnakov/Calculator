function one() {
  document.getElementById('display').innerHTML += "1";
}
function two() {
  document.getElementById('display').innerHTML += "2";
}
function three() {
  document.getElementById('display').innerHTML += "3";
}
function four() {
  document.getElementById('display').innerHTML += "4";
}
function five() {
  document.getElementById('display').innerHTML += "5";
}
function six() {
  document.getElementById('display').innerHTML += "6";
}
function seven() {
  document.getElementById('display').innerHTML += "7";
}
function eight() {
  document.getElementById('display').innerHTML += "8";
}
function nine() {
  document.getElementById('display').innerHTML += "9";
}
function add() {
  document.getElementById('display').innerHTML += "+";
}
function minus() {
  document.getElementById('display').innerHTML += "-";
}
function multi() {
  document.getElementById('display').innerHTML += "*";
}
function divide() {
  document.getElementById('display').innerHTML += "/";
}
function zero() {
  document.getElementById('display').innerHTML += "0";
}
function wipe() {
  document.getElementById('display').innerHTML = "";
}
function workout() {
  expression = document.getElementById('display').innerHTML;
  result = eval(expression);
  document.getElementById('display').innerHTML = result;
}