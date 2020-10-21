var database = [
	{
		username: "yossi",
		password: "supersecret"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "England",
		password: "777"
	}	
];

var newsFeed = [
	{
		username: "bobby",
		timeline: "so tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooo coool!"
	},
	{
		username: "Lala",
		timeline: "It's indeed a great day!"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;	
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password");

signIn(userNamePrompt, passwordPrompt);