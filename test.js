//var testy = "absd";
//document.write(testy);

//document.getElementById("external").innerHTML = "test";
	
const fs = require('fs');
const { connect } = require('http2');
const readline = require("readline");
var currentUserID = ""

// Need to make display a function-------------------------------------
// Need to check if current user in json a function-------------------------------------
// Need to make update json a function a function-------------------------------------
const prompt = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
  });

prompt.question("What is your name? \n", name => {
	console.log(`Oh, so your name is ${name}`);
	currentUserID = name;
	console.log("Closing the console");
	//process.exit();
	prompt.close();
});

//const currentUserID = prompt("Current user ID(zI4YDfQ5FXfVk48dEqqlr4CQiTw2): ");
//const currentUserID = "zI4YDfQ5FXfVk48dEqqlr4CQiTw2";
//const currentUserID = "zDHhDho9h5fTDntQhyEg66RMvqK2";

const usersData = JSON.parse(fs.readFileSync('leaderboard.json'));


var usersDataArray = [];


usersDataArray = Object.entries(usersData).map(function(entry){
	key = entry[0];
	value = entry[1];

	nested_object = value;
	//nested_object.key = key;

	return nested_object;
});







usersDataArray = usersDataArray.sort(function(a, b) {
	return b.bananas - a.bananas
});

usersDataArray.forEach((user,index) => {
	user.rank = index +1;
	///console.log(user);
});

var currentUser = {};
//var inTop10 = false;

for (i in usersDataArray){
	if (usersDataArray[i].uid == currentUserID){
		currentUser = usersDataArray[i];
		break;
	}
}



//console.log(currentUser);
//console.log(inTop10);
//console.log(usersDataArray)

var usersDataArray10 = usersDataArray.slice(0, 10);
if (currentUser.rank>10){usersDataArray10[9] = currentUser};


console.log("Name\tRank\tNumber of Bananas\tisCurrentUser");
for (i in usersDataArray10){
	var isCurrentuser = "no";
	if (usersDataArray10[i].uid == currentUserID){isCurrentuser = "yes";}
	console.log(usersDataArray10[i].name + "\t", usersDataArray10[i].rank,usersDataArray10[i].bananas, isCurrentuser);
}


for (i in usersDataArray10){
	delete usersDataArray10[i].lastDayPlayed;
	delete usersDataArray10[i].longestStreak;
	delete usersDataArray10[i].stars;
	delete usersDataArray10[i].subscribed;
	delete usersDataArray10[i].regex;
	
}


console.table(usersDataArray10)
//console.log(currentUser);
//var inTop10 = false;
//for (i in usersDataArray10){
//	if (usersDataArray10[i].uid == currentUserID){
//		inTop10 = true; 
//		break;
//	}
//}


/*
var a = usersDataArray10.forEach((user,index) => {
	//return [user.name, index+1, user.bananas];
	console.log(user.name+"\t",user.rank, user.bananas);
	data = user.bananas;
	return data
});

console.log(usersDataArray10)
*/


//Extra stuff
function initiate(){
	
	const object = { a: 1, b: 2, c: 3 };

	for (const property in object) {
	}
	return [1,2,3,4];
}




function getInfoFromArray(){
	var omg = initiate();
	
	document.getElementById("external").innerHTML = omg;
}

//initiate();





function externalFunction() {
	
	var words = "Hi words"
	document.getElementById("external").innerHTML = words;
	
	
  }

  