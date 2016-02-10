
var work = {
	"jobs": [
		{
		"title": "scientific project lead",
		"employer": "Syngenta",
		"location": "Landskrona",
		"dates": "2013 -",
		"description": "problem solving, analyzing results scientifically in R (statistic programming)"
		},
		{
		"title": "breeding project lead",
		"employer": "Syngenta",
		"location": "Landskrona",
		"dates": "2009 - 2013",
		"description": "developing sugarbeet hybrids for the european market, using genetic data, physical inspection, analyzing market needs and statistical tools for field data"
		},
		{
		"title": "post doc plant physiology",
		"employer": "Lund University",
		"location": "Lund",
		"dates": "2009",
		"description": "analyzing phosphor pathway in plants using molecular techniques"
		},
		{
		"title": "post doc yeast evolution",
		"employer": "Lund University",
		"location": "Lund",
		"dates": "2007 - 2009",
		"description": "analyzing the evolution of a fast evolving yeast strain with bioinformatic programming in RUBY"
		},
		{
		"title": "post doc yeast fermentation",
		"employer": "Lund University",
		"location": "Lund",
		"dates": "2005 - 2007",
		"description": "analyzing the benefit of a yeast species in bioethanol production using biochemical tools"
		}
	]
}

var projects = {
	"projects" : [
		{
		"title": "261 Consulting webpage",
		"dates": "jan 2016",
		"description": "interactive and responisve webpage for the company 261 Consulting",
		"images": ["images/261Cons1-xsmall.jpg", "images/261Cons2-xsmall.jpg", "images/261Cons3-xsmall.jpg"]
		},
		{
		"title": "responsive webpage",
		"dates": "jan 2016",
		"description": "interactive and responisve webpage in the Udacity front end deveolper course",
		"images": ["images/p1a-xsmall.jpg", "images/p1b-xsmall.jpg", "images/p1d-xsmall.jpg", "images/p1md-xsmall.jpg", "images/p1xs-xsmall.jpg"]
		}
	]
}

var bio = {
	"name": "Linda Hellborg",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": " +46 73494092",
		"email": "linda.hellborg@gmail.com",
		"location": " Landskrona, Sweden",
		"github": "https:/* github.com/lhellborg"
		},
	"pictureURL": "images/LindaHead.jpg",
	"welcomeMessage": "Welcome to my page, I am so glad YOU are here!",
	"skills": ["bioinformatics", "breeding", "genetics", "molecular biology"]
}


var education = {
	"schools": [
		{
		"name": "Evolutionay Biology Center, Uppsala University",
		"location": "Uppsala, Sweden",
		"degree": "PhD in genetics",
		"dates": "1999 - 2004",
		"major": ["evolutionary genetics" , "population genetics in mammals"],
		"url": "www.ebc.uu.se/"
		},
		{
		"name": "University of Lund/Uppsala",
		"location": "Lund and Uppsala, Sweden",
		"degree": "introduction to scientific research",
		"dates": "1998 - 1999",
		"major": ["yoghurt fermentation", "water sanitation with microorganisms", "population genetics in lynx"],
		"url": "www.lunduniversity.lu.se/"
		},
		{
		"name": "University of Lund",
		"location": "Lund, Sweden",
		"degree": "Master",
		"dates": "1993 -1998",
		"major": ["molecular biology"],
		"url": "www.lunduniversity.lu.se/"
		},
		{
		"name": "PLNU",
		"location": "Point Loma, San Diego, US",
		"degree": "Freshman",
		"dates": "1992-1993",
		"major": ["track and field", "speech", "history of music", "psycology"],
		"url": "http:/* www.pointloma.edu/"
		}
	],

	"onlineCourses": [
		{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2016,
		"url": "http:/* www.udacity.com/course/ud804"
		},
		{
		"title": "HTML & CSS",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https:/* www.codecademy.com/learn"
		},
		{
		"title": "JavaScript",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https:/* www.codecademy.com/learn"
		},
		{
		"title": "jQuery",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https:/* www.codecademy.com/learn"
		},
		{
		"title": "Ruby",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https:/* www.codecademy.com/learn"
		},
		{
		"title": "SQL: Analyzing Business Metrics",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https:/* www.codecademy.com/learn"
		}
	]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

/* change the last name to upper case and teh first name to lower case except fist letter! */
function inName() {
	var name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1]		
};

/* make a button to the end of the end of the document that internationalize the name */
$("#main").append(internationalizeButton)

var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#header").append(formattedEmail);

var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#header").append(formattedLocation);

var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#header").append(formattedGithub);

var formattedMyPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedMyPicture);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

/* check and adding skills to the resume */
if(bio["skills"].length > 0) {

	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkill);
	});
};

/* a function to display the work object and all of it's properties */
function displayWork() {
	/*  add jobs in work section in resume */
	for (job in work.jobs) {
		/* checks that jobs key has a property assigned to it */
		if(work.jobs.hasOwnProperty(job)) {

			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);

		};
	};
};

/* calling displaywork */
displayWork();

/* making a function to the project ogject by encapsulations to display all of the projects */
projects.display = function() {
	/* add projects into the resume */
	for (project in projects.projects) {
		/* check if projects key has own value */
		if (projects.projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			};
		};
	};
};

projects.display();

