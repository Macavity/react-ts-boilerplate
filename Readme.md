[![build status](https://travis-ci.org/Macavity/react-ts-boilerplate.svg)](https://travis-ci.org/Macavity/react-ts-boilerplate) [![bitHound Overall Score](https://www.bithound.io/github/Macavity/react-ts-boilerplate/badges/score.svg)](https://www.bithound.io/github/Macavity/react-ts-boilerplate) [![bitHound Dependencies](https://www.bithound.io/github/Macavity/react-ts-boilerplate/badges/dependencies.svg)](https://www.bithound.io/github/Macavity/react-ts-boilerplate/master/dependencies/npm)
# Boilerplate for React.js components using TypeScript

Based on [React Boilerplate for components by SurviveJS](https://github.com/survivejs/react-component-boilerplate)

## Basic Usage

Clone the repository and use it as a starting point.

### Common Tasks

[] Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
[] Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.
[] Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

### Testing

The test setup is based on Karma/Mocha/Chai/Phantom. Code coverage report is generated through istanbul/isparta to `build/`.

* Running tests once - **npm test**
* Running tests continuously **npm run test:tdd**

