// 1. Create an object assigned to a variable called shirt.
// Give the object a property of color with a value of red
// Give a property of size with a value of large
// Give the object a method called getColor that returns the color of shirt.

// 2. Console.log the shirt's color.
// Console.log the output of the getColor.
// answer is below









// answer

const shirt = {
  colour: "red",
  size: "large",
  getColor() {
    return this.colour;
  },
};

console.log(shirt.colour);
console.log(shirt.getColor());
