/* #1 - For petljom ispiši brojeve od 0 do 15 */

for (var i = 0; i <= 15; i++) {
    console.log(i);
}


/* #2 - For petljom ispiši brojeve od 12 do 24 */

for (var i = 12; i < 25; i++) {
    console.log(i);
}

/* #3 - ispiši sve neparne brojeve od 7 do 31 */

for (let i = 7; i <= 31; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

/* #4 - ispiši parne brojeve od 10 do -20 */

for (let i = 10; i >= -20; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* #5 - iteriraj kroz niz brojeva od 1 do 45.
Ako je broj u tom nizu djeljiv s 3, ispiši Fizz, 
Ako je broj u tom nizu djeljiv s 5, ispiši Buzz, 
Ako je broj u tom nizu djeljiv s 15, ispiši FizzBuzz
 */

for (var i = 1; i <= 45; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
}

/* #6 - ispiši sve pojedinačne elemente ovog niza:
var myArray = ['element1', 'element2', 'element3', 'element4'] */

var myArray = ['element1', 'element2', 'element3', 'element4'];

/* ne pisati ručno:
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]); */

// prvi način:
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// drugi način
for (var element of myArray) {
    console.log(element);
}


/* #7 - za niz 
var exampleArray = [4, 6, 8];
ispiši svaki član niza, tako da svakom članu navedeš njegov redni broj i njegovu vrijednost */

var exampleArray = [4, 6, 8];

for (let i = 0; i < exampleArray.length; i++) {
    console.log(`Redni broj ${i} je vrijednost ${exampleArray[i]}`);
}

/* #8 - izračunaj zbroj svih elemenata ovog niza: */
var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;

// prvi nacin
for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

// drugi nacin
/* for (var numberArray of numbersArray) {
    sum += numbersArray;
}
 */
console.log(sum);

/* #9 napravi petlju koja prima unos broja iz konzole i ispisuje faktorijel tog broja
primjer: faktorijel broja 4 je
4! = 4 * 3 * 2 * 1
 */

var num = process.argv[2];

for (var i = num - 1; i > 0; i--) {
    num *= i;
}

console.log(num);

/* #9 provjeri je li neki string palindrom
dakle, za string 123454321 rezultat je true */

var _str = "Ana vOli milOvana";
var str = _str.split(" ").join("").toLowerCase();
var isPalindrome = true;

for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        var isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? 'String je palindrom' : 'String nije palindrom');