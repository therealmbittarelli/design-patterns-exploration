class IteratorInterface {
    current() {
        console.log('Method not yet implemented.')
    }

    next() {
        console.log('Method not yet implemented.')
    }

    valid() {
        console.log('Method not yet implemented.')
    }

    rewind() {
        console.log('Method not yet implemented.')
    }
}

class AggregatorInterface {
    getIterator() {
        console.log('Method not yet implemented.')
    }
}

class PhraseIterator extends IteratorInterface {
    constructor(collection, reverse = false) {
        super();

        this.collection = collection;
        this.reverse = reverse;
        this.position = 0;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    // If in reverse mode, set position to total count of items minus 1; otherwise, to 0
    rewind() {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }

    // Return item at the current position
    current() {
        return this.collection.getItems()[this.position];
    }

    next() {
        let item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    valid() {
        // Is valid if reverse mode is in place and position is greater than 0
        if (this.reverse) {
            return this.position >= 0;
        }
        // Is valid, otherwise, if position is less than the total count of items in collection
        return Boolean(this.position < this.collection.getCount());
    }
}

class WordsCollection extends AggregatorInterface {
    constructor() {
        super();
        this.items = [];
    }

    getIterator() {
        return new PhraseIterator(this);
    }

    getReverseIterator() {
        return new PhraseIterator(this, true);
    }

    addItem(item) {
        this.items.push(item);
    }

    getCount() {
        return this.items.length;
    }

    getItems() {
        return this.items;
    }

}

let collectionJS = new WordsCollection();
collectionJS.addItem('Peanut');
collectionJS.addItem('Juice');
collectionJS.addItem('Snickers');

let iteratorJS = collectionJS.getIterator();

console.log('In natural order:');
while (iteratorJS.valid()) {
    console.log(iteratorJS.next());
}

console.log('----------------')

console.log('In reverse order:');
let reverseIteratorJS = collectionJS.getReverseIterator();
while (reverseIteratorJS.valid()) {
    console.log(reverseIteratorJS.next());
}