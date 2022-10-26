
const prompt=require("prompt-sync")({sigint:true}); 
var month = prompt("Enter the month");
var Day = prompt("Enter the day");

if (month <= 6 & Day <= 20){
    console.log("true");
}
else if  (month>=3 & month < 6 & Day < 31){
    console.log("true");
}
else {
    console.log("false");
}
