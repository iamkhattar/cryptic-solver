![Cryptic Solver Logo](https://devweb2019.cis.strath.ac.uk/~vib16216/CrypticSolverPublic/readme-logo.jpg)

Cryptic Solver is a web application developed to solve cryptic crossword clues using the MERN Stack.

## Installation

```bash
  npm install
```

## Run Application through IDE

```javascript
const getSolution = require("./modules/solution/generate-solution");
async function driver(clue, length) {
  var solution = await getSolution(clue, length).catch(err => {
    console.log("Server Error");
    process.exit();
  });
  console.log(solution);
}
driver(clue, length);
```

## Test Application

```bash
  npm test
```

## Usage

Please visit [Cryptic Solver](https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/ "Cryptic Solver") to use the web application.

## Types of clues that can be solved

1. Double Definition
2. Anagram
3. Initial Letter
4. Reversal

## Clues Solved Successfully

Please visit [Clues Solved Successfully](https://devweb2019.cis.strath.ac.uk/~vib16216/clues/) to view clues that have been tested.

## License

[MIT](https://choosealicense.com/licenses/mit/)
