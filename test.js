//var testy = "absd";
//document.write(testy);

document.getElementById("external").innerHTML = "test";
	
const fs = require('fs');


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

usersDataArray10 = usersDataArray.slice(0, 10);



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

/*
var a = usersDataArray10.forEach((user,index) => {
	//return [user.name, index+1, user.bananas];
	console.log(user.bananas);
	data = user.bananas;
	return data
});
*/



function externalFunction() {
	
	var words = "Hi words"
	document.getElementById("external").innerHTML = words;
	
	
  }

  