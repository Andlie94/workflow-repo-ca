# Workflow repo for the CA
## Description
In this task, we have installed and configured ESLint and Prettier for code quality and formatting. Additionally, we’ve set up hooks to automate these processes.

We’ve also installed Vitest for unit testing and Playwright for end-to-end testing, running two tests with Vitest and two with Playwright to ensure functionality.
## Installation 
1. Clone the repository:
```bash
git clone <https://github.com/Andlie94/workflow-repo-ca.git>
cd <workflow-repo-ca>
```
2. Install dependencies:
Make sure you have Node.js and npm installed
```bash
npm install
```
## Environment Variables
- BASE_URL: `(http://127.0.0.1:8080)`
- PASSWORD: `your_password_here`
- USERNAME: `your_username_here`

The project requires the following environment variables to run correctly. Create a .env file in the root directory and add these variables.
You can make your own user on the registration page in the app if you dont have a user.

## Running test. 

Vitest
to run the vitest
```bash
npm run test:vitest
```
e2etest
to run the e2e test
```bash
npm run test:e2e
```

## Scripts
tailwind
Starts the Tailwind CSS watcher for live updates
```bash
npm run dev
```
Run the app
Starts the live servers
```bash
npm run start
```
## Contributing
If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. 
Make sure to run tests and ensure everything is working before submitting.





