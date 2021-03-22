// Observer pattern enables objects 'subscribe' to be notified about state change events
// (and unsubscribe)

interface Subject {
    // Attach observer to the Subject
    attach(observer: Observer): void;

    // Detach observer to the Subject
    detach(observer: Observer): void;

    // Notify all attached observers
    notify(): void;
}

class ConcreteSubject implements Subject {
    public state: number;

    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const doesExist = this.observers.indexOf(observer) !== -1;
        if (doesExist) {
            return console.log("Observer has been attached already.");
        }

        console.log(`Attached an observer.`);
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Nonexistent observer.");
        }

        this.observers.splice(observerIndex, 1);
        console.log("Detached an observer.");
    }

    public notify(): void {
        console.log("Notifying observers...");
        for (let observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log("Let's update state...");
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Updated state to ${this.state}`);
        this.notify();
    }
}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
    public update(subject:Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log("ConcreteObserverA reacted to the event.");
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject:Subject): void {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 3)) {
            console.log("ConcreteObserverB reacted to the event.");
        }
    }
}

let subject = new ConcreteSubject();
let observerOne = new ConcreteObserverA();
subject.attach(observerOne);

let observerTwo = new ConcreteObserverB();
subject.attach(observerTwo);

subject.someBusinessLogic();
subject.someBusinessLogic();

// subject.detach(observerTwo);
subject.someBusinessLogic();