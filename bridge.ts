// Enables developer to separate the abstraction (GUI) from the implementation (API) and develop them independently
// Client code only accesses Abstraction part
// Encapsulates an implementation class inside of an interface class


//                Vehicle
//                |      |
//                |      |
//                |      |
//             Bus       Bike
//             |               |
//           _ _            ___________
//          |    |         |           |
//    ProduceBus |      ProduceBike    |
//         AssembleBus              AssembleBike   

//                 ---- TO ----

    //     Vehicle --------------- Workshop
    //        |                        |
    //   _________                 _________
    //   |        |                |        |
    //  Bus     Bike            Produce    Assemble       


// Abstraction
// Define method to eat dessert
class Dessert {
  protected eatIt: EatIt;

  constructor(eatIt: EatIt) {
    this.eatIt = eatIt;
  }

  public letsEat(): string {
    const result = this.eatIt.chowDown();
    return `Dessert (base class):\nI ${result}`;
  }
}

// Extension of Dessert
class IceCream extends Dessert {
  public letsEat(): string {
    const result = this.eatIt.chowDown();
    return `IceCream (extended Dessert class):\nI ${result}`;
  }
}

// Interface/ Implementation
interface EatIt {
  chowDown(): string;
}

// Extension of EatIt
class GobbledDessert implements EatIt {
  public chowDown(): string {
    return 'gobbled dessert.';
  }
}

// Extension of EatIt
class EnjoyedIceCream implements EatIt {
  public chowDown(): string {
    return 'enjoyed the ice cream.';
  }
}


// Run that code
function clientCodeBridge(dessert: Dessert) {
  console.log(dessert.letsEat());
}

let implementation = new GobbledDessert();
let abstraction = new Dessert(implementation);
clientCodeBridge(abstraction);

console.log('');

implementation = new EnjoyedIceCream();
abstraction = new Dessert(implementation);
clientCodeBridge(abstraction);

console.log('');

implementation = new EnjoyedIceCream();
abstraction = new IceCream(implementation);
clientCodeBridge(abstraction);