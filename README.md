📌 Playwright Automation Project — LoopQA Evaluation
This project is a complete Playwright automation suite built for the LoopQA technical evaluation.
It demonstrates data‑driven testing, reusable helper functions, dynamic selectors, and clean project structure.

🗂 Project Structure
Code
project-root/
│
├── data/
│   └── tasks.json
│
├── helpers/
│   ├── login.ts
│   └── navigation.ts
│
├── tests/
│   └── tasks.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
tasks.json
Contains all test data.
Each object represents one test case, including:

Column name

Task title

Expected tags

This allows the suite to run multiple tests without duplicating code.

helpers/login.ts
Reusable login function that handles authentication and waits for the post‑login UI to load.

helpers/navigation.ts
Reusable navigation function that selects the correct board (e.g., Web Application).

tests/tasks.spec.ts
Main test file.
It:

Loads the JSON test data

Logs in

Navigates to the correct board

Locates the correct column dynamically

Locates the task inside that column

Validates the expected tags

playwright.config.ts
Defines global settings:

Test directory

Timeout

Base URL

Screenshot/video behavior

Headless mode

This ensures consistent test execution.

🎯 Key Concepts Demonstrated
Data‑Driven Testing
All test cases come from tasks.json, allowing scalable and maintainable test coverage.

Reusable Helpers
Login and navigation logic is abstracted into helper functions to avoid repetition and keep tests clean.

Dynamic Selectors
Selectors use Playwright best practices:

getByRole() for semantic headings

getByText() for tag validation

Scoped locators to ensure accuracy within the correct column

Clean Project Architecture
The suite is organized for readability, maintainability, and real‑world automation workflows.

▶️ Running the Tests
Install dependencies:

Code
npm install
Run all tests:

Code
npx playwright test
Run in headed mode:

Code
npx playwright test --headed
✔️ All Tests Passing
This suite validates all six tasks across all columns:

To Do

In Progress

Review

Done

Each test confirms:

Correct column

Correct task

Correct tags

📬 Notes
This project was built using TypeScript and Playwright, following modern automation best practices.