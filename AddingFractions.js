/*
Excercies
Find the sum of 2 fractions expresed in the form X/Y and U/V where X, Y, U, V are four integers.
Compute indivisible state A/B
By Toatzin Padilla Arias
*/

function fraction (ecuation) {
  ecuation = ecuation.split("/");
  let subEquation = ecuation[1].split("+");
  let x = ecuation[0];
  let y = subEquation[0];
  let u = subEquation[1];
  let v = ecuation[2];
  //Sum without greatest common divisor
  let a = (x*v) + (y*u);
  let b = (y * v);
  let gcdv = gcd(a,b);


  return (a/gcdv) + "/" + (b/gcdv);
}

var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

let ecuation = "594/216+1/1";

console.log(fraction(ecuation))
