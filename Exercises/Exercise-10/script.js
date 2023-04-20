function createPurpleCircle(){
 const purpleCircle = document.createElement('div');
 purpleCircle.className = "purpleCircle";
 document.body.appendChild(purpleCircle);
}

document.body.addEventListener('click', createPurpleCircle);

function changeToYellow(){
 const updateSquares = document.querySelectAll('div.purpleCircle')

for(const square of updateSqaures){

	square.className="yellowSquare"
 }
}

var yellowButton = document.querySelector('button');
yellowButton.addEventListener('click', changeToYellow)
