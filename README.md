![Cryptic Solver Logo](https://devweb2019.cis.strath.ac.uk/~vib16216/CrypticSolverPublic/readme-logo.jpg)

# Project Overview

## Cryptic Crosswords

A cryptic crossword is a puzzle in which each word of the cryptic clue is treated as an individual clue to the final answer. The cryptic clue follows the conventions of British Cryptic Crosswords. Typically, a cryptic crossword consists of two parts- the definition and the wordplay. The definition is either a synonym of the answer or semantically close to it and is usually in the start or end of the clue. The wordplay is an alternate route to the definition. The wordplay indicates how to structure the cryptic clue to reach the answer. There are many types of wordplays, some of them include Anagrams, Double Definitions and Reversals. Unlike its American counterpart, cryptic crosswords require the solver to ignore the “surface meaning” of the sentence to solve the clue. The solver must look for keywords which indicate operations that have to be performed to get the solution.

## Cryptic Solver

Cryptic Solver is a full stack web application developed using the MERN Stack (MongoDB, Express, React+Redux, Node.js). The application allows users to search cryptic clues and get their solutions. Additionally, users can register to save their past searches and reaccess them quickly. The Web Application uses the [**Cryptic Solver API**](https://app.swaggerhub.com/apis-docs/iamkhattar/cryptic-solver/7.1.0)

## Documentation

Documentation for Cryptic Solver can be viewed [**here**](https://devweb2019.cis.strath.ac.uk/~vib16216/documentation/). The webpage offers documentation for users, developers and contributers.

# Cryptic Solver API Overview

## About the API

The Cryptic Solver API is based on conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g a required parameter was ommited). Codes in the 5xx range indicate an error with the Cryptic Solver API servers.

## API Endpoints

| Endpoint     | Request Type | Access  | Description                         |
| ------------ | ------------ | ------- | ----------------------------------- |
| /api/auth    | GET          | Private | Get a User's Details                |
| /api/auth    | POST         | Public  | Login a User                        |
| /api/history | POST         | Private | Add search to Users History         |
| /api/solve   | POST         | Public  | Get the solution for a cryptic clue |
| /api/users   | POST         | Public  | Register a User                     |

# Installation Instructions

## Prerequisites

Before installing "Cryptic Solver", ensure that the following software is installed on the system. Additional Dependencies will install automatically on completing the next steps.

1. Git
2. Node.js v12.13+
3. Npm v6.12+
4. MongoDB v4.2.2+ or a MongoDB Atlas Account
5. Expo CLI v3.11.9+
6. Chrome Driver v81+

## Downloading the Repository

The Cryptic Solver Repository is available on Gitlab. To clone the repository, navigate to the folder where the repository is to be installed and use the following command:

```bash
  git clone https://gitlab.cis.strath.ac.uk/vib16216/cs408-crypticcrosswordsolver.git
```

## Database Setup

The following changes need to be made to use your instance of MongoDB

1. The **mongoURI** value in _/config/default.json_ needs to be changed to your MongoURI string
2. The **dbName** value in _/config/db.js_ needs to be changed to your Database name

## Installing Server Dependencies

The server requires additional dependencies to be installed on the system to function as intended. To install these dependencies, use the following command in the root directory

```bash
  npm install
```

## Running the Server in Development Mode

The server will restart automatically if any changes are made in development mode. To run the server in development mode, use the following command in the root directory:

```bash
  npm run server
```

## Installing Client Dependencies

The client requires additional dependencies to be installed on the system to function as intended. To install these dependencies, use the following command in the client directory.
To navigate to the client directory use the following command:

```bash
  cd client
```

Once in the client directory, use the following command to install the required dependencies:

```bash
  npm install
```

## Running the Client in Development Mode

The client will reload automatically when changes are made in development mode. To run the client in development mode, use the following command in the root directory:

```bash
  npm run client
```

## Installing Mobile App Dependencies

The mobile app requires additional dependencies to be installed on the system to function as intended. To install these dependencies, use the following command in the native-client directory.
To navigate to the client directory use the following command:

```bash
  cd native-client
```

Once in the native-client directory, use the following command to install the required dependencies:

```bash
  npm install
```

## Running the Mobile App in Development Mode

The application will reload automatically when changes are made in development mode. To run the client in development mode, use the following command in the root directory:

```bash
  npm run native
```

## Running the Application in Full Stack Mode

To run the application in developer mode, use the following command:

```bash
  npm run dev
```

The application will refresh automatically if any changes are made to the code in Devloper Mode

# Deployment Instructions

## Deploying the app to Heroko

Please ensure Heroku CLI is installed on the system before following the Instructions:

1. The following command must be run to login into Heroku CLI using the terminal

```bash
  heroku login
```

2. Next, a new Heroku repository must be created. The following command creates a new heroku repository

```bash
  heroku create
```

3. Finally, the project needs to be pushed to Heroku. Once the project is pushed, Heroku will run the post build script that is provided with Cryptic Solver. The following commands must be run to deploy the project on Heroku.

```bash
  git init
  git add .
  git commit -am 'Version 1.0.0'
  heroku <SECURE_COVE>
  git push heroku master
```

## Current Deployment

The Cryptic Solver Full Stack Web Application is currently deployed on Strathclyde DEVWEB. To use the application please visit [**Cryptic Solver**](https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/).

# Testing Instructions

## Test Suites

Multiple test suites have been written to test the application regularly. To run these test suites, use the following command in the root directory

```bash
  npm test
```

## Coverage Report

A Coverage Report is generated upon running the test suites. The Coverage Report can be accessed [**here**](https://devweb2019.cis.strath.ac.uk/~vib16216/coverage/report/).

## Clues Solved Successfully

Please visit [**Clues Solved Successfully**](https://devweb2019.cis.strath.ac.uk/~vib16216/clues/) to view clues that have been tested.

# License

[MIT](https://choosealicense.com/licenses/mit/)
