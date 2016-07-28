//This is the JS for running log
confirm("Would you like to log running data?");
var runner = prompt("Have you ran today?");
if(runner === "yes") {
    console.log("Store data into runner's log.");
}
else {
    console.log("There is no data to be stored.");
}
console.log("This log will store running data");

var miles = prompt("How many miles have you ran?");
if (miles >= 1) {
    console.log("Usable data to be stored in log.");
}
else {
    console.log("No usable data");
}




// exercises with functions
var averageMiles= function(total) {
    var val = total / 7;
    console.log(val);
};
averageMiles(miles);

var runnerName = prompt("What is your name?");
var askingName = function(name) {
    console.log("You can log your running data into this log," + " " + name);
};
askingName(runnerName);