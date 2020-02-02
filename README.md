![Cryptic Solver Logo](https://devweb2019.cis.strath.ac.uk/~vib16216/CrypticSolverPublic/readme-logo.jpg)

Cryptic Solver is a web application developed to solve cryptic crossword clues using the MERN Stack.

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
| /api/users   | POST         | Public  | Register a User                     |
| /api/auth    | GET          | Private | Get a User's Details                |
| /api/auth    | POST         | Public  | Login a User                        |
| /api/history | POST         | Private | Add search to Users History         |
| /api/solve   | POST         | Public  | Get the solution for a cryptic clue |

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
