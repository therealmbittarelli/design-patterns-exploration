
class TargetClass {
    printTargetExample = () => {
        return 'I PRINT THINGS IN ALL CAPS.';
    }
}

// The adaptee class prints a false phrase about my favorite animal
class AdapteeClass {
    
    printAdapteeExample = () => {
        return 'Otters are my favorite!'
    }
}

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

