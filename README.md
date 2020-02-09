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
2. Node v12.13+
3. Npm v6.12+
4. MongoDB v4.2.2+ or MongoDB Atlas Account
5. Heroku v7.0.0+ (Optional)

## Downloading the Repository

The Cryptic Solver Repository is available on Gitlab. To clone the repository, navigate to the folder where the repository is to be installed and use the following command:

```bash
  git clone https://gitlab.cis.strath.ac.uk/vib16216/cs408-crypticcrosswordsolver.git
```

## Database Setup

The following changes need to be made to use your instance of MongoDB

1. The **mongoURI** value in _/config/default.json_ needs to be changed to your MongoURI string
2. The **dbName** value in _/config/db.js_ needs to be changed to your Database name

## Server Dependencies

There are additional dependencies required for the server to run. To install these dependencies, use the following command in the root directory

```bash
  npm install
```

## Client Dependencies

There are additional dependencies required for the server to run. To install these dependencies, use the following command in the root directory
To navigate to the client directory use the following command:

```bash
  cd client
```

Once in the client directory, use the following command to install the required dependencies:

```bash
  npm install
```

## Running the Application in Developer Mode

To run the application in developer mode, use the following command:

```bash
  npm run dev
```

The application will refresh automatically if any changes are made to the code in Devloper Mode

## Deploying the app to Heroko

Please follow the following steps to deploy to Heroku. Additionally, ensure that Heroku CLI is installed on your system before following these steps.

1. Before deploying to Heroku CLI, a static React Build must be created and served using the API routes. To do this please add the following route at the end of all your routes in the server.js file:

```javascript
const path = require("path");
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
```

2. Run the following command to login into Heroku using the terminal.

```bash
  heroku login
```

3. Then, run the following command to create a Heroku Repository.

```bash
  heroku create
```

4. A post build heroku script has already been created and will run automatically after pushing to Heroku. Please use the following commands to deploy to Heroku

```bash
  git init
  git add .
  git commit -am 'Version 1.0.0'
  heroku <SECURE_COVE>
  git push heroku master
```

## Testing Application

Multiple test suites have been written to test the application. To run these test suites use the following command:

```bash
  npm test
```

## Current Deployment

The Cryptic Solver Full Stack Web Application is currently deployed on Strathclyde Devweb. To use the web application please visit [Cryptic Solver](https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/ "Cryptic Solver").

## Clues Solved Successfully

Please visit [Clues Solved Successfully](https://devweb2019.cis.strath.ac.uk/~vib16216/clues/) to view clues that have been tested.

## License

[MIT](https://choosealicense.com/licenses/mit/)
