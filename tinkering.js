//
//function isThisWorking(input) {
//  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
//}

// isThisWorking(3);
 

// code for the voting assignment in PREP moduels - video available to understand how to use functions, loops, if, return statements and more 
  /* const stations = [
    ["Big Bear Donair", 10, "restuarant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"]
];

function chooseStations (stations) {
  const goodStations = []
  for (const station of stations) {
    const capacity = station [1];
    

    if (capacity >= 20) {
    

      const type = station[2];
        if (type === "school" || type === "community centre") {
          goodStations.push(station[0]);
        }
    }
  }
  return goodStations;
}
console.log(chooseStations(stations)); */


//Grid exercise


/* const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition (moves) {
  const position = [0,0]
  for (let x = 0; x <= moves.length; x++){
    if (moves[x] === 'north') {
      position[0] = position[0] + 1;
    } else if (moves[x] === 'south') {
      position[0] = position[0] - 1;
    } else if (moves[x] === 'east') {
      position[1] = position[1] + 1;
    } else if (moves[x] === 'west') {
      position[1] = position[1] - 1;
    }
  }
  return position; 
}

console.log(finalPosition(moves)); */


//ageCalculator exericse

/*function ageCalculator (name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));*/


// howManyHundreds exercise

/* function howManyHundreds (num) {
  return Math.floor(num/100);
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0); */

// AreaCalculator

/* function calculateRectangleArea (length,width) {
  if (length < 0 || width < 0){
  return undefined
  } else {
  return (length*width)
  }
}

function calculateTriangleArea (base,height) {
  if (base < 0 || height < 0) {
    return undefined
  } else {
    return ( base * height/2)
  }
}

function calculateCircleArea (radius) {
  if (radius < 0) {
    return undefined;
  } else {
    return Math.PI * (radius * radius);
  }
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

*/

const packingList = ["tent", "bug spray", "sleeping bag"];

console.log(packingList[0]);
console.log(packingList[1]);
console.log(packingList[2]);