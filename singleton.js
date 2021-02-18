let Singleton = (function () {
    let instance;

    function createInstance() {
        let inst = "It's me! I'm the instance!";
        return inst;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
}) ();

function run() {

    let instanceOne = Singleton.getInstance();
    let instanceTwo = Singleton.getInstance();

    console.log('inst 1 is:', instanceOne)

    let verdict = instanceOne === instanceTwo ? "It worked!" : "Try again.";
    console.log(verdict);
}

run();