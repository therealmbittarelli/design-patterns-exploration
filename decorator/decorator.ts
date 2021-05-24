// Aggregation is a key principle behind Decorator

// Interface - pre-implemented drawMonster() function
interface Component {
    drawMonster(): string;
}

// Build a default monster
class BasicMonster implements Component {
    public drawMonster(): string {
        return 'My basic monster has a head, body, two arms, and two legs.';
    }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public drawMonster(): string {
        return this.component.drawMonster();
    }
}

// Create configurable monster attributes
class TallMonster extends Decorator {
    public drawMonster(): string {
        return `${super.drawMonster()}.. and now I'll add 100 feet of height to my monster`;
    }
}

class FuzzyMonster extends Decorator {
    public drawMonster(): string {
        return `${super.drawMonster()}.. and now I'll add fluffy fur to my monster`;
    }
}

class ScaleyMonster extends Decorator {
    public drawMonster(): string {
        return `${super.drawMonster()}.. and now I'll add shiny scales to my monster`
    }
}

// Function for easy running of the code
function runTheCodez(component: Component) {
    console.log(`${component.drawMonster()}`);
}


// Build various monster configurations
const simple = new BasicMonster();
console.log('I\'ve got a basic monster:');
runTheCodez(simple);
console.log('');

const tall = new TallMonster(simple);
const fuzzy = new FuzzyMonster(simple);
const scaley = new ScaleyMonster(simple);
const tallAndFuzzy = new FuzzyMonster(tall);
const tallAndScaley = new TallMonster(scaley);
console.log('Now I\'ve got a fuzzy monster:');
runTheCodez(fuzzy);
console.log('')
console.log('And here is a tall monster:');
runTheCodez(tall);
console.log('');
console.log('Lookout! This monster is tall AND fuzzy!:');
runTheCodez(tallAndFuzzy);
console.log('');
console.log('Woah! This monster is scaley and tall!:');
runTheCodez(tallAndScaley);