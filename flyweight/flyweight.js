function CakeType(flavor, shape, layers, frosting) {
    this.flavor = flavor;
    this.shape = shape;
    this.layers = layers;
    this.frosting = frosting;
}

class CakeFactory {
    constructor() {
        super();

        this.cakes = {};
    }

    return {
        getCake(flavor, shape, layers, frosting) {
            if (!this.cakes[flavor + shape]) {
                this.cakes[flavor + shape] =
                    new CakeType(flavor, shape, layers, frosting);
            }
            return this.cakes[flavor + shape];
        },
        getCount() {
            let count = 0;
            for (let cake in cakes) {
                count++;
            }
            return count;
        }
    }
}

class Bakery {
    let cakes = {};
    let count = 0;

    return {
        add(flavor, shape, layers, frosting, design) {
            cakes[design] = new CakeType(flavor, shape, layers, frosting, design);
            count++;
        }
    }
}

const factory = new CakeFactory([
    ['chocolate', 'round', '2 layers', 'buttercream'],
    ['marble', 'square', '5 layers', 'buttercream'],
    ['vanilla', 'square', '2 layers', 'chocolate'],
    ['red velvet', 'round', '3 layers', 'vanilla'],
]);

addCakeToOrder () {

}