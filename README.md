# To-Do List App Testing

This project focuses on testing a simple To-Do List application using Cypress. The goal is to verify that the application's functionalities work as expected, including adding tasks, marking tasks as completed, and removing tasks.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Features
- Add new tasks to the to-do list.
- Mark tasks as completed.
- Remove tasks from the list.
- Basic validation for empty task input.

## Technologies
- **HTML**: Structure of the application.
- **CSS**: Styling of the application.
- **JavaScript**: Functionality of the application.
- **Cypress**: Testing framework used for writing and running tests.

## Usage
1. Open the application by opening `index.html` in your web browser.
2. Use the input field to add tasks and click the "Add Task" button.
3. Use the checkboxes to mark tasks as completed and the "Remove" button to delete tasks.

## Tests
To run the tests, follow these steps:

1. Open Cypress:
   ```bash
   npx cypress open
2. Select the test file located in cypress/e2e/spec.cy.js to run the tests.