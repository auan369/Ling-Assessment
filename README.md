# Ling-Assessment
This soluion is completed with Node.js.

## Dependencies 
Please note that this program utilises the Console Table Printer Library in order to better display the solution.
In order to install this dependency, please run the following command in your command line:
```
npm install console-table-printer --save
```
### Running the Code Without Console Table Printer
In case installation of the Console Table Printer Library is not possible, please make the following changes to the code.
Remove the comment markers(/* and */) for the section marked as "Start/End of display using normal Console"
such that it resembles this:
```
//---------------------------------Start of display using normal Console Table---------------------------------------------------

function printTableData(){
	console.table(usersDataArray10wCurrent,["name", "rank", "bananas", "bananas", "isCurrentUser?"]);
};

//---------------------------------End of display using normal Console Table-----------------------------------------------------

```

Insert the comment markers(/* and */) for the section marked as "Start/End of display using Console Table Printer Library"
such that it resembles this:
```
//---------------------------------Start of display using Console Table Printer Library-------------------------------------------
//Documentation for Console Table Prnter Library: https://console-table.netlify.app/docs/
/*
const { Table } = require('console-table-printer');
function printTableData(){
.
.
.
};
	p.printTable();
}
*/
//---------------------------------End of display using Console Table Printer Library---------------------------------------------
```

## Running the Code
In order to run the program, please make a local copy of this directory.