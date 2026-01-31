// BASE COMPONENT
class Coffee {
    getCost() {
        return 100;
    }

    getDescription() {
        return "Simple Coffee";
    }
}

// DECORATOR BASE (wraps the coffee)
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}

// CONCRETE DECORATORS
class MilkDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 20;
    }

    getDescription() {
        return this.coffee.getDescription() + " + Milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 10;
    }

    getDescription() {
        return this.coffee.getDescription() + " + Sugar";
    }
}

class WhippedCreamDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 30;
    }

    getDescription() {
        return this.coffee.getDescription() + " + Whipped Cream";
    }
}

// USAGE - Mix and match at runtime!
let myCoffee = new Coffee();
console.log(myCoffee.getDescription()); // Simple Coffee
console.log(`Cost: ₹${myCoffee.getCost()}`); // Cost: ₹100

// Add Milk
myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.getDescription()); // Simple Coffee + Milk
console.log(`Cost: ₹${myCoffee.getCost()}`); // Cost: ₹120

// Add Sugar
myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.getDescription()); // Simple Coffee + Milk + Sugar
console.log(`Cost: ₹${myCoffee.getCost()}`); // Cost: ₹130

// Add Whipped Cream
myCoffee = new WhippedCreamDecorator(myCoffee);
console.log(myCoffee.getDescription()); // Simple Coffee + Milk + Sugar + Whipped Cream
console.log(`Cost: ₹${myCoffee.getCost()}`); // Cost: ₹160
