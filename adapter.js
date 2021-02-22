// Class that, in this example, prints in the desired format of all-caps
class TargetClass {
  printTargetExample = () => {
    return 'I PRINT THINGS IN ALL CAPS.';
  }
}

// The adaptee class does not print everything in all-caps, and must be adjusted to match TargetClass's formatting
class AdapteeClass {
  printAdapteeExample = () => {
    return 'Otters are my favorite!'
  }
}

// Call in the adapter to set any lower case letters in what is returned by AdapteeClass to upper case
class AdapterClass {
  constructor(adapteeClass) {
    this.adapteeClass = adapteeClass
  }

  adapterTranslationAction = () => {
    // Set incoming string to all upper case
    let adapteePhraseToUpper = this.adapteeClass.printAdapteeExample().toUpperCase();

    return `Checkout the Adapter in action! Adaptee has been translated/updated: ${adapteePhraseToUpper}`;
  }
}

let targetClassInstance = new TargetClass();
console.log('Target:', targetClassInstance.printTargetExample());

let adapteeClassInstance = new AdapteeClass();
console.log('Adaptee:', adapteeClassInstance.printAdapteeExample());

let adapterClassInstance = new AdapterClass(adapteeClassInstance);
console.log('Adapter:', adapterClassInstance.adapterTranslationAction());

