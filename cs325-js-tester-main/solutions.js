export const sumOfSquares = (x, y) => x * x + y * y;

export const maxOfThree = (a, b, c) => Math.max(a, b, c);

export const isLeapYear= (year) => (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0));

export const allEvens = (array) => array.filter((number) => number % 2 === 0);

export const listSquares = (array) => array.map((number) => number * number);

export const listSum = (array) => array.reduce((sum, number) => sum + number, 0);

export const listSquaresSum = (array) => array.reduce((sum, number) => sum + number * number, 0);

export const subArray = (array, indices) => indices.map((number) => array[number]);

export const getRepeats = (array) => array.filter((e, i, a) =>
    (a.indexOf(e) === i) && (a.lastIndexOf(e) !== i));

export const over21 = (array) => array.filter((person) => person.age >= 21);

export const makeHtmlList = (array) => (array.length > 0) ? 
    ('<ul><li>' + array.join('</li><li>') + '</li></ul>') : '';