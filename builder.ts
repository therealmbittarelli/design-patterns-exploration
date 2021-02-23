// Allows a developer to produce different types/representations of an object using the same construction code

// Interface - pre-implementation of methods
interface GardenBuilder {
  buildFence(): void;
  layCarbonBase(): void;
  layRowsOfCompost(): void;
  plantSeedlings(): void;
  waterPlants(): void;
  
}

// Extends GardenBuilder - implements methods from the interface
class ConcreteGardenBuilder implements GardenBuilder {
  private garden: Garden;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.garden = new Garden();
  }

  public buildFence(): void {
    this.garden.steps.push('\nConstructed a fence made of wood and wire mesh');
  }
  public layCarbonBase(): void {
    this.garden.steps.push('\nPut down 12 inches of dried leaves across the garden bed');
  }
  public layRowsOfCompost(): void {
    this.garden.steps.push('\nCreated rows of compost about 6 inches deep');
  }
  public plantSeedlings(): void {
    this.garden.steps.push('\nPlanted zinnias, lilies, columbine, silver loaf, and daisies');
  }
  public waterPlants(): void {
    this.garden.steps.push('\nWatered plants.\n');
  }

  public getGarden(): Garden {
    let result = this.garden;
    this.reset();
    return result;
  }
}

// Takes care of printing the relevant garden creation steps
class Garden {
  public steps: string[] = [];

  public showStepsTaken(): void {
    console.log(`\nThis is how I built this garden: ${this.steps.join('; ')}\n`);
  }
}

// Designates different types of gardens by setting up methods that only incorporate some methods out of the interface
class Director {
  private gardenBuilder: GardenBuilder;

  public setBuilder(gardenBuilder: GardenBuilder): void {
    this.gardenBuilder = gardenBuilder;
  }

  public fencelessGarden(): void {
    this.gardenBuilder.layCarbonBase();
    this.gardenBuilder.layRowsOfCompost();
    this.gardenBuilder.plantSeedlings();
    this.gardenBuilder.waterPlants();
  }

  public digGarden(): void {
    this.gardenBuilder.buildFence();
    this.gardenBuilder.plantSeedlings();
    this.gardenBuilder.waterPlants();
  }
}

// Run the code
function clientCodeBuilder(director: Director) {
  let builder = new ConcreteGardenBuilder();
  director.setBuilder(builder);

  console.log('--- Fenceless garden ---');
  director.fencelessGarden();
  builder.getGarden().showStepsTaken();

  console.log('--- Dig garden ---');
  director.digGarden();
  builder.getGarden().showStepsTaken();

  console.log('--- The works ---');
  builder.buildFence();
  builder.layCarbonBase();
  builder.layRowsOfCompost();
  builder.plantSeedlings();
  builder.waterPlants();
  builder.getGarden().showStepsTaken();
}

let director = new Director();
clientCodeBuilder(director);