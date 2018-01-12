function clearbtn() {
	document.cal.display.value = "";
}
function deletebtn() {
	// cal.display.value = cal.display.value.slice(0,cal.txt.value.length-1);
	var value = document.cal.display.value;
    document.cal.display.value = value.substr(0, value.length - 1);
}
function powerbtn(){
	var value = document.cal.display.value;
	document.cal.display.value = Math.pow(value, value);
}