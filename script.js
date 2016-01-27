var blockwords = [
// A ------------------ A
	"Adele",
	"Alexis Arquette",
	"Ambrosio",
	"Amy Schumer",
	"Andy Warhol",
// B ------------------ B
	"Baez",
	"Bieber",
	"Blake Griffin",
	"Blue Ivy",
	"Bowie",
	"Brad Pitt",
	"Britney Spears",
	" Broncos",
// C ------------------ C
	"Carmelo Anthony",
	"cavallari",
	"celeb ",
	"celebri",
	"celebs",
	"celine",
	"Chris Brown",
	"Chris_Brown",
	"Chris Pine",
	"Chris_Pine",
	"Chyna",
	"Clippers",
	"Clooney",
	"Cosby",
	"Cuoco",
	"Couric",
// D ------------------ D
	"Dempsey",
	"DeGeneres",
	"Devito",
	"Disick",
	"Drake",
	"Drew Barrymore",
// E ------------------ E
	"EJ Johnson",
	"Eminem",
// F ------------------ F
	"football",
	"Foxx",
// G ------------------ G
	"Geena",
	"Giants",
	"Gomez",
	"Gordon-Levitt",
	"Grace Coddington",
	"Grace Moretz",
// H ------------------ H
	"Handler",
	"Hemsworth",
	"Hadid",
// I ------------------ I
// J ------------------ J
	"Jay Z",
	"Jessica Alba",
	"Jessica Simpson",
	"Jillian Michaels",
	"Jillian_Michaels",
	"J.Lo",
	"jlo",
	"John Krasinski",
	"Jon Hamm",
	"jolie",
	"jwow",
// K ------------------ K
	"Kardashian",
	"Katy Perry",
	"katy_perry",
	"Kendall Jenner",
	"Knicks",
	"Kobe Bryant",
	"Kourtney",
	"Kylie Jenner",
// L ------------------ L
	"Lopez",
// M ------------------ M
	"Magic Johnson",
	"Madonna",
	"Malone",
	"Manning",
	"Manziel",
	"mariah",
	"Martha Stewart",
	"Mets",
	"Michael Jackson",
	"Michelle Obama",
	"Munn",
// N ------------------ N
	" Nets ",
	" NBA ",
	" NFL",
	" NHL ",
	"Nick Carter",
// O ------------------ O
	"One Direction",
	"Oprah",
	"Oscar",
// P ------------------ P
	"Pamela Anderson",
	"platten",
// Q ------------------ Q
	" QB ",
	"Tarantino",
// R ------------------ R
	"Rangers",
	"Robin Williams",
	"Rihanna",
	"Rinna",
// S ------------------ S
	"Sean Penn",
	"Sheen",
	"Shields",
	"Snookie",
	"Strahan",
	"Spike Lee",
	"Sports",
	"Stars",
	"Suge Knight",
	"sweetin",
	"Sylvester Stallone",
// T ------------------ T
	"Terry Richardson",
	"Tom Cruise",
	"Tom_Cruise",
	"Tyga",
// U ------------------ U
// V ------------------ V
	"Vigoda",
// W ------------------ W
	"Will Smith",
	"will-smith",
	"Woody",
// X ------------------ X
// Y ------------------ Y
// Z ------------------ Z
];

var count = 0;
console.log("Custom Filter is checking for blocked words:");
var scanText = document.documentElement.innerHTML.toLowerCase();
for(var i=0; i<blockwords.length; i++) {
	var all = document.querySelectorAll("div,a,p,img,span,h4,h3,h2,h1,li,iframe,label,caption,td,th");
	var max = all.length;
	var offence = blockwords[i].toLowerCase();
	if (scanText.search(blockwords[i].toLowerCase()) != -1) {
		var subCount = 0;
		// var placeholder = document.createElement("div");
		// var placeTxt = document.createTextNode("Removed by Custom Filter");
		// 	placeholder.appendChild(placeTxt);
		// 	placeholder.style.color = "red";
		for(var j=max-1; j>-1; j--) {
			if(all[j]){
				if(all[j].innerText) {
					var lowerText = all[j].innerText.toLowerCase();
					if(lowerText.indexOf(offence) != -1) {
						subCount++;
						//all[j].parentNode.appendChild(placeholder);
						all[j].parentNode.removeChild(all[j]);
						delete all[j];
						continue;
					}
				}
				if(all[j].getAttribute("href")) {
					var href = all[j].getAttribute("href").toLowerCase();
					if(href.indexOf(offence) != -1) {
						subCount++;
						//all[j].parentNode.appendChild(placeholder);
						all[j].parentNode.removeChild(all[j]);
						delete all[j];
						continue;
					}
				}
				if(all[j].getAttribute("alt")) {
					var alt = all[j].getAttribute("alt").toLowerCase();
					if(alt.indexOf(offence) != -1) {
						subCount++;
						//all[j].parentNode.appendChild(placeholder);
						all[j].parentNode.removeChild(all[j]);
						delete all[j];
						continue;
					}
				}
				if(all[j].src) {
					var src = all[j].getAttribute("src").toLowerCase();
					if(src.indexOf(offence) != -1) {
						subCount++;
						//all[j].parentNode.appendChild(placeholder);
						all[j].parentNode.removeChild(all[j]);
						delete all[j];
						continue;
					}
				}
				if(all[j].getAttribute("title")) {
					var src = all[j].getAttribute("title").toLowerCase();
					if(src.indexOf(offence) != -1) {
						subCount++;
						//all[j].parentNode.appendChild(placeholder);
						all[j].parentNode.removeChild(all[j]);
						delete all[j];
						continue;
					}
				}
			}
		}
		count++;
		console.log("Blocked word found: " + blockwords[i] + " (" + subCount + "x)");
	}
}

if(count == 0) {
	console.log("No blocked words found");
}
