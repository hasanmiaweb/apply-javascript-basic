// it's very simple way in factorial number

// let factorial = 1;
// for (let i = 1; i <= 120; i++) {
//   factorial = factorial * i;
//   console.log(factorial);
// }

// it's the intermediate way in factorial
let fact = 1;
function factorial(n) {
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

var user = factorial(30);
console.log(user);
