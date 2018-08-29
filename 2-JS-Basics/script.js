/*var heightOne, heightTwo, heightThree, ageOne, ageTwo, ageThree, x, y, z;

heightOne = 175; //prompt('Enter player one\'s height:');
ageOne =  26; // prompt('Enter player one\'s age:');
heightTwo = 175; // prompt('Enter player two\'s height:');
ageTwo = 26; //prompt('Enter player two\'s age:');
heightThree = 175; // prompt('Enter player three\'s height:');
ageThree = 26; // prompt('Enter player three\'s age:');

x = heightOne + ageOne * 5;
y = heightTwo + ageTwo * 5;
z = heightThree + ageThree * 5;

if ( x > y ) {
  if ( x > z ) {
    console.log('Player One wins with ' + x + ' !');
  } else {
    if ( z === x ) {
      console.log('Player Three and Player One tie with ' + x + ' !' );
    } else {
      console.log('Player Three wins with ' + z + ' !');
    }
  }
} else {
  if ( x === y ) {
    if (x === z) {
      console.log('It\'s a tie with ' + x + ' !');
    } else {
      if ( x > z ) {
        console.log('Player One and Player Two tie with ' + x + ' !');
      } else {
        console.log('Player Three wins with '+ z + ' !');
      }
    }
  } else {
    if ( y > z ) {
      console.log('Player Two wins with ' + y + ' !');
    } else {
      if ( z === y ) {
        console.log('Player Two and Three tie with ' + y + ' !');
      } else {
        console.log('Player Three wins with ' + z + ' !');
      }
    }
  }
}
*/
/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']

for (var i = (names.length-1); i >= 0; i--) {
  console.log(names[i]);
}
*/
//challenge 2

var full_1 = [1965, 2008, 1992];
var full_2 = [2001, 1975, 1989];

function printFullAge(years) {
  var ages = [];
  var fullAge = [];
  for (var i = 0; i < years.length; i++) {
    ages[i] = 2018 - years[i];
  }

  for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      fullAge[i] = true;
    } else {
      fullAge[i] = false;
    }
  }
  console.log(years);
  console.log(fullAge);
}

printFullAge(full_1);
printFullAge(full_2);
