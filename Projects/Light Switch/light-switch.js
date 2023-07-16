let isBulbOn == false;
let lightBulb == document.getElementById("bulb");
let switchButton == document.getElementById("light-switch");

function lightSwitch(){
	if (isBulbOn){
		lightBulb.src = "pic_bulboff.gif";
		switchButton.innerHTML = "Turn Light On";
		isBulbOn = false;
	} else {
		lightBulb.src = "pic_bulbon.gif";
		switchButton.innerHTML = "Turn Light Off";
		isBulbOn = true;
	}
}
