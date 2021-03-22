class SubjectInterface {
    attach(observer) {
        console.log("Attach not implemented.");
    }
    detach(observer) {
        console.log("Detach not implemented.");
    }
    notify() {
        console.log("Notify not implemented.");
    }
}

class ConcreteSubject extends SubjectInterface {
    constructor() {
        super();

        this.observers = [];
        this.state = 0;
    }

    attach(observer) {
        let doesExist = this.observers.indexOf(observer) !== -1;
        if (doesExist) {
            return console.log('Observer already attached.');
        }
        console.log('Attached an observer.');
        this.observers.push(observer);
    }

    detach(observer) {
        let observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Detached an observer.');
    }

    notify() {
        console.log('Notifying observers');
        for (let observer of this.observers) {
            observer.update(this);
        }
    }

    updateState() {
        console.log('Updating state:');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`State is now ${this.state}.`);
        this.notify();
    }
}

class ObserverInterface {
    update() {
        console.log('Update not yet implemented.');
    }
}

class ConcreteObserverA extends ObserverInterface {
    update(subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('User A reacted to the state change.');
        }
    }
}

class ConcreteObserverB extends ObserverInterface {
    update(subject) {
        if (subject instanceof ConcreteSubject) {
            console.log("User B reacted to the state change.");
        }
    }
}


let subject = new ConcreteSubject();
let observerOne = new ConcreteObserverA();
subject.attach(observerOne);

let observerTwo = new ConcreteObserverB();
subject.attach(observerTwo);

subject.updateState();
subject.updateState();
subject.updateState();