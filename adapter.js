//
class TargetClass {
    printTargetExample = () => {
        return 'Goodnight, Neverland!';
    }
}

// The adaptee class prints outdated/incorrect information
class AdapteeClass {
    printMaggiesFavoriteAnimal = () => {
        return 'Dolphins are my favorite!'
    }
}

class AdapterClass {
    constructor(adapteeClass) {
        this.adapteeClass = adapteeClass
    }

    adapterTranslationAction = () => {
        // Split string into array and remove the first word
        let adapteePhraseToArray = this.adapteeClass.printMaggiesFavoriteAnimal().split(' ');
        adapteePhraseToArray.splice(0, 1);

        // Set the item to replace the removed word with
        let favoriteAnimal = 'Otters '

        // Update the initial phrase with the TRUE favorite animal
        let newPhrase = favoriteAnimal.concat(adapteePhraseToArray.join());
        newPhrase = newPhrase.replace(/,/g, ' ');
        
        return `Checkout the Adapter in action! Adaptee has been translated/updated: ${newPhrase}`;
    }
}

let targetClassInstance = new TargetClass();
console.log('Target:', targetClassInstance.printTargetExample());

let adapteeClassInstance = new AdapteeClass();
console.log('Adaptee:', adapteeClassInstance.printMaggiesFavoriteAnimal());

let adapterClassInstance = new AdapterClass(adapteeClassInstance);
console.log('Adapter:', adapterClassInstance.adapterTranslationAction());

