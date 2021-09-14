// 1. Create an object assigned to a variable called shirt.
// Give the object a property of color with a value of red
// Give a property of size with a value of large
// Give the object a method called getColor that returns the color of shirt.

// 2. Console.log the shirt's color.
// Console.log the output of the getColor.
// answer is below

// 3. Create an empty array assigned to a variable called wardrobe.
// This should contain all of your shirts.
// Create three new shirt objects with different colours and sizes
// Push the shirt objects to an array


// 4. (bit of a challenge!) Create a for loop that goes through the entire wardrobe array
// Each time it loops through, it should look at the shirt array item it is up to
// and console.log the colour of the shirt.









// answer
// 1-----------------
const shirt = {
  colour: "red",
  size: "large",
  getColor() {
    return this.colour;
  },
};

console.log(shirt.colour);
console.log(shirt.getColor());

// 2-----------------
const shirt2 = {
    colour: "green",
    size: "large",
    getColor() {
      return this.colour;
    },
  };

  const shirt3 = {
    colour: "orange",
    size: "medium",
    getColor() {
      return this.colour;
    },
  };

  // 3-----------------
  const wardrobe = [];

  wardrobe.push(shirt);
  wardrobe.push(shirt2);
  wardrobe.push(shirt3);

  // 4-----------------
  for (i=0; i < wardrobe.length; i++) {
      console.log(wardrobe[i].colour);
  }