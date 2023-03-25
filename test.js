const fs = require('fs');

const usersData = JSON.parse(fs.readFileSync('leaderboard.json'))
var sortedUsers = usersData.sort((a, b)=>{
	return a.bananas - b.bananas;
});


const currentUser = sortedUsers[9]
sortedUsers.slice(0, 10).forEach((user, index) => {
	console.log(`${user.name}\t${index + 1}\t${user.bananas}\t${user.id === currentUserId}`);
});