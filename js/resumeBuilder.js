
var formattedName = "Linda Hellborg";
var formattedRole = "Web Deveolper";

var name = HTMLheaderName.replace("%data%", formattedName);
var role = HTMLheaderRole.replace("%data%", formattedRole);

$("#header").prepend(role);
$("#header").prepend(name);



$("#main").append("Linda");

var awesomeThoughts = "I am Linda and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

$("#main").append(funThoughts);