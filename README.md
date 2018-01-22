# HwTest

## Local Setup
1. Ensure that you have the following installed locally:
    * [Node](https://nodejs.org/en/download/). This project was developed using the latest stable release of node.
    * [NPM](https://docs.npmjs.com/getting-started/what-is-npm), [preferably with a version manager like nvm](https://docs.npmjs.com/getting-started/installing-node#installing-npm-from-a-version-manager). This project was developed using the latest stable release of npm.
2. Once you have a version manager, ensure that you're running the latest stable version of both Node and NPM. For example, with NVM, you would run `nvm install stable` then `nvm use stable`.
3. Clone this project locally by running either `git clone git@github.com:sardell/hw-test.git` (if using SSH) or `git clone https://github.com/sardell/hw-test.git` (if using HTTPS) in the directory you want the project in.
4. Navigate into the root of the directory and run `npm install`. This will install all the necessary local dependencies for the project.
5. Run `npm start` and navigate to `http://localhost:4200/`.
6. Enjoy!

If you don't feel like setting up the project locally, the latest is currently running at [https://sardell.github.io/hw-test/](https://sardell.github.io/hw-test/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Build and Deploy
In order to build this project for deployment, run `ng build --prod --base-href="https://sardell.github.io/hw-test/"`. It is deployed utilizing [angular-schule/angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages).