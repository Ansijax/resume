/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Massimo La Morgia";
var role = "Phd student at Sapienza Univeristy";
var awesomeThoughts = "I am Massimo and i am AWESOME";
funThoughts =awesomeThoughts.replace("AWESOME","fun")
/*var  str = "audacity";
var newStr = str.slice(2);
console.log("U" + newStr);
console.log(funThoughts);*/
var skill= ["C","C++","Java Card", "Java" , "js" , " jQuery"];
var bio =	{
	"name" : name,
	"role" : role,
	"contacts" :{ 
		"location": "Roma, Italy",
		"mail": "massimo.lamorgia@uniroma1.it",
		"phone": "+39 3930743287"
	},
	"welcomeMessage" :"hi all",
	"skills" :skill,
	"image":"./images/personal_photo.jpeg"

};

var work ={
	"jobs":[
	{
		"employers":"Computer Science Department",
		"title":"Phd student",
		"location": "Roma, Sapienza Univeristy, Via Regine Elena 295",
		"date": " from 11/2015 to present",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"employers":"TAGstagram",
		"title":"Founder",
		//"location": "Roma, Sapienza Univeristy",
		"date": " from 09/2012 to present",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"employers":"PayBay Network",
		"title":"Android & NFC consultant",
		"location": "Roma, via xx settembre",
		"date": " from 10/2013 to 03/2014",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"employers":"Computer Science Department",
		"title":"Research Fellow",
		"location": "Roma, Sapienza Univeristy",
		"date": " from 01/2013 to 10/2015",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"employers":"CATTID",
		"title":"Research Fellow",
		"location": "Roma, Sapienza Univeristy",
		"date": " from 09/2011 to 12/2012",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
	]
};


var projects =
	[ 
	
	{
		"title":"TAGstagram",
		"description":"Android app",
		"link":"www.tagstagram.lol",
		"image":"www.tagstagram.lol"
	},
	{
		"title":"Passpartu",
		"description":"Android app",
		"link":"www.tagstagram.lol",
		"image":"www.tagstagram.lol"
	}
	];






var education = [
{ "school": "La Sapienza",
"location": "Rome, Sapienza Univeristy",
"grade":"Bachelor degree"
},
{ "school": "La Sapienza",
"location": "Rome, Sapienza Univeristy",
"grade":"Master degree"
},
{ "school": "Udacity",
"course": "Developing Android App",
"grade":"Graduated"
},
{ "school": "Udacity",
"course": "JavaScript Basics",
"grade":"Attende"
}
];

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMail = HTMLemail.replace("%data%",bio.contacts.mail);
var formattedPhone = HTMLmobile.replace("%data%",bio.contacts.phone);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.image);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMail);
$("#header").append(formattedPhone);
$("#header").append(formattedLocation);
$("#header").append(formattedPic);


function inName(){

	name = name.toUpperCase();

	var splittedName = name.split(" ");
	var firstNameLower = splittedName[0].slice(1).toLowerCase();

	firstNameLower = splittedName[0][0] + firstNameLower;
	var newName = firstNameLower;
	for (var i = 1; i < splittedName.length; i++){
		newName = newName + " "+ splittedName[i];
	}
	return newName;
}

$(document).click(function(loc){

	logClicks(loc.pageX, loc.pageY);

	//console.log("x value:" + loc.pageX + " y value: "+ loc.pageY );
});

if(bio.skills.length > 0){
	console.log("skill");
	$("#header").append(HTMLskillsStart);
	for (job in bio.skills){
		var formattedskill = HTMLskills.replace("%data%", bio.skills[job]);
		$("#skills").append(formattedskill);
	}

}


for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employers);
	var formattedTitle  = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	displayWork();	

}


projects.display = function(){
console.log("test");
	for (project in projects){
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
		var projectDescription= HTMLprojectDescription.replace("%data%", projects[project].description);
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDescription);
	
	}
};

projects.display();

$("#main").append(internationalizeButton);

function displayWork(){

	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedData = HTMLworkDates.replace("%data%", work.jobs[job].date);
	$(".work-entry:last").append(formattedData);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);


}

$("#map-div").append(googleMap);
var formmattedName = HTMLheaderName.replace("%data%",name);
var formmattedRole = HTMLheaderRole.replace("%data%",role);
// $("#main").append(funThoughts);
//$("#header").append(formmattedName);
//$("#header").append(formmattedRole);
//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contact);
// $("#main").append(bio.welcome);
// $("#main").append(bio.skill);
//$("#main").append(bio.contact.mail);

 