// Establish various shapes of blocks, and various colors that they can be painted

// Abstraction - define 'Block' base class to be extended to various types of Blocks
// Define method that paints a block
class Block {
    constructor(colorToPaint) {
        this.colorToPaint = colorToPaint;
    }

    paintBlock = () => {
        let paintPlan = this.colorToPaint.paintIt();
        return `Block base class paint plan is:\n${paintPlan}`;
    }
}

// Extend base class 'Block' as different block shapes
class SquareBlock extends Block {
    paintBlock = () => {
        let paintPlan = this.colorToPaint.paintIt();
        return `Square block class paint plan is:\n${paintPlan}`;
    }
}

class OctagonalBlock extends Block {
    paintBlock = () => {
        let paintPlan = this.colorToPaint.paintIt();
        return `Octagonal block class paint plan is:\n${paintPlan}`;
    }
}

// Implementation - defines/pre-implements but doesn't implement a paintIt() function
// Like an interface in the above way
class ColorToPaint {
    paintIt = () => {}
}

// Extend class 'ColorToPaint' by implementing the paintIt() method in various colors
class Blue extends ColorToPaint {
    paintIt = () => {
        return `Gonna paint it blue.`;
    }
}

class Orange extends ColorToPaint {
    paintIt = () => {
        return `Gonna paint it orange.`;
    }
}

class Purple extends ColorToPaint {
    paintIt = () => {
        return `Gonna paint it purple.`;
    }
}


// Log it out
consoleLogIt = (block) => {
    console.log(block.paintBlock());
}

let blue = new Blue();
let block = new Block(blue);
consoleLogIt(block);

console.log('');

let orange = new Orange();
let squareBlock = new SquareBlock(orange);
consoleLogIt(squareBlock);

console.log('');

let purple = new Purple();
let octagonalBlock = new OctagonalBlock(purple);
consoleLogIt(octagonalBlock);


