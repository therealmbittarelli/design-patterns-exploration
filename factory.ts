// Creator class declares factory method that returns an object of the Feature class
abstract class Creator {
    public abstract printLandscapeFeature(): Feature;
}

// ConcreteCreator classes define (or override) the factory method
// This allows us to customize Feature's type (`Sea`, `Mountain`, etc are implementations of `Feature`)
class ConcreteCreator1 extends Creator {
    public printLandscapeFeature(): Feature {
        return new Sea();
    }
}

class ConcreteCreator2 extends Creator {
    public printLandscapeFeature(): Feature {
        return new Mountain();
    }
}

class ConcreteCreator3 extends Creator {
    public printLandscapeFeature(): Feature {
        return new Wetlands();
    }
}

class ConcreteCreator4 extends Creator {
    public printLandscapeFeature(): Feature {
        return new Plains();
    }
}

class ConcreteCreator5 extends Creator {
    public printLandscapeFeature(): Feature {
        return new Shoreline();
    }
}

// Interface - declares an operation(s) that all implementations of Feature need to implement 
interface Feature {
    operation(): string;
}

class Sea implements Feature {
    public operation(): string {
        return 'Sea'
    }
}

class Mountain implements Feature {
    public operation(): string {
        return 'Mountain'
    }
}

class Wetlands implements Feature {
    public operation(): string {
        return 'Wetlands'
    }
}

class Plains implements Feature {
    public operation(): string {
        return 'Plains'
    }
}

class Shoreline implements Feature {
    public operation(): string {
        return 'Shoreline'
    }
}

// Helper function to run the code
function runTheCodez(creator: Creator) {
    console.log(creator.printLandscapeFeature());
}

console.log('Print new landscape feature:');
runTheCodez(new ConcreteCreator1());
console.log('')

console.log('Print new landscape feature:');
runTheCodez(new ConcreteCreator2());
console.log('')

console.log('Print new landscape feature:');
runTheCodez(new ConcreteCreator4());
console.log('')

console.log('Print new landscape feature:');
runTheCodez(new ConcreteCreator3());
console.log('')

console.log('Print new landscape feature:');
runTheCodez(new ConcreteCreator5());
console.log('')