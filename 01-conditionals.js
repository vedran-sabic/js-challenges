/* 
Deklariraj varijablu broj i pridodijeli joj neki broj.
Ako je broj 3 ili 7 ispisi: Broj je 3 ili 7
Ako je manji od 3 ispisi: manji od 3
Ako je broj veci od 3 a manji od 7 ispisi: Izmedu 3 i 7
Ako je broj veci od 7 ispisi: Veci od 7
*/

var broj = 8;

if (broj === 3 || broj === 7) {
  console.log("Broj je 3 ili 7");
} else if (broj < 3) {
  console.log("Manji od 3");
} else if (broj > 7) {
  console.log("Veci od 7");
} else {
  console.log("Izmedu 3 i 7");
}

/* 
Deklariraj varijablu broj i pridodijeli joj neki broj.
Ako je broj djeljiv s 3 ispisi Fizz
Ako je djeljiv s 4 ispisi Buzz
Ako je djeljiv s 3 i 4 ispisi Fizz Buzz
Ako nije djeljiv ni s 3 ni 4  ispisi taj broj
*/

if (broj % 12 === 0) {
  console.log("Fizz Buzz");
} else if (broj % 3 === 0) {
  console.log("Fizz");
} else if (broj % 4 === 0) {
  console.log("Buzz");
} else {
  console.log(broj);
}

/* 
Deklariraj varijablu myString i spremi u nju neki string.
Uzmi posljednjih 5 znakova stringa i ispisi ih u sljedecem stringu:
Posljednjih 5 znakova stringa je ____ 
*/

var myString = "Hello world";
var result = myString.substring(myString.length - 5, myString.length);

console.log(`Posljednjih 5 znakova stringa je ${result}`);

/* 
Deklariraj varijablu myString i u nju spremi neki string.
Uzmi sve znakove od 5. znaka pa do 10. znaka ne ukljucujuci 10. znak.
Ako je duljina novog stringa manja od 5. ispisi: Krace od 5!
Ako je novi string prazan ispisi: Prazan string!
Ako je duljina novog stringa 5, ispisi taj string
*/

var myString = "123456789";
var subStr = myString.substring(4, 9);

if (!subStr) {
  console.log("Prazan string");
} else if (subStr.length < 5) {
  console.log("Krace od 5!");
} else if (subStr.length === 5) {
  console.log(subStr);
}