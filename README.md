![Cryptic Solver Logo](https://devweb2019.cis.strath.ac.uk/~vib16216/CrypticSolverPublic/readme-logo.jpg)

## Cryptic Crosswords

A cryptic crossword is a puzzle in which each word of the cryptic clue is treated as an individual clue to the final answer. The cryptic clue follows the conventions of British Cryptic Crosswords. Typically, a cryptic crossword consists of two parts- the definition and the wordplay. The definition is either a synonym of the answer or semantically close to it and is usually in the start or end of the clue. The wordplay is an alternate route to the definition. The wordplay indicates how to structure the cryptic clue to reach the answer. There are many types of wordplays, some of them include Anagrams, Double Definitions and Reversals. Unlike its American counterpart, cryptic crosswords require the solver to ignore the “surface meaning” of the sentence to solve the clue. The solver must look for keywords which indicate operations that have to be performed to get the solution.

## Cryptic Solver

Cryptic Solver is a full stack web application developed using the MERN Stack (MongoDB, Express, React+Redux, Node.js). The application allows users to search cryptic clues and get their solutions. Additionally, users can register to save their past searches and reaccess them quickly. The Web Application uses the [Cryptic Solver API](https://app.swaggerhub.com/apis-docs/iamkhattar/cryptic-solver/7.1.0)

## Cryptic Solver API

The Cryptic Solver API is based on conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g a required parameter was ommited). Codes in the 5xx range indicate an error with the Cryptic Solver API servers.

## Installation

```bash
  npm install
  cd client
  npm install
```

## Run Application

```bash
  npm run dev
```

## Test Application

```bash
  npm test
```

## Usage

Please visit [Cryptic Solver](https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/ "Cryptic Solver") to use the web application.

## API Endpoints

| Endpoint     | Request Type | Access  | Description                         |
| ------------ | ------------ | ------- | ----------------------------------- |
| /api/auth    | GET          | Private | Get a User's Details                |
| /api/auth    | POST         | Public  | Login a User                        |
| /api/history | POST         | Private | Add search to Users History         |
| /api/solve   | POST         | Public  | Get the solution for a cryptic clue |
| /api/users   | POST         | Public  | Register a User                     |

## Types of clues that can be solved

1. Double Definition
2. Anagram
3. Initial Letter
4. Reversal
5. Hidden
6. Final Letter
7. Deletion
8. Alternate Letters
9. Container

## Clues Solved Successfully

Please visit [Clues Solved Successfully](https://devweb2019.cis.strath.ac.uk/~vib16216/clues/) to view clues that have been tested.

## License

[MIT](https://choosealicense.com/licenses/mit/)
