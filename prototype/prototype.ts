// Enables cloning of existing objects without having to become dependent on their classes

// Example:
// mitotic cell division
// After mitotic division, a pair of identical cells exist.
// The original cell is the prototype, and creates the copy.

// Prototype
class BookRecords {
    this.bookbook = new Book();

    public clone(): this {
        const clone = new Book();

        clone.book = Object.create(this.book);
        clone.read = Object.create(this.read);

        return clone;
    }
}

class Book {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last + ", status: " + this.status);
    };
}

function runCode() {
    let bookReport = new BookRecords();
    bookReport.book = "The Golden Compass";
    bookReport.read = "Read";

    let bookReportClone = bookReport.clone();

    if (bookReport.book === bookReportClone.book) {
        console.log("Book values have been cloned!")
    }
    else {
        console.log("Book clone unsuccessful :( ")
    }
}

runCode();