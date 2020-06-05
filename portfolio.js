
//the first addEvent changes the words of the div when you mouseover. The second changes it back at mouseout

addEvent("weather", "mouseover", function(e){changeWords("weather", "HTML, CSS, Javascript, RESTful API, JSON")})
addEvent("weather", "mouseout", function(e){changeWords("weather", "Weather Website for Kids")})

addEvent("tag", "mouseover", function(e){changeWords("tag", "HTML, CSS, Javascript, Usage of JS Intervals")})
addEvent("tag", "mouseout", function(e){changeWords("tag", "Super Mario Tag Game")})

addEvent("memory", "mouseover", function(e){changeWords("memory", "HTML, CSS, Javascript, First Project")})
addEvent("memory", "mouseout", function(e){changeWords("memory", "Animal Crossing Memory")})

addEvent("iep", "mouseover", function(e){changeWords("iep", "HTML, CSS, Javascript, Usage of form data")})
addEvent("iep", "mouseout", function(e){changeWords("iep", "Impact Statement Generator for IEPs")})

addEvent("hair", "mouseover", function(e){changeWords("hair", "HTML, Bootstrap, Font Awesome, Custom CSS")});
addEvent("hair", "mouseout", function(e){changeWords("hair", "Elxier Hair Studio Website")});

addEvent("portfolio", "mouseover", function(e){changeWords("portfolio", "JQuery, API, JSON, HTML, CSS, Javascript, Bootstrap")});
addEvent("portfolio", "mouseout", function(e){changeWords("portfolio", "Pokemon Go Shiny Finder")});

function changeWords(elementId, message){
	document.getElementById(elementId).innerHTML = message
}

function addEvent(elementId, event, action){
	document.getElementById(elementId).addEventListener(event, action);
}

