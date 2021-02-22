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



class Dessert {
    protected eatIt: EatIt;

    constructor(eatIt: EatIt) {
        this.eatIt = eatIt;
    }

    public production(): string {
        const result = this.eatIt.chowDown();
        return `Dessert: Base operation with:\n${result}`;
    }
}

class IceCream extends Dessert {
    public production(): string {
        const result = this.eatIt.chowDown();
        return `IceCream: Extended dessert operation with:\n${result}`;
    }
}

interface EatIt {
    chowDown(): string;
}

class GobbledDessert implements EatIt {
    public chowDown(): string {
        return 'Gobbled dessert.';
    }
}

class EnjoyedIceCream implements EatIt {
    public chowDown(): string {
        return 'Enjoyed the ice cream.';
    }
}

function clientCode(dessert: Dessert) {
    console.log(dessert.production());
}

let implementation = new GobbledDessert();
let abstraction = new Dessert(implementation);
clientCode(abstraction);

console.log('');

implementation = new EnjoyedIceCream();
abstraction = new IceCream(implementation);
clientCode(abstraction);