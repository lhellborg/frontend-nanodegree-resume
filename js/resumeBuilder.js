var work = {
	"jobs": [
	{
		"title": "scientific project lead",
		"employer": "Syngenta",
		"location": "Landskrona, Sweden",
		"dates": "2013 -",
		"description": "Responsible for investigating and improve processes linked to sugarbeet breeding. Analyzing results statistically with R programming. Inform and test new ways of working. The processes to improve included all links in sugarbeet breeding from new ways to analyse result, more efficient breeding, improve first crossing starts, new ways to analyse seed quality and more accurate and efficient promoting system. ",
		"url": "http://www3.syngenta.com/country/in/en/Production_Innovation/Seeds/Pages/home.aspx"
	},
	{
		"title": "breeding project lead",
		"employer": "Syngenta",
		"location": "Landskrona Sweden",
		"dates": "2009 - 2013",
		"description": "Develop commercial hybrids for north west European market. The job involved customer relations, analyzing huge dataset for yield, genetic understanding of different lines and their interaction, diseases in field, farmer practice, travelling, but mostly planning and following up on various projects.",
		"url": "http://www3.syngenta.com/country/in/en/Production_Innovation/Seeds/Pages/home.aspx"
	},
	{
		"title": "post doc plant physiology",
		"employer": "Lund University",
		"location": "Lund, Sweden",
		"dates": "2009",
		"description": "Investigate the biological pathways in starch production and aging through statistical analyses of knockout plants and molecular methods.",
		"url": "http://www.lunduniversity.lu.se/"
	},
	{
		"title": "post doc yeast evolution",
		"employer": "Lund University",
		"location": "Lund Sweden",
		"dates": "2007 - 2009",
		"description": "Characterizing and investigation of non conventionell yeast for bioethanol production through molecular, fermentation and bioinformatic technology. ",
		"url": "http://www.lunduniversity.lu.se/"
	},
	{
		"title": "post doc yeast fermentation",
		"employer": "Lund University",
		"location": "Lund, Sweden",
		"dates": "2005 - 2007",
		"description": "Analyzing the benefit of a yeast species in bioethanol production using biochemical tools.",
		"url": "http://www.lunduniversity.lu.se/"
	}]
};

var projects = {
	"projects": [
	{
		"title": "261 Consulting webpage",
		"dates": "jan 2016",
		"description": "interactive and responisve webpage for the company 261 Consulting",
		"images": ["images/261Cons1-xsmall.jpg", "images/261Cons2-xsmall.jpg", "images/261Cons3-xsmall.jpg"],
		"url": "http://www.261consulting.com/"
	},
	{
		"title": "responsive webpage",
		"dates": "jan 2016",
		"description": "interactive and responsive webpage in the Udacity front end deveolper course",
		"images": ["images/p1a-xsmall.jpg", "images/p1b-xsmall.jpg", "images/p1d-xsmall.jpg", "images/p1md-xsmall.jpg", "images/p1xs-xsmall.jpg"],
		"url": "#"
	}]
};

var bio = {
	"name": "Linda Hellborg",
	"role": "Web Developer",
	"contacts":
	{
		"mobile": " +46 73494092",
		"email": "linda.hellborg@gmail.com",
		"location": " Landskrona, Sweden",
		"github": "https://github.com/lhellborg"
	},
	"biopic": "images/LindaHead.jpg",
	"welcomeMessage": "Welcome to my page, I am so glad YOU are here!",
	"skills": ["bioinformatics", "breeding", "genetics", "molecular biology"]
};

var education = {
	"schools": [
	{
		"name": "Statistics for biologist using R, Lund University",
		"location": "Lund, Sweden",
		"degree": "PhD course",
		"dates": "2014",
		"majors": ["statistic", " R programming"],
		"url": "http://www.lunduniversity.lu.se/"
	},
	{
		"name": "Evolutionay Biology Center, Uppsala University",
		"location": "Uppsala, Sweden",
		"degree": "PhD, genetics",
		"dates": "1999 - 2004",
		"majors": ["evolutionary genetics", " population genetics in mammals"],
		"url": "http://www.ebc.uu.se/"
	},
	{
		"name": "Biomedical Research School, Lund University",
		"location": "Lund, Sweden",
		"degree": "Scientific research",
		"dates": "1998 - 1999",
		"majors": ["yoghurt fermentation", " water sanitation with microorganisms", " population genetics in lynx"],
		"url": "http://www.lunduniversity.lu.se/"
	},
	{
		"name": "University of Lund",
		"location": "Lund, Sweden",
		"degree": "MSc, molecular biology",
		"dates": "1993 -1998",
		"majors": ["molecular biology"],
		"url": "http://www.lunduniversity.lu.se/"
	},
	{
		"name": "PLNU",
		"location": "Point Loma, San Diego, US",
		"degree": "Freshman",
		"dates": "1992-1993",
		"majors": ["track and field"],
		"url": "http://www.pointloma.edu/"
	}],
	"onlineCourses": [
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"date": 2016,
		"url": "http://www.udacity.com/course/ud804"
	},
	{
		"title": "HTML & CSS",
		"school": "codecadamy",
		"date": 2016,
		"url": "https://www.codecademy.com/learn"
	},
	{
		"title": "JavaScript",
		"school": "codecadamy",
		"date": 2016,
		"url": "https://www.codecademy.com/learn"
	},
	{
		"title": "jQuery",
		"school": "codecadamy",
		"date": 2016,
		"url": "https://www.codecademy.com/learn"
	},
	{
		"title": "Ruby",
		"school": "codecadamy",
		"date": 2016,
		"url": "https://www.codecademy.com/learn"
	},
	{
		"title": "SQL: Analyzing Business Metrics",
		"school": "codecadamy",
		"date": 2016,
		"url": "https://www.codecademy.com/learn"
	}]
};

