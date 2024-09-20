# To-Do List Website Testing with Cypress

## Project Overview
This project involves testing a self-made to-do list website using Cypress. Automated test cases are created to verify that all core functionalities such as adding, editing, deleting, and completing tasks work as expected. for self learning 😊😊😊🥰

## Features Tested
- **Adding Tasks**: Verify that users can add new tasks to the list.
- **Completing Tasks**: Ensure users can mark tasks as complete or incomplete.
- **Deleting Tasks**: Test the functionality of removing tasks from the list.
- **Input Validation**: Check that alerts are shown when attempting to add an empty task.

## Testing Steps

### 1. Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

### 2. Clone the Repository
Clone the repository to your local machine using:
```bash
git clone https://github.com/K2anC2ai/Cypress_Testing_withMyOwn_TodoList.git
cd to-do-list-testing
```
### 3. Install Dependencies
Navigate to the project directory and install the required dependencies:
```bash
npm install
```
### 4. Run the Application
Open index.html in your preferred web browser to view the To-Do List application.

### 5. Running Cypress Tests
To run the tests using Cypress:

1. Open Cypress:
```bash
npx cypress open
```
2. The Cypress Test Runner will open. Click on todo.spec.js in the integration folder to run the tests.

### 6. Viewing Test Results
Cypress will execute the tests, and you will see the results in real-time in the Test Runner. You can also view detailed reports on the outcomes of each test case.
(i use mochawesome and cypress-mochawesome-reporter to report result)

![testresultToDoLIST](https://github.com/user-attachments/assets/6021f798-4495-4e3b-b953-f09fbb5a65c9)
[cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)
