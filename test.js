//Libaries for initalization	
const fs = require('fs');
const { connect } = require('http2');
const readline = require("readline");
var currentUserID = ""




//const currentUserID = prompt("Current user ID(zI4YDfQ5FXfVk48dEqqlr4CQiTw2): ");
//const currentUserID = "zI4YDfQ5FXfVk48dEqqlr4CQiTw2";
//const currentUserID = "zDHhDho9h5fTDntQhyEg66RMvqK2";


//Reading the json file
const usersData = JSON.parse(fs.readFileSync('leaderboard.json'));




//convering json file into an array to be sorted
var usersDataArray = [];
usersDataArray = Object.entries(usersData).map(function(entry){
	key = entry[0];
	value = entry[1];

	nested_object = value;
	//nested_object.key = key;

	return nested_object;
});






//sorting array of user data
usersDataArray = usersDataArray.sort(function(a, b) {
	return b.bananas - a.bananas
});


//adding rank
usersDataArray.forEach((user,index) => {
	user.rank = index +1;
	///console.log(user);
});



//initializing variables to store current user data and sliced arrays with top 10 users
var currentUser = {};
var inDataBase = false;
var usersDataArray10 = usersDataArray.slice(0, 10);
var usersDataArray10wCurrent;



function checkUID(){
	//usersDataArray10 = usersDataArray.slice(0, 10);
	
	inDataBase = false;
	for (i in usersDataArray){
		if (usersDataArray[i].uid == currentUserID){
			currentUser = usersDataArray[i];
			//console.log("Nice");
			inDataBase = true;
			usersDataArray10wCurrent = usersDataArray10.slice();  //new instance of userDataArray10Current; i.e. changes don't affect userDataArray10
			if (currentUser.rank>10){
				usersDataArray10wCurrent[9] = currentUser;
				//console.log("New boi");
			}

			usersDataArray10wCurrent.forEach((user,index) => {
				if (user.uid == currentUserID) {user["isCurrentUser?"] = "yes";}
				else {user["isCurrentUser?"] = "no";}
				///console.log(user);
			});
			break;
		}
	}	
	//console.log("Naur");

}



//console.log(currentUser);
//console.log(inTop10);
//console.log(usersDataArray)





const prompt = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
  });




var recursiveAsyncReadLine = function () {
	prompt.question("What is your user ID? \n", uidInput => {
		console.log("Checking for uid: " + uidInput);
		currentUserID = uidInput;	
		checkUID();
		if (inDataBase){
			console.table(usersDataArray10wCurrent,["name", "rank", "bananas", "bananas", "isCurrentUser?"]);
			console.log("\n");
		}
		else{console.log("Current user id does not exist! Please specify an existing user id!\n");}
		//console.log("Closing the console");
		//process.exit();
		//prompt.close();
		recursiveAsyncReadLine();
	});

};

recursiveAsyncReadLine();
//}

/*
console.log("Name\tRank\tNumber of Bananas\tisCurrentUser");
for (i in usersDataArray10){
	var isCurrentuser = "no";
	if (usersDataArray10[i].uid == currentUserID){isCurrentuser = "yes";}
	console.log(usersDataArray10[i].name + "\t", usersDataArray10[i].rank,usersDataArray10[i].bananas, isCurrentuser);
}
*/




//console.table(usersDataArray10)


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

  