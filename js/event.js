// Option 2 
function makeYellow() {
	document.body.style.backgroundColor = 'yellow';
}
// option 3 
const makeBlue = document.getElementById('make-blue')
makeBlue.onclick = makeBlues
function makeBlues() {
	document.body.style.backgroundColor = 'blue';
}
const makePurple = document.getElementById('make-purple')
makePurple.onclick = function (){
	document.body.style.backgroundColor='purple'
}
const greenBtn = document.getElementById("make-green");
greenBtn.addEventListener('click', greenButton)

function greenButton() {
	document.body.style.backgroundColor= 'green'
}
const orangeBtn = document.getElementById("make-orange");
orangeBtn.addEventListener('click', function () {
	document.body.style.backgroundColor='orange'
})
// document.getElementById('make-gray').addEventListener('click', function(){})
document.getElementById('make-gray').addEventListener('click', function () {
	document.body.style.backgroundColor = 'gray';
})