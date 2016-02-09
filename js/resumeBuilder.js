
var work = {
	"jobs": [
		{
		"title": "scientific project lead",
		"employer": "Syngenta",
		"location": "Landskrona",
		"dates": "2013 -",
		"description": "problemsolving, analysing results scientifically in R (statistic programming)"
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
		},
	]
}



var bio = {
	"name": "Linda Hellborg",
	"role": "Web Deveolper",
	"contactInfo": {
		"mobile": " +46 73494092",
		"email": "linda.hellborg@gmail.com",
		"location": " Landskrona, Sweden",
		"github": "https://github.com/lhellborg"
		},
	"pictureURL": "images/LindaHead.jpg",
	"welcomeMessage": "Welcome to my page, I am so glad YOU are here!",
	"skills": ["bioinformatics", "breeding", "genetics", "molecular biology"]
};






var education = {
	"schools": [
		{
		"name": "Evolutionay Biology Center, Uppsala University",
		"location": "Uppsala, Sweden",
		"degree": "PhD in genetics",
		"dates": "1999 - 2004",
		"major": ["evolutionary genetics" , "population genetics in mammals"]
		"url": "www.ebc.uu.se/"
		},
		{
		"name": "University of Lund/Uppsala",
		"location": "Lund and Uppsala, Sweden",
		"degree": "introduction to scientific research",
		"dates": "1998 - 1999",
		"major": ["yoghurt fermentation", "water sanitation with microorganisms", "population genetics in lynx"]
		"url": "www.lunduniversity.lu.se/"
		},
		{
		"name": "University of Lund",
		"location": "Lund, Sweden",
		"degree": "Master",
		"dates": "1993 -1998",
		"major": ["molecular biology"]
		"url": "www.lunduniversity.lu.se/"
		},
		{
		"name": "PLNU",
		"location": "Point Loma, San Diego, US",
		"degree": "Freshman",
		"dates": "1992-1993",
		"major": ["track and field", "speech", "history of music", "psycology"]
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
		},
	]
}


$("#header").append(work["position"]);
$("#header").append(education.name)


var awesomeThoughts = "I am Linda and I am AWESOME!";
console.log(awesomeThoughts);

