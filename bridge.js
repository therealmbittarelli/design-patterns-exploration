class Block {
    constructor(colorToPaint) {
        this.colorToPaint = colorToPaint;
    }

    paintBlock = () => {
        let result = this.colorToPaint.paintIt();
        return `Block base class result is:\n${result}`;
    }
}

class SquareBlock extends Block {
    paintBlock = () => {
        let result = this.colorToPaint.paintIt();
        return `Square block class result is:\n${result}`;
    }
}

class OctagonalBlock extends Block {
    paintBlock = () => {
        let result = this.colorToPaint.paintIt();
        return `Octagonal block class result is:\n${result}`;
    }
}

class ColorToPaint {
    paintIt = () => {}
}

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


