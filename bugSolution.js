function myFunc() {
  // Convert arguments to a real array
  const argsArray = Array.from(arguments);
  console.log(argsArray);
  // Or use a for loop 
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

myFunc(1, 2, 3);