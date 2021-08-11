//base display
let output = 0;
//array
let arr =[];
//one
document.getElementById('one').onclick = function (e) {
arr.push(1);
document.getElementById("display").innerHTML = arr.join('');
}
//two
document.getElementById('two').onclick = function (e) {
arr.push(2);
document.getElementById("display").innerHTML = arr.join('');
}
//three
document.getElementById('three').onclick = function (e) {
arr.push(3);
document.getElementById("display").innerHTML = arr.join('');
}
//four
document.getElementById('four').onclick = function (e) {
arr.push(4);
document.getElementById("display").innerHTML = arr.join('');
}
//five
document.getElementById('five').onclick = function (e) {
arr.push(5);
document.getElementById("display").innerHTML = arr.join('');
}
//six
document.getElementById('six').onclick = function (e) {
arr.push(6);
document.getElementById("display").innerHTML = arr.join('');
}
//seven
document.getElementById('seven').onclick = function (e) {
arr.push(7);
document.getElementById("display").innerHTML = arr.join('');
}
//eight
document.getElementById('eight').onclick = function (e) {
arr.push(8);
document.getElementById("display").innerHTML = arr.join('');
}
//nine
document.getElementById('nine').onclick = function (e) {
arr.push(9);
document.getElementById("display").innerHTML = arr.join('');
}
//divide
document.getElementById('divide').onclick = function (e) {
arr.push("div");
document.getElementById("display").innerHTML = arr.join('');
}
//times
document.getElementById('times').onclick = function (e) {
arr.push("mult");
document.getElementById("display").innerHTML = arr.join('');
}
//minus
document.getElementById('minus').onclick = function (e) {
arr.push("min");
document.getElementById("display").innerHTML = arr.join('');
}
//plus
document.getElementById('plus').onclick = function (e) {
arr.push("plus");
document.getElementById("display").innerHTML = arr.join('');
}
//decimal
document.getElementById('decimal').onclick = function (e) {
arr.push("dec");
document.getElementById("display").innerHTML = arr.join('');
}
//equals
document.getElementById('equals').onclick = function (e) {
console.log(arr.join(""))
let a = arr.join("")
console.log(a)
document.getElementById("display").innerHTML = arr.join('');
}
//clear
document.getElementById('clear').onclick = function (e) {
arr = [];
document.getElementById("display").innerHTML = output;
}
//base display
document.getElementById("display").innerHTML = output;

