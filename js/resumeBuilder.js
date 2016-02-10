
var work = {
	"jobs": [
		{
		"title": "scientific project lead",
		"employer": "Syngenta",
		"location": "Landskrona, Sweden",
		"dates": "2013 -",
		"description": "problem solving, analyzing results scientifically in R (statistic programming)"
		},
		{
		"title": "breeding project lead",
		"employer": "Syngenta",
		"location": "Landskrona Sweden",
		"dates": "2009 - 2013",
		"description": "developing sugarbeet hybrids for the european market, using genetic data, physical inspection, analyzing market needs and statistical tools for field data"
		},
		{
		"title": "post doc plant physiology",
		"employer": "Lund University",
		"location": "Lund, Sweden",
		"dates": "2009",
		"description": "analyzing phosphor pathway in plants using molecular techniques"
		},
		{
		"title": "post doc yeast evolution",
		"employer": "Lund University",
		"location": "Lund Sweden",
		"dates": "2007 - 2009",
		"description": "analyzing the evolution of a fast evolving yeast strain with bioinformatic programming in RUBY"
		},
		{
		"title": "post doc yeast fermentation",
		"employer": "Lund University",
		"location": "Lund, Sweden",
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
	"contacts": {
		"mobile": " +46 73494092",
		"email": "linda.hellborg@gmail.com",
		"location": " Landskrona, Sweden",
		"github": "https://github.com/lhellborg"
		},
	"pictureURL": "images/LindaHead.jpg",
	"welcomeMessage": "Welcome to my page, I am so glad YOU are here!",
	"skills": ["bioinformatics", "breeding", "genetics", "molecular biology"]
}


var education = {
	"schools": [
		{
		"name": "Statistics for biologist using R",
		"location": "Lund, Sweden",
		"degree": "PhD course",
		"dates": "2014",
		"major": ["statistic" , " R programming"],
		"url": "http://www.lunduniversity.lu.se/"
		},
		{
		"name": "Evolutionay Biology Center, Uppsala University",
		"location": "Uppsala, Sweden",
		"degree": "PhD in genetics",
		"dates": "1999 - 2004",
		"major": ["evolutionary genetics" , " population genetics in mammals"],
		"url": "http://www.ebc.uu.se/"
		},
		{
		"name": "University of Lund/Uppsala",
		"location": "Lund, Sweden",
		"degree": "introduction to scientific research",
		"dates": "1998 - 1999",
		"major": ["yoghurt fermentation", " water sanitation with microorganisms", " population genetics in lynx"],
		"url": "http://www.lunduniversity.lu.se/"
		},
		{
		"name": "University of Lund",
		"location": "Lund, Sweden",
		"degree": "Master",
		"dates": "1993 -1998",
		"major": ["molecular biology"],
		"url": "http://www.lunduniversity.lu.se/"
		},
		{
		"name": "PLNU",
		"location": "Point Loma, San Diego, US",
		"degree": "Freshman",
		"dates": "1992-1993",
		"major": ["track and field"],
		"url": "http://www.pointloma.edu/"
		}
	],

	"onlineCourses": [
		{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://www.udacity.com/course/ud804"
		},
		{
		"title": "HTML & CSS",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https://www.codecademy.com/learn"
		},
		{
		"title": "JavaScript",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https://www.codecademy.com/learn"
		},
		{
		"title": "jQuery",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https://www.codecademy.com/learn"
		},
		{
		"title": "Ruby",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https://www.codecademy.com/learn"
		},
		{
		"title": "SQL: Analyzing Business Metrics",
		"school": "codecadamy",
		"dates": 2016,
		"url": "https://www.codecademy.com/learn"
		}
	]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#header").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").append(formattedEmail);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").append(formattedLocation);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
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
};

bio.display();

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

/* a function to display the work object and all of it's properties */
work.displayWork = function() {
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
work.displayWork();

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

education.display = function() {
	
	for(school in education.schools) {
		
		if (education.schools.hasOwnProperty(school)) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);			
		};
	};

	$(".education-entry:last").append(HTMLonlineClasses);

	for (onLineCourse in education.onlineCourses) {

		if (education.onlineCourses.hasOwnProperty(onLineCourse)) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onLineCourse].title);
			$(".education-entry:last").append(formattedTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onLineCourse].school);
			$(".education-entry:last").append(formattedSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onLineCourse].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onLineCourse].url);
			$(".education-entry:last").append(formattedURL);
		};
	};
};

education.display();

/* adding a map to the resume */
$("#mapDiv").append(googleMap);
