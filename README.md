# Rock Paper Scissors (Console Edition) 🪨📄✂️

A classic implementation of the Rock, Paper, Scissors game played entirely in the browser console. This project demonstrates fundamental JavaScript concepts including functions, loops, control flow, and scope management.

## 📖 Description

This program runs a 5-round game against the computer. It accepts user input via prompt windows, compares it against a randomly generated computer choice, and tracks the score to declare a final winner at the end.

## ⚙️ How It Works

- The game is played over **5 rounds**.
- In each round:
  - The human player enters a choice using a prompt (`rock`, `paper`, or `scissors`).
  - The computer randomly selects a choice.
  - The script compares the two choices to determine a winner, a loser, or a tie.
- **Refined Logic:** The game intelligently handles tie rounds immediately and groups all "losing" conditions together for cleaner logic.
- After 5 rounds, a **Final Score** summary is displayed, followed by the overall winner.

## 🚀 How to Play

Since this game runs in the console, you won't see it on the web page itself. Follow these steps:

1.  **Open the logic:** Open the `index.html` file (or wherever your script is linked) in your browser.
2.  **Open Developer Tools:**
    - **Windows/Linux:** Press `F12` or `Ctrl` + `Shift` + `J`.
    - **Mac:** Press `Cmd` + `Option` + `J`.
3.  **Play:**
    - A prompt will appear asking for your choice.
    - Type your choice (case-insensitive) and hit Enter.
    - Check the **Console** tab to see the round results and the final score!

## 🛠️ Features

- **Randomized Computer Logic:** The computer selects a move using `Math.random()`.
- **Case-Insensitive Input:** You can type "rock", "Rock", or "ROCK" and the game will understand.
- **Smart Round Feedback:** Tells you exactly what beat what (e.g., "You lose! Rock beats Scissors").
- **Detailed Final Score:** Displays a clean summary (e.g., `Human: 3, Computer: 2`) before announcing the final result.

## 💻 Technologies Used

- **JavaScript (ES6)**
- **Browser Console** for input/output

## 🧠 Lessons Learned

This project was built to practice:

- **The DRY Principle:** Refactoring `if/else` statements to avoid repetitive code.
- **Lexical Scope:** Managing variables (`humanScore`, `computerScore`) inside nested functions.
- **Git Conventions:** Writing clear commit messages for features, fixes, and refactors.
- Writing helper functions (`getComputerChoice`, `getHumanChoice`).
- Understanding **Lexical Scope** (nesting variables inside functions).
- Using `switch` statements and `if/else` logic.
- Debugging using `console.log`.

## 🔮 Future Improvements

- Create a Graphical User Interface (GUI) with buttons instead of using `prompt()`.
- Add a "Play Again" button after the game finishes.
- Validate user input to handle typos (e.g., if the user types "Gun").

---

_*Created by Dede as part of [The Odin Project](https://www.theodinproject.com/) curriculum.*_
