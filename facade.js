

// Facade
class MakePizza {
  constructor(pizzaChoice) {
    this.pizzaChoice = pizzaChoice;

    this.cheese = new CheesePizza();
    this.pepperoni = new PepperoniPizza();
    this.bbq = new BbqChickenPizza();
  }

  create = (instructions) => {
    switch (this.pizzaChoice) {
      case 'Cheese':
        this.cheese.create(instructions);
        break;
      case 'Pepperoni':
        this.pepperoni.create(instructions);
        break;
      case 'BBQ Chicken':
        this.bbq.create(instructions);
        break;
      default:
        throw Error('We don\'t serve that type of pizza round these parts');
    }
  }
}

// Subclasses hidden behind facade; more complex underpinnings
class CheesePizza {
  create = (instructions) => {
    console.log('')
    console.log('Let\'s make a cheese pizza!');
    console.log(instructions.cheese);
  }
}

class PepperoniPizza {
  create = (instructions) => {
    console.log('')
    console.log('Let\'s make a pepperoni pizza!');
    console.log(instructions.pepperoni);
  }
}

class BbqChickenPizza {
  create = (instructions) => {
    console.log('')
    console.log('Let\'s make a BBQ chicken pizza!');
    console.log(instructions.bbq);
  }
}

// Set instructions for each type of pizza
let cheese = {
  'crust': 'thin',
  'sauce': 'red',
  'toppings': 'cheese',
  'shape': 'circle'
}

let pepperoni = {
  'crust': 'pillowy',
  'sauce': 'red',
  'toppings': 'pepperoni',
  'shape': 'triangle'
}

let bbq = {
  'crust': 'neapolitan',
  'sauce': 'bbq',
  'toppings': 'chicken, cilantro, red onion',
  'shape': 'rectangle'
}


// User only needs to create a new MakePizza object and 'feed it' ;) instructions on how to make the desired pizzer
let pizzaOne = new MakePizza('BBQ Chicken');
pizzaOne.create({bbq})

let pizzaTwo = new MakePizza('Pepperoni');
pizzaTwo.create({pepperoni});

let pizzaThree = new MakePizza('Cheese');
pizzaThree.create({cheese})


// Try to create a pizza that isn't on the menu
let pizzaFalse = new MakePizza('Candy cane');
pizzaFalse.create({cheese})