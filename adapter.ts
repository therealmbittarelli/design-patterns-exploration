// Acts as mediator between two incompatible objects by transforming calls to one object into a format that another can recognize
// Often used to help legacy code work with modern classes

/**
 * The Target defines the domain-specific interface used by the client code.
 */
class Target {
  public request(): string {
      return 'The Target object returns a legible string, like this!';
  }
}

/**
 * The Adaptee needs some adaptation before the client code can use it, as the Adaptee returns backwards English
 */
class Adaptee {
  public specificRequest(): string {
      return '.sdrawkcab ma I .pleH';
  }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
      super();
      this.adaptee = adaptee;
  }

  public request(): string {
      const result = this.adaptee.specificRequest().split('').reverse().join('');
      return `The Adapter translates the Adaptee. Look: ${result}`;
  }
}

/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCodeAdapter(target: Target) {
  console.log(target.request());
}

const target = new Target();
console.log("Target is:");
clientCodeAdapter(target);

console.log('');

const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Using the Adapter, I can read the Adaptee:');
const adapter = new Adapter(adaptee);
clientCodeAdapter(adapter);