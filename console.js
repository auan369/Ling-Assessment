const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.question("input here:\n", function (string) {
    input = string;
    console.log("input that was entered: " + input);
rl.close();
});