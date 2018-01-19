function display() {
	var fnum = parseInt(document.getElementById("firstNum").value);
	var snum = parseInt(document.getElementById("secondNum").value);
	var bgcolor = document.getElementById("bgcolor").value;
	var txtcolor = document.getElementById("txtcolor").value;
	// console.log(bgcolor);
	var cont = "<table border='1'>";
	for (i=1;i<fnum + 1;i++) {
		cont += "<tr> "
		for (j=1;j<snum + 1;j++) {
			// document.write(i+"*" +j +"=" +(i*j) + "<br>");
			cont += "<td style='width:30px;height:30px;text-align:center;background-color:" + bgcolor +";" + "color:"+txtcolor+";'>" + (i*j) + "</td>";
		}
		cont += "</tr>";
	} 
	cont += "</table>";
	document.getElementById("tbl").innerHTML = cont;
}