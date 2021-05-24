// Aggregation is a key principle behind Decorator

/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
interface Component {
    drawMonster(): string;
}

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
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

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public drawMonster(): string {
        return this.component.drawMonster();
    }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class TallMonster extends Decorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    public drawMonster(): string {
        return `${super.drawMonster()}.. and now I'll add 100 feet of height to my monster`;
    }
}

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
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

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component: Component) {
    // ...

    console.log(`${component.drawMonster()}`);

    // ...
}

/**
 * This way the client code can support both simple components...
 */
const simple = new BasicMonster();
console.log('I\'ve got a basic monster:');
clientCode(simple);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const tall = new TallMonster(simple);
const fuzzy = new FuzzyMonster(simple);
const scaley = new ScaleyMonster(simple);
const tallAndFuzzy = new FuzzyMonster(tall);
const tallAndScaley = new TallMonster(scaley);
console.log('Now I\'ve got a fuzzy monster:');
clientCode(fuzzy);
console.log('')
console.log('And here is a tall monster:');
clientCode(tall);
console.log('');
console.log('Lookout! This monster is tall AND fuzzy!:');
clientCode(tallAndFuzzy);
console.log('');
console.log('Woah! This monster is scaley and tall!:');
clientCode(tallAndScaley);