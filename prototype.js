function CustomerPrototype(cust) {
    this.cust = cust;

    this.clone = function () {
        let customer = new Customer();

        customer.first = cust.first;
        customer.last = cust.last;
        customer.status = cust.status;

        return customer;
    };
}

function Customer(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last + ", status: " + this.status);
    };
}

function run() {

    let customerOne = new Customer("Maggie", "Bittarelli", "has paid");
    let prototypeOne = new CustomerPrototype(customerOne);

    let customerTwo = new Customer("Zippy", "Zipps", "payment due");
    let prototypeTwo = new CustomerPrototype(customerTwo);

    let firstCustomer = prototypeOne.clone();
    let secondCustomer = prototypeTwo.clone();

    console.log("");
    console.log("***** Record of customer payments *****")
    firstCustomer.say();
    secondCustomer.say();
    console.log("");
}

run();