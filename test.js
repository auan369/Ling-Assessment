//Libaries for initalization	
const fs = require('fs');
const { connect } = require('http2');
const readline = require("readline");
var currentUserID = ""


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

	return nested_object;
});






//sorting array of user data
usersDataArray = usersDataArray.sort(function(a, b) {
	return b.bananas - a.bananas
});


//adding rank
usersDataArray.forEach((user,index) => {
	user.rank = index +1;

});



//initializing variables to store current user data and sliced arrays with top 10 users
var currentUser = {};
var inDataBase = false;
var usersDataArray10 = usersDataArray.slice(0, 10);
var usersDataArray10wCurrent;



function checkUID(){
	
	
	inDataBase = false;
	for (i in usersDataArray){
		if (usersDataArray[i].uid == currentUserID){
			currentUser = usersDataArray[i];
			
			inDataBase = true;
			usersDataArray10wCurrent = usersDataArray10.slice();  //new instance of userDataArray10Current; i.e. changes don't affect userDataArray10
			if (currentUser.rank>10){
				usersDataArray10wCurrent[9] = currentUser;
				
			}

			usersDataArray10wCurrent.forEach((user,index) => {
				if (user.uid == currentUserID) {user["isCurrentUser?"] = "yes";}
				else {user["isCurrentUser?"] = "no";}

			});
			break;
		}
	}	


}



//---------------------------------Start of display using nomral Console Table---------------------------------------------------
/*
function printTableData(){
	console.table(usersDataArray10wCurrent,["name", "rank", "bananas", "bananas", "isCurrentUser?"]);
};
*/
//---------------------------------End of display using nomral Console Table-----------------------------------------------------



//---------------------------------Start of display using Console Table Printer Library-------------------------------------------
//Documentation for Console Table Prnter Library: https://console-table.netlify.app/docs/
const { Table } = require('console-table-printer');
function printTableData(){
	const p = new Table({
		enabledColumns: ["name", "rank", "bananas", "isCurrentUser?"],
		columns: [
			{ name: "name", alignment: "left", title: "Name",},
			{ name: "rank", alignment: "center", title: "Rank",},
			{ name: "bananas", alignment: "center", title: "Number of bananas",},
			{ name: "isCurrentUser?", alignment: "center", title: "isCurrentUser?",},
		  ],
	});
	for (i in usersDataArray10wCurrent){
		if (usersDataArray10wCurrent[i]["isCurrentUser?"] == "yes"){
			p.addRow(usersDataArray10wCurrent[i],{ color: "red" });
		}
		else{p.addRow(usersDataArray10wCurrent[i]);}
		
	};
	p.printTable();
}

//---------------------------------End of display using Console Table Printer Library---------------------------------------------





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
			printTableData();
			console.log("\n");
		}
		else{console.log("Current user id does not exist! Please specify an existing user id!\n");}

		recursiveAsyncReadLine();
	});

};


//Calling the main function
recursiveAsyncReadLine();

