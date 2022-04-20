// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((i) => {
    if (i === "Waldo") {
      found(names.indexOf(i));
    }
  });
};

const actionWhenFound = function(i) {
  console.log("Found him! at index " + i);
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
