/* Instructions
Create a program to practice building and logging arrays.
Tasks
Task 1: Create Arrays
Create three separate arrays using array literals for the following:
    ● An array of 5 grocery store items.
    ● An array of 3 numbers representing prices.
Task 2: Access and Log the Values
Use console.log() to log the arrays.
    1. Log the entire array of grocery items.
    2. Log the entire array of prices.
    3. Log three individual items of your choice.
    4. Log two prices of your choice. */

let groceryItemsList = ["Milk", "Steak", "Peanut Butter", "Apples", "Bacon"];

let itemPricesList = [10.88, 8.5, 20.01];

console.log(groceryItemsList);
console.log(itemPricesList);

for (let i = 0; i < 3; i++) {
  console.log(groceryItemsList[i]);
}

for (let i = 0; i < 2; i++) {
  console.log(itemPricesList[i]);
}
