// GLOBAL VARIABLES
const restaurantName = "Flatburger";

// Step 1: Variable Data - Global scope
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';


// SHOW BURGERS
function showBurgers() {
    let message = "Burger Menu:\n";

    for (let i = 0; i < burgers.length; i++) {
        message += burgers[i] + "\n";
    }

    console.log(message);
}


// SHOW MILKSHAKES
function showMilkshakes() {
    console.log("Milkshake Menu:");

    for (let i = 0; i < milkshakes.length; i++) {
        let shake = milkshakes[i];
        console.log(shake);
    }
}


// Step 2: Function and Block - Function-scoped variable
function addBurger() {
    // Function-scoped variable
    const newBurger = 'Flatburger';
    // Use .push() to add to burgers array
    burgers.push(newBurger);
    console.log(newBurger + " added!");
}


// Step 3: Variable Declaration and Scope - Block-scoped variable
if (true) {
    // Block-scoped variable
    const anotherNewBurger = 'Maple Bacon Burger';
    // Use .push() to add to burgers array
    burgers.push(anotherNewBurger);
    console.log(anotherNewBurger + " added!");
}

// Function to change featuredDrink - globally accessible
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
    console.log("Featured drink changed to: " + featuredDrink);
}


// FEATURED ITEM
function featuredItem() {
    if (burgers.length > 0) {
        let item = burgers[0];
        console.log("Featured burger: " + item);
    }
}


// RUN CODE
console.log("Welcome to " + restaurantName);
console.log("Initial burgers: " + burgers);
console.log("Featured drink: " + featuredDrink);

showBurgers();