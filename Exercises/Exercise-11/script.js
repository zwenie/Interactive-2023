function clock(){
	d = new Date();
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();

	hr_rotation = 30 * hr + min/2; //720 degrees
	min_rotation = 6 * min; //360 degrees
	sec_rotation = 6 * sec; //360 degrees

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;

}

setInterval(clock, 1000);


var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock2").innerHTML = d.toLocaleTimeString();
}