# FLAMES_Application
This repository contains a fun and interactive FLAMES game, which predicts the relationship compatibility between two names using the traditional FLAMES algorithm. The FLAMES game is often used to determine if two people are Friends, Lovers, have Affection, will Marry, are Enemies, or are Siblings based on their names.

__Features__  
__Responsive Design:__ The game is designed to be responsive and visually appealing with a gradient background.  
__Interactive Form:__ Users can input their name and their crush's name, and submit the form to get their relationship result.  
__Animated Buttons:__ The submit and clear buttons have hover and active states that enhance the user experience.  
__FLAMES Logic Implementation:__ The core FLAMES algorithm is implemented in JavaScript to calculate the relationship result based on the input names.  
__Countdown Timer:__ A countdown timer displays the remaining time in seconds before the result disappears, adding a fun dynamic to the game.  

__Technologies Used__    
__HTML:__ For the basic structure of the webpage.  
__CSS:__ For styling the webpage, including the use of linear and radial gradients, and responsive design.  
__JavaScript:__ For the game logic and form handling, including input validation, result calculation, and countdown timer.  
Files  
index.html  

Contains the HTML structure for the FLAMES game.  
Includes form inputs for user names and a result display area.  
style.css  

Provides the CSS styling for the webpage.  
Utilizes linear and radial gradients for background styling.
Styles the form, buttons, and result display.  
script.js  

Contains JavaScript functions for handling form submission, clearing inputs, and computing the FLAMES result.  
Implements the FLAMES algorithm.
Adds functionality for a countdown timer to show the remaining time for the result display.
Usage
Clone the repository to your local machine.
Open index.html in your web browser.
Enter your name and your crush's name in the input fields.
Click the "Submit" button to see the relationship result.
Click the "Clear" button to reset the form.
Detailed Code Explanation
HTML Structure
Form: The form contains input fields for "Your Name" and "Your Crush's Name", along with submit and clear buttons.
Result Display: A span element is used to display the FLAMES result.
CSS Styling
Body: The body has a radial gradient background transitioning from pink to light blue.
Form: The form has a linear gradient background transitioning from white to pink, with padding for better alignment.
Buttons: The submit and clear buttons have shadow effects, rounded corners, and color transitions on hover and active states.
JavaScript Functions
clearnames(e): Clears the input fields when the clear button is clicked.
findResult(boy, girl, count): Calculates the FLAMES result based on the names and updates the result display with appropriate background color and text.
flames(e): Handles form submission, validates input, calculates the count for the FLAMES game, and calls findResult to display the result.
