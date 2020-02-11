function getSum() {
	
	var i;
	var sum = 0;
		for (i = 1; i <= 50; i += 2) {
				sum += i;
		}	
		console.log(sum);
		document.getElementById("ans").innerHTML = "SUM: " + sum;

}

function getAverageGrade() {
	
	var students = [['PE', 100], ['Math', 99], ['Science', 98], ['English', 80], ['Filipino', 70]];

		var Avergmarks = 0;

		for (var i=0; i < students.length; i++) 
		{
	       Avergmarks += students[i][1];
	       var avg = (Avergmarks/students.length);
		}

		var corrgrade = "";
        if (avg < 60)
        {
        	corrgrade = "F";
        } 
        else if (avg < 70)
        {
        	corrgrade = "D";
        } 
        else if (avg < 80) 
        {
        	corrgrade = "C";  
        }
        else if (avg < 90) 
        {
        	corrgrade = "B";
        } 
        else if (avg < 100) {
        	corrgrade = "A";
         
		}

		document.getElementById("gradeave").innerHTML = "Average grade: " + avg + "<br>" + "Grade : " + corrgrade;			
}

function getBeepBoop(){

	var completebeepboop = "";

	for (i = 0; i <= 100; i ++ ) {

		completebeepboop +=  "<br>" + i; 
	 		
	   	if (i % 3==0) {
			completebeepboop += " beep";
	   	}
	   	if (i % 5==0) {            
	   		completebeepboop += " boop";
	               
	   	}
	}

	document.getElementById("beepboop").innerHTML = completebeepboop;
}

function getStars() {
	var x, y;
	var completestar = "";
  
	for(x=1; x <= 5; x++) {

		for(y=1; y<=x; y++) {
			completestar += "* ";
		}
		
		completestar += "<br>";
	}

	document.getElementById("asterisk").innerHTML = completestar;

}