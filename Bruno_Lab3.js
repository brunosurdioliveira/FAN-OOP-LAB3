// Grab the output space
var outputDiv = document.getElementById("outDiv");
// Assign the text to a variable
var messageToPrint = "The nefarious thing about performance bugs is that the user may never know they are there - the program appears to work correctly, carrying out the correct operations, showing the right thing on the screen or printing the right text. It just does it a bit more slowly than it should have. It takes an experienced programmer, with a reasonably accurate mental model of the problem and the correct solution, to know how fast the operation should have been performed, and hence if the program is running slower than it should be";

// Function of the event handler
function printString() {
    // Clean the output
    outputDiv.innerHTML = "";
    // Count is used to control the loop
    var count = 0;
    var isDone = false;

    // The innerLoop is used to simulate the loop
    function innerLoop() {
        // in order to display 100 characters on a line and then start a new line
        if (count % 100 === 0 && count !== 0) {
            // output the character with a break line first
            outputDiv.innerHTML += "<br>" + messageToPrint.charAt(count);
        }
        else {
            // output the character without a break line
            outputDiv.innerHTML += messageToPrint.charAt(count);
        }

        // increment the count
        count++;

        if (!isDone) {
            // SetTimeout to call Innerloop every 10 miliseconds 
            // While JS system is waiting the 10ms, it will process all UI events
            setTimeout(innerLoop, 10);
        }
    }

    // This starts the loop calling innerloop for the first time
    innerLoop();
}