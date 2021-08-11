let output = 0;
let arr =[];
document.getElementById('one').onclick = function (e) {
arr.push(1);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('two').onclick = function (e) {
arr.push(2);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('three').onclick = function (e) {
arr.push(3);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('four').onclick = function (e) {
arr.push(4);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('five').onclick = function (e) {
arr.push(5);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('six').onclick = function (e) {
arr.push(6);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('seven').onclick = function (e) {
arr.push(7);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('eight').onclick = function (e) {
arr.push(8);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('nine').onclick = function (e) {
arr.push(9);
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('divide').onclick = function (e) {
arr.push('/');
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('times').onclick = function (e) {
arr.push('*');
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('minus').onclick = function (e) {
arr.push('-');
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('plus').onclick = function (e) {
arr.push('+');
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('decimal').onclick = function (e) {
arr.push('.');
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('equals').onclick = function (e) {
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById('clear').onclick = function (e) {
arr = [0];
document.getElementById("display").innerHTML = arr.join('');
}
document.getElementById("display").innerHTML = output;
