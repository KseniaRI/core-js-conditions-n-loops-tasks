/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const firstMax = a > b ? a : b;
  return firstMax > c ? firstMax : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const dx = Math.abs(queen.x - king.x);
  const dy = Math.abs(queen.y - king.y);
  return queen.x === king.x || queen.y === king.y || dx === dy;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isNotZero = !!Math.min(a, b, c);
  const isTriangle = a + b > c && a + c > b && b + c > a;
  const isIsosceles = !(a - b) || !(b - c) || !(a - c);
  return isNotZero && isTriangle && isIsosceles;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanUnitsMap = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  const tens = Math.floor(num / 10);
  const units = num % 10;
  const convertedUnits = units ? romanUnitsMap[units - 1] : '';
  let convertedTens = '';

  if (tens) {
    for (let i = 1; i <= tens; i += 1) {
      convertedTens += 'X';
    }
  }

  return `${convertedTens}${convertedUnits}`;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
const digitsMap = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const symbolsMap = {
  '-': 'minus',
  '.': 'point',
  ',': 'point',
};
function convertNumberToString(numberStr) {
  let convertedStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const currentSymbol = numberStr[i];
    const isNaNSymbol = Number.isNaN(+currentSymbol);

    switch (true) {
      case isNaNSymbol:
        convertedStr +=
          i === numberStr.length - 1
            ? `${symbolsMap[currentSymbol]}`
            : `${symbolsMap[currentSymbol]} `;
        break;
      default:
        convertedStr +=
          i === numberStr.length - 1
            ? `${digitsMap[+currentSymbol]}`
            : `${digitsMap[+currentSymbol]} `;
        break;
    }
  }
  return convertedStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let areEqual = false;
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    areEqual = str[i] === str[str.length - (i + 1)];
  }
  return areEqual;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let match = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      match = i;
      break;
    }
  }
  return match;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let containDigit = false;
  const str = `${num}`;
  for (let i = 0; i < str.length; i += 1) {
    if (Number(str[i]) === digit) {
      containDigit = true;
      break;
    }
  }
  return containDigit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  let num = 1;
  let rowStart = 0;
  let rowEnd = size - 1;
  let colStart = 0;
  let colEnd = size - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i += 1) {
      matrix[rowStart][i] = num;
      num += 1;
    }
    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i += 1) {
      matrix[i][colEnd] = num;
      num += 1;
    }
    colEnd -= 1;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i -= 1) {
        matrix[rowEnd][i] = num;
        num += 1;
      }
      rowEnd -= 1;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i -= 1) {
        matrix[i][colStart] = num;
        num += 1;
      }
      colStart += 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotatedMatrix = [...matrix];

  for (let layer = 0; layer < Math.floor(n / 2); layer += 1) {
    const first = layer;
    const last = n - layer - 1;

    for (let i = first; i < last; i += 1) {
      const offset = i - first;
      const top = matrix[first][i];
      rotatedMatrix[first][i] = matrix[last - offset][first];
      rotatedMatrix[last - offset][first] = matrix[last][last - offset];
      rotatedMatrix[last][last - offset] = matrix[i][last];
      rotatedMatrix[i][last] = top;
    }
  }

  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

// function sortByAsc(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const pivot = arr[0];
//   const left = [];
//   const right = [];
//   const pivotElements = [pivot];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] === pivot) {
//       pivotElements.push(arr[i]);
//     } else if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...sortByAsc(left), ...pivotElements, ...sortByAsc(right)];
// }

function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const len = str.length;

  let currentStr = str;

  for (let i = 0; i < iterations % len; i += 1) {
    let evenIndexChars = '';
    let oddIndexChars = '';
    for (let j = 0; j < len; j += 1) {
      if (j % 2 === 0) {
        evenIndexChars += currentStr[j];
      } else {
        oddIndexChars += currentStr[j];
      }
    }
    currentStr = evenIndexChars + oddIndexChars;
  }

  return currentStr;
}
// function shuffleChar(/* str, iterations */) {
//   throw new Error('Not implemented');
// }

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let num = number;
  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i === -1) {
    return number;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  for (let k = i + 1; k < digits.length - 1; k += 1) {
    for (let l = k + 1; l < digits.length; l += 1) {
      if (digits[k] > digits[l]) {
        [digits[k], digits[l]] = [digits[l], digits[k]];
      }
    }
  }
  let result = 0;
  for (let k = 0; k < digits.length; k += 1) {
    result = result * 10 + digits[k];
  }
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
