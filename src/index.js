//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date(); // Can test dates by putting (<2019>, <month>, <day>, <24h>)
const currTime = date.getHours(); // Get time in 24h aka 18 is 18-12=6pm

let greeting; // Declare a variable
const customStyle = {
  color: ""
};

if (currTime < 12) {
  greeting = "Good Morning!";
  customStyle.color = "Red";
} else if (currTime < 18) {
  greeting = "Good Afternoon!";
  customStyle.color = "Green";
} else {
  greeting = "Good Night!";
  customStyle.color = "Blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
