interface Iterator<T> {

    // Return the current element
    current(): T;

    // Move to the next element (and return the current element)
    next(): T;

    // Return current element's key
    key(): number;

    // Check whether current position is valid
    valid(): boolean;

    // "Rewind" iterator to the first element
    rewind(): void;
}

interface Aggregator {
    // Retrieve an external iterator
    getIterator(): Iterator<string>
}

// Provides the tools to move through the collection
class AlphaOrderIterator implements Iterator<string> {
    private collection: WordsCollection;

    // Stores current position
    private position: number = 0;

    // Keeps track of traversal direction
    private reverse: boolean = false;

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public rewind() {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    }
}

// Builds the collection of items that will be iterated over
class WordsCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new AlphaOrderIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new AlphaOrderIterator(this, true);
    }
}


let collection = new WordsCollection();
collection.addItem('Door number 1');
collection.addItem('Door number 2');
collection.addItem('Door number 3');

let iterator = collection.getIterator();

console.log('Straight traversal example:');
while (iterator.valid()) {
    console.log(iterator.next());
}

console.log('');
console.log('Reversed!');
let reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}