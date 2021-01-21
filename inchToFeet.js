//Method 1 Start

var user = [100, 120, 300];

function inchToFeet(user) {
  var feet = user / 12;
  return feet;
}

var newUser = inchToFeet(user[0]);
console.log(newUser);

//Method 1 End
// Method 2 Start
function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}

var user1 = inchToFeet(120);
console.log(user1);

var user2 = inchToFeet(100);
console.log(user2);

// Method 2 End


