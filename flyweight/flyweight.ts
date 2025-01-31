// Useful when a program must support a large number of objects, enough so that it could otherwise crash a computer if built inefficiently
// + these objects have duplicate states in common that can be extracted and shared

// Purpose is to minimize memory intake

// Ex: Rendering a forest of individual trees.
// Instead of each oak tree looking like this: 
//                                             class Oak {
//                                                "leaves": "green",
//                                                "bark": "rough",
//                                                "height": "tall",
//                                                "locationX": 200,
//                                                "locationY": 300
//                                              }

// ... with the same standard oak tree info for leaves, bark, and height, try this instead:

//                                             class TreeTypeOak {
//                                                "leaves": "green",
//                                                "bark": "rough",
//                                                "height": "tall",
//                                                "location": 300, 200
//                                              }
//                                              class TreeOne {
//                                                "treeType": "TreeTypeOak",
//                                                "locationX": 200,
//                                                "locationY": 300
//                                              }
//                                              class TreeTwoThousand {
//                                                "treeType": "TreeTypeOak",
//                                                "locationX": 500,
//                                                "locationY": 200
//                                              }

// ... this way, Oak trees are defined once, and referenced as many times as needed by much smaller (memory-wise) objects

// Flyweight
class BookType {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        // console.log(`Book: Displaying shared (${s}) and unique (${u}) state.`);
    }
}

/**
 * The Flyweight Factory creates and manages the Flyweight objects. It ensures
 * that flyweights are shared correctly. When the client requests a flyweight,
 * the factory either returns an existing instance or creates a new one, if it
 * doesn't exist yet.
 */
class BookFactory {
    private books: {[key: string]: BookType} = <any>{};

    constructor(initialBooks: string[][]) {
        for (const state of initialBooks) {
            this.books[this.getKey(state)] = new BookType(state);
        }
    }

    /**
     * Returns a Book's string hash for a given state.
     */
    private getKey(state: string[]): string {
        return state.join(', ');
    }

    /**
     * Returns an existing Flyweight with a given state or creates a new one.
     */
    public getBook(sharedState: string[]): BookType {
        const key = this.getKey(sharedState);

        if (!(key in this.books)) {
            // console.log('BookFactory: Creating new book record.');
            this.books[key] = new BookType(sharedState);
        } else {
            // console.log('BookFactory: Record of this book already exists.');
        }

        return this.books[key];
    }

    public listBookTypes(): void {
        const count = Object.keys(this.books).length;
        console.log(`\nBooksFactory: I have ${count} booktypes:`);
        for (const key in this.books) {
            console.log(key);
        }
    }
}

/**
 * The client code usually creates a bunch of pre-populated flyweights in the initialization stage of the application
 */
const factoryTS = new BookFactory([
    ['300', 'Adventure', 'hardcover'],
    ['250', 'Biography', 'magazine'],
    ['15', 'Historical', 'paperback'],
    ['25', 'Fantasy', 'hardcover'],
    ['275', 'Action', 'paperback'],
]);

function addBookToLibrary(
    ff: BookFactory, title: string, author: string,
    pages: string, genre: string, color: string,
) {
    console.log(`Success! Adding ${title} by ${author} to the library.`);
    const book = ff.getBook([pages, genre, color]);

    // The client code either stores or calculates extrinsic state and passes it
    // to the flyweight's methods.
    book.operation([title, author]);
}

addBookToLibrary(factoryTS, 'The Golden Compass', 'Philip Pullman', '300', 'Adventure', 'hardcover');

addBookToLibrary(factoryTS, 'Steel Tides', 'James Doe', '275', 'Action', 'paperback');

addBookToLibrary(factoryTS, 'New Book', 'Pizza Man', '25', 'Romance', 'magazine');

// factoryTS.listBookTypes();