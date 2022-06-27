// Declare variable
let string = "";

// Square function
let square = (n, char) => {
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < n; column++) string += char;
        console.log(string);
        string = "";
    }
}

// Square with border function
let squareWithBorder = (n, charBorder, charInner) => {
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < n; column++) {
            if (row === 0 || row === n - 1 || column === 0 || column === n - 1) string += charBorder;
            else string += charInner;
        }
        console.log(string);
        string = "";
    }
}

// Square diagonal left right function
let squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < n; column++) {
            if (row === column) string += charDiagonal;
            else if (row < column) string += charUp;
            else string += charDown;
        }
        console.log(string);
        string = "";
    }
}

// Square diagonal right left function
let squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < n; column++) {
            if (column === n - row - 1) string += charDiagonal;
            else if (column < n - row - 1) string += charUp;
            else string += charDown;
        }
        console.log(string);
        string = "";
    }
}

// Half diamond function
let halfDiamond = (n, char) => {
    for (let row = 0; row < 2 * n - 1; row++) {
        if (row < n) for (let column = 0; column <= row; column++) string += char;
        else for (let column = 0; column < 2 * n - row - 1; column++) string += char;
        console.log(string);
        string = "";
    }
}

// Piramid function
let piramid = (n, char) => {
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < 2 * n - 1; column++) {
            string += (column < n - 1 - row || column > n - 1 + row) ? " " : char;
        }
        console.log(string);
        string = "";
    }
}

// Diamond function
let diamond = (n, char) => {
    for (let row = 0; row < 2 * n - 1; row++) {
        for (let column = 0; column < 2 * n - 1; column++) {
            if (row < n) string += (column < n - 1 - row || column > n - 1 + row) ? " " : char;
            else string += (column < row - n + 1 || column > 2 * n - row + 1) ? " " : char;
        }
        console.log(string);
        string = "";
    }
}

// TEST FUNCTIONS
square(4, "T");
console.log("\n");
squareWithBorder(4, 1, 0);
console.log("\n");
squareDiagonalLR(4, "\\", "A", "B");
console.log("\n");
squareDiagonalRL(4, "/", "A", "B");
console.log("\n");
halfDiamond(4, "*");
console.log("\n");
piramid(4, "*");
console.log("\n");
diamond(4, "*");