bio.display = function ()
{
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
	var formattedMyPicture = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedMyPicture);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);
	/* check and adding skills to the resume */
	if (bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function (skill)
		{
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});
	}
	/* add the footer section */
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedLocation);
	$("#footerContacts").append(formattedGithub);
};

bio.display();

/* change the last name to upper case and teh first name to lower case except fist letter! 
function inName()
{
	var name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

make a button to the end of the end of the document that internationalize the name 
$("#main").append(internationalizeButton); */

/* a function to display the work object and all of it's properties */
work.displayWork = function ()
{
	/*  add jobs in work section in resume */
	work.jobs.forEach(function (job)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		formattedEmployer = formattedEmployer.replace("#", job.url);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates + "   " + "Description of work:");
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	});
};

/* calling displaywork */
work.displayWork();

/* making a function to the project ogject by encapsulations to display all of the projects */
projects.display = function ()
{
	/* add projects into the resume */
	for (var project in projects.projects)
	{
		/* check if projects key has own value */
		if (projects.projects.hasOwnProperty(project))
		{
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			var images = projects.projects[project].images;
			for (var image in images)
			{
				if (images.hasOwnProperty(image))
				{
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};

projects.display();

education.display = function ()
{

	for (var school in education.schools)
	{

		if (education.schools.hasOwnProperty(school))
		{
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedName = formattedName.replace("#", education.schools[school].url);
			$(".education-entry:last").append(formattedName);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}
	}

	$(HTMLonlineClasses).insertAfter(".education-entry:last");

	for (var onLineCourse in education.onlineCourses)
	{

		if (education.onlineCourses.hasOwnProperty(onLineCourse))
		{
			$(".onLine").append(HTMLonlineClassesStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onLineCourse].title);
			formattedTitle = formattedTitle.replace("#", education.onlineCourses[onLineCourse].url);
			$(".onLine-entry:last").append(formattedTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onLineCourse].school);
			$(".onLine-entry:last").append(formattedSchool);
			var formattedDatesCourse = HTMLonlineDates.replace("%data%", education.onlineCourses[onLineCourse].date);
			$(".onLine-entry:last").append(formattedDatesCourse);
/*			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onLineCourse].url);
			$(".onLine-entry:last").append(formattedURL); */
		}
	}
};

education.display();

/* adding a map to the resume */
$("#mapDiv").append(googleMap);

/* make the lists user interactive */
$('.ui.accordion').accordion();

/* show the content of work entries */
$("#workExpText").click(function ()
{
	$("div.work-entry").toggle();
});

$("h2").mouseover(function() {
	$(this).toggleClass("activeText");
});

$("h2").mouseleave(function() {
	$(this).toggleClass("activeText");
});

/* show the content of work entries */
$("#projectText").click(function ()
{
	$("div.project-entry").toggle();
});

/* show the content of work entries */
$("#educationtext").click(function ()
{
	$("div.education-entry").toggleClass("activeEntry");
});

/* show the content of onLine entries */
$("#onLine").click(function ()
{
	$("div.onLine-entry").toggle().animate(
	{
		height: 70
	}, 2000);
});

/* show the content of work entries */
$("#mapText").click(function ()
{
	$("#map").toggle();
});

/* makes the images opacity to 1 and change the size */
var angle = 0;
$(".projectImages").mouseover(function ()
{
	$(this).animate(
	{
		opacity: 1,
		height: 300,
	}, 500);
});

$(".projectImages ").mouseleave(function ()
{
	$(this).animate(
	{
		opacity: 0.5,
		height: 170
	}, 500);
});

/* makes the text date-text in work section becomes larger when mouse hover over them */
$(".work-date-text.title").mouseover(function ()
{
	$(this).animate(
	{
		fontSize: 20,
	}, 200);
});

/* makes the text date-text in work section becomes smaller when mouse leave them */
$(".work-date-text.title").mouseleave(function ()
{
	$(this).animate(
	{
		fontSize: 10,
	}, 200);
});

/* the two next code sections makes the text in each education entry becomes larger and smaller and also changes the opacity when mouse hover over them */
$(".education-entry").mouseover(function ()
{
	$(this).animate(
	{
		fontSize: 20,
		opacity: 1
	}, 200);
});

$(".education-entry").mouseleave(function ()
{
	$(this).animate(
	{
		fontSize: 15,
		opacity: 0.5
	}, 200);
});