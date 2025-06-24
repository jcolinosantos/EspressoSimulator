# My Espresso Simulator
## Description

My Espresso Simulator is an interactive tool that simulates the espresso shot time based on three key parameters: dose, yield, and grind size. Using a simplified resistance-based model, the app allows users to experiment with different configurations to understand how each parameter affects the total extraction time.

This project is primarily designed as an educational tool for beginner baristas who want to learn the fundamental concepts behind espresso brewing without needing to perform extensive hands-on testing. The tool helps adjust variables to achieve an ideal extraction time, typically between 25 and 32 seconds.

## Why This Project?

Interactive learning: The tool encourages practical exploration, allowing users to experiment with parameters to find the ideal combination.

Simplified model: While it doesn’t replace hands-on experience, the resistance-based model clearly illustrates how different factors affect extraction.

User-friendly: The controls are intuitive, offering a seamless experience for beginners.

## Features

Simple and modern interface: The app uses HTML and CSS to provide a user-friendly and visually appealing experience.

Dynamic input of parameters: Adjust the dose (12-25g), yield, and grind size interactively.

Fixed ratio control: Set a fixed dose-to-yield ratio for easier experimentation.

Automatic calculations: Press the "Let's Espresso!" button to calculate the estimated extraction time in seconds, taking into account grind resistance and dose.

Grind size simulation: The system adjusts the flow rate based on the grind size selected, simulating how finer or coarser grinds impact extraction.

## Usage

Grind Size: Choose a value between 1 (finest) and 5 (coarse) representing the grind fineness.

Dose: Enter the amount of coffee in grams (between 12 and 25g).

Yield: Adjust the espresso yield (in grams).

Fix Ratio: Enable "Fix Ratio" to maintain a fixed ratio between dose and yield.

Calculate Time: Click the "Let's Espresso!" button to calculate the estimated extraction time based on the provided parameters.

## Results

Dose:Yield Ratio: The dose-to-yield ratio is automatically calculated.

Time (Seconds): The estimated extraction time is calculated based on the selected parameters.

## Technologies Used

HTML5 for the structure of the web page.

CSS3 for design and responsive layout.

JavaScript for the logic and interactive behavior of the app.

## Contribution

Feel free to fork the repository, make changes, and submit a pull request with your improvements. Please ensure your code follows best practices, and include a clear description of the changes you made.
