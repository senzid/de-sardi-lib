# Getting Started

This project is hosted in a public github package repository available and distributed with npm.

The projects will be totally opened during few days. If you are trying to install it as a external library and credentials failed message appears contact to @senzid to obtain permissions or a valid token.

## Project Structure

This project is built in atomic-design pattern. It means that we have self contained components with everything they need in each component folder. In our case the most basic components are atoms (modal and button) and components that need others simple components are molecules (table).

The project is created with rollup as a bundler for handle the dependencys, build and compile because is more faster and efficent that webpack por this type of projects.

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs storybook based on stories of the components

### `npm test`

Launches the test runner in the interactive watch mode with JEST and React testing library.

### `npm run build`

Builds the app for production.

### `npm publish`

Publish built app to npm. It's mandatory upgrade the version in package.json.