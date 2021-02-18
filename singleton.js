let Singleton = (function () {
    let instance;

    createInstance = () => {
        let inst = "It's me! I'm the instance!";
        return inst;
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
}) ();

class SingletonClass {
    constructor() {
        if (!SingletonClass._instance) {
            SingletonClass._instance = this;
        }
        return SingletonClass._instance;
    }
    
    saySomethingFunny = () => {
        console.log("I will attack you with the North.")
    }
    
}


run = () => {
    
    let instanceOneF = Singleton.getInstance();
    let instanceTwoF = Singleton.getInstance();
    
    let instanceOneC = new SingletonClass();
    let instanceTwoC = new SingletonClass();
    instanceOneC.saySomethingFunny()

    console.log('inst 1 is:', instanceOneF)

    let verdictF = instanceOneF === instanceTwoF ? "Function: It worked!" : "Function: Try again.";
    let verdictC = instanceOneC === instanceTwoC ? "Class: It worked!" : "Class: Try again.";
    
    console.log(verdictF);
    console.log(verdictC);
}



run();

