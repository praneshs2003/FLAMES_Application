# 🔥:FLAMES_Application
This repository contains a fun and interactive FLAMES game, which predicts the relationship compatibility between two names using the traditional FLAMES algorithm. The FLAMES game is often used to determine if two people are Friends, Lovers, have Affection, will Marry, are Enemies, or are Siblings based on their names.

1️⃣: __Features:__  
__Responsive Design:__ The game is designed to be responsive and visually appealing with a gradient background.  
__Interactive Form:__ Users can input their name and their crush's name, and submit the form to get their relationship result.  
__Animated Buttons:__ The submit and clear buttons have hover and active states that enhance the user experience.  
__FLAMES Logic Implementation:__ The core FLAMES algorithm is implemented in JavaScript to calculate the relationship result based on the input names.  
__Countdown Timer:__ A countdown timer displays the remaining time in seconds before the result disappears, adding a fun dynamic to the game.  

2️⃣: __Technologies Used:__     
__HTML:__ For the basic structure of the webpage.    
__CSS:__ For styling the webpage, including the use of linear and radial gradients, and responsive design.  
__JavaScript:__ For the game logic and form handling, including input validation, result calculation, and countdown timer.  

Contains JavaScript functions for handling form submission, clearing inputs, and computing the FLAMES result.  
Implements the FLAMES algorithm.  

3️⃣: __Detailed Code Explanation:__  
🔹 __HTML Structure__  
🔹 __Form:__ The form contains input fields for "Your Name" and "Your Crush's Name", along with submit and clear buttons.  
🔹 __Result Display:__ A span element is used to display the FLAMES result.  

__CSS Styling:__  
🔹 __Body:__ The body has a radial gradient background transitioning from pink to light blue.   
🔹 __Form:__ The form has a linear gradient background transitioning from white to pink, with padding for better alignment.   
🔹__Buttons:__ The submit and clear buttons have shadow effects, rounded corners, and color transitions on hover and active states.   

__JavaScript Functions:__  
🔹 __clearnames(e):__ Clears the input fields when the clear button is clicked.   
🔹 __findResult(boy, girl, count):__ Calculates the FLAMES result based on the names and updates the result display with appropriate background color and text.   
🔹 __flames(e):__ Handles form submission, validates input, calculates the count for the FLAMES game, and calls findResult to display the result.   
