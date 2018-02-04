var rIndex, table = document.getElementById("table");

function add(){
	var row = table.insertRow(table.length),
		c1 = row.insertCell(0),
		c2 = row.insertCell(1),
		c3 = row.insertCell(2),
		c4 = row.insertCell(3),
		c5 = row.insertCell(4),
		c6 = row.insertCell(5),
		fname = document.getElementById("fname").value,
		dob = document.getElementById("dob").value,
		gender = document.getElementById("gender").value;

	c1.innerHTML = fname;
	c2.innerHTML = dob;
	c3.innerHTML = age(dob);
	c4.innerHTML = gender;
	c5.innerHTML = '<td><button type="button" onclick="edit();">Edit</button></td>';
	c6.innerHTML = '<td><button type="button" onclick="del();">Delete</button></td>';
	selectRow();
}

function age(b){
	var date = new Date(b);
	day = date.getDate();
	month = date.getMonth() + 1;
	year = date.getFullYear();

	var currentDate = new Date();
	curDay = currentDate.getDate();
	curMonth = currentDate.getMonth() + 1;
	curYear = currentDate.getFullYear();

	var age = curYear - year;
	if (curMonth < month){
		age--;
	} else if (curMonth == month){
		if (curDay < day){
			age--;
		}
	}
	return age;
}

function selectRow(){
	for (var i=0;i<table.rows.length;i++){
		table.rows[i].onclick = function(){
			rIndex = this.rowIndex;
			
			document.getElementById('fname').value = this.cells[0].innerHTML;
			document.getElementById('dob').value = this.cells[1].innerHTML;
			document.getElementById('dob').value = this.cells[2].innerHTML;
			// age(b).value = this.cells[2].innerHTML;
			document.getElementById('gender').value = this.cells[3].innerHTML;

		}
	}
}

function edit(){
	var fname = document.getElementById('fname').value,
		dob = document.getElementById('dob').value,
		gender = document.getElementById('gender').value;
	
	table.rows[rIndex].cells[0].innerHTML = fname;
	table.rows[rIndex].cells[1].innerHTML = dob;
	table.rows[rIndex].cells[2].innerHTML = age(dob);
	table.rows[rIndex].cells[3].innerHTML = gender;
	table.rows[rIndex].cells[4].innerHTML = '<td><button type="button" onclick="edit();">Edit</button></td>';
	table.rows[rIndex].cells[5].innerHTML = '<td><button type="button" onclick="del();">Delete</button></td>';
}

function del(){
	table.deleteRow(rIndex);
}