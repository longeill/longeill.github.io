let isBulbOn = false;
let lightBulb = document.getElementById("bulb");
let switchButton = document.getElementById("light-switch");

function lightSwitch(){
	if (isBulbOn){
		lightBulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
		switchButton.innerHTML = "Turn light on";
		isBulbOn = false;
	} else {
		lightBulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
		switchButton.innerHTML = "Turn light off";
		isBulbOn = true;
	}
}