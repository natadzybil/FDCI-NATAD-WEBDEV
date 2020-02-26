
var addHobby = document.getElementById("add_list");
addHobby.addEventListener("click", addHobbyList);


var submitButt = document.getElementById("submit");
submitButt.addEventListener("click", warnBoxes);

var charCount = document.getElementById("inputcomment");
charCount.addEventListener("keydown",countChar);

var getgtOver = document.getElementById("new-butt");
getgtOver.addEventListener("click",getOver);

function addHobbyList(){
	//Check all hobby list
	var lastHobbyList = document.querySelectorAll("div.checkbox");
	var lastHob = lastHobbyList[lastHobbyList.length-1];

	//Create input to add new hobby list
	var newHobCb = document.createElement("INPUT");
	newHobCb.setAttribute("type", "text");
	newHobCb.setAttribute("class", "form-control");
	newHobCb.setAttribute("id", "hobby_box");

	//Create a SAVE Button
	var savebutton =  document.createElement("BUTTON");
	savebutton.innerHTML = "Save";
	savebutton.id = "save_button";
	savebutton.setAttribute("class","btn btn-info");
	savebutton.setAttribute("onclick", "saveHobby()"); // function of the SAVE button

	lastHob.appendChild(newHobCb); //put new list after the last list
	newHobCb.insertAdjacentElement("afterend",savebutton); // put SAVE BUTTON after new list
	document.getElementById("add_list").style.display="none"; // hide ADD BUTTON
}

function saveHobby() {

	var newHobby = document.getElementById("hobby_box").value; // get input 
	

	if (newHobby == "") {
		alert("Please put a hobby.");
		return;
	} else if (!isNaN(newHobby)) {
		alert("Do not use numbers.");
		return;
	}

	var lastHobbyList = document.querySelectorAll("div.checkbox"); // check all  list
	var lastHob = lastHobbyList[lastHobbyList.length-1]; //check last list

	var newHobbyDiv = document.createElement("DIV");
	newHobbyDiv.setAttribute("class", "checkbox");
	newHobbyDiv.setAttribute("name","hobb");

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "checkbox-id";
	checkbox.value = newHobby;

	var listlabel = document.createElement('label');
	listlabel.id = "hobby-id";

	lastHob.insertAdjacentElement("afterend", newHobbyDiv);
	listlabel.appendChild(checkbox); 
	newHobbyDiv.appendChild(listlabel); 
	listlabel.appendChild(document.createTextNode(newHobby));
	
	document.getElementById("save_button").remove();
 	document.getElementById("hobby_box").remove();
    document.getElementById("add_list").style.display = "block";

}

function newFrame(){

	var getName = document.getElementById("inputname").value;
	var getGender = document.getElementById("inputgender").value;
	var getComment = document.getElementById("inputcomment").value;

	var oldDisp = document.getElementById("frame-list");
	var newDisp = document.getElementById("new-display");
	var newButt = document.getElementById("new-butt");

	var checkedBoxes = document.querySelectorAll('input[type="checkbox"]'); // count checked checkbox

	var selectedHobb = [];

	for (var i = 0, x = checkedBoxes.length; i < x; i++) 
	{		
		if(checkedBoxes[i].checked) {
			selectedHobb.push(checkedBoxes[i].value);
		}

	}

	var str = selectedHobb.join(', ');

	oldDisp.setAttribute("class","container-fluid d-none");
	
	newButt.setAttribute("class","btn btn-info d-block");
	newButt.innerHTML = "Go Over";

	newDisp.setAttribute("class","card bg-info d-block");
	newDisp.innerHTML = "Hi " + "<b>" + getName + "</b>" +"<br>"
	+ "Your Gender is " + "<b>" + getGender + "</b>" + "<br>"
	+ "Your Hobbies are " + str + "<br>"
	+ "Here is a little fact abour yourself : " + getComment;

	var belowprofile = document.querySelector("#profile");
	belowprofile.insertAdjacentElement('afterend',newDisp);

}

function countChar(){

	var charplus = document.getElementById("current");
	var countText = document.getElementById("inputcomment").value.length;
	charplus.innerHTML =+ countText;

}

function warnBoxes() {
	var checkName = document.getElementById("inputname").value;
	var checkComment = document.getElementById("inputcomment").value;
	var checkBoxthree = document.querySelectorAll('input[type="checkbox"]:checked').length; // count checked checkbox
	
	var warningName = document.getElementById("warning-name");
	var warningComment = document.getElementById("warning-comment");
	var warningCheck = document.getElementById('warning-cbox');


	if (checkName == "" || checkName == null) {
		
		warningName.setAttribute("class","alert alert-danger d-block");
		warningName.innerHTML = "Please input Name.";

		var belowprofile = document.querySelector("#profile");
		belowprofile.insertAdjacentElement('afterend',warningName);
		return;

	} else {
		warningName.setAttribute("class","alert alert-danger d-none");
	}
			
	if (checkComment == "" || checkComment == null) {
		
		warningComment.setAttribute("class", "alert alert-danger d-block");
		warningComment.innerHTML = "Please put something about yourself.";
		

		var belowprofile = document.querySelector("#profile");
		belowprofile.insertAdjacentElement('afterend',warningComment);
		return;

	} else {

		warningComment.setAttribute("class","alert alert-danger d-none");	

	}

	if (checkBoxthree == 'undefined' || checkBoxthree == null || checkBoxthree == 0) {

		warningCheck.setAttribute("class", "alert alert-danger d-block");
		warningCheck.innerHTML = "Please select your hobbies";

		var belowprofile = document.querySelector("#profile");
		belowprofile.insertAdjacentElement('afterend',warningComment);
		return;

	} else {

		if (checkBoxthree < 3) {

			warningCheck.setAttribute("class", "alert alert-danger d-block");
			warningCheck.innerHTML = "Please select atleast three(3) hobbies.";
			return;

		} else {
			warningCheck.setAttribute("class","alert alert-danger d-none");
		}

	}
		newFrame();

}

function getOver(){

	location.reload();
	
}

