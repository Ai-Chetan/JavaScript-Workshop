[← README File](README.md)

# Project Ideas

## 1) Typing Accuracy Game
Problem statement: Build a typing game where the user enters their name, types a target paragraph, and gets a score report with accuracy and speed.

Requirements:
- Take name with a form and show a personalized welcome.
- Use event listeners to compare input text with target text in real time.
- Compute accuracy and speed (characters per minute or words per minute).
- Store each attempt as JSON in an array and show a history list.
- Use Chart.js to visualize accuracy vs. attempt number.

## 2) Focus Timer Analytics
Problem statement: Create a focus timer that tracks work sessions and breaks, then visualizes productivity.

Requirements:
- Start, pause, and reset buttons using events.
- Form input for session length and break length.
- Log each session as JSON with duration and status (completed or interrupted).
- Show total focus time, average session length, and completion rate.
- Chart.js bar chart of focus time by session number.

## 3) Movie Rating Analyzer
Problem statement: Build a mini app that lets users rate movies and see analytics on ratings.

Requirements:
- Form to add movie title and rating (1 to 5).
- Validate inputs and show friendly error messages.
- Store entries in a JSON array and render a table or cards in the DOM.
- Calculate average rating, highest rated, and rating distribution.
- Chart.js doughnut chart for rating distribution.

## 4) Expense Splitter Dashboard
Problem statement: Build an expense splitter where a group adds expenses and sees who owes what.

Requirements:
- Form to add payer name, amount, and category.
- Show a running list of expenses with totals per person.
- Compute who owes money based on equal split.
- Store expenses as JSON and allow deleting an entry.
- Chart.js pie chart by category.

## 5) Habit Tracker Heatmap
Problem statement: Create a habit tracker for 7 or 14 days and display consistency visually.

Requirements:
- Form to add habit name and daily status (done or not done).
- Use buttons or checkboxes with event listeners to toggle status.
- Store the habit data as JSON and render a grid in the DOM.
- Calculate streaks and completion percentage.
- Chart.js line chart for completion over time.

## 6) Quiz Performance Studio
Problem statement: Build a quiz app that shows a performance report after each attempt.

Requirements:
- Multiple-choice questions stored as JSON.
- Track correct and incorrect answers with events.
- Show final score, accuracy, and time spent.
- Store attempt history in JSON and list attempts.
- Chart.js bar chart of score per attempt.