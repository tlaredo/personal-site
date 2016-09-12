//Function used to change words under my name every 2 seconds
var text = ["an Engineer.", "a Designer.", "a Student.", "a Foodie."];
var counter = 1;
var elem = document.getElementById("changeText");
setInterval(change, 2000);

function change() {
	elem.innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { counter = 0; }
}
