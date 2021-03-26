// Takes complex implementation and makes it more readily accessible, so that users can consume a feature without worrying about implementation-level details


// This facade will only require one call to 'tellMeAboutAnimals()' to return information pulled from four different methods in two subclasses
class MyFacade {
  private duck: Duck;
  private otter: Otter;

  constructor(duck: Duck, otter: Otter) {
    this.duck = duck || new Duck();
    this.otter = otter || new Otter();
  }

  public tellMeAboutAnimals(): string {
    let wordsToPrint = '\nWhen they wake up in the morning, animals have different routines.\n'
    wordsToPrint += this.duck.wakeUp() + '\n';
    wordsToPrint += this.otter.wakeUp() + '\n';
    wordsToPrint += 'And after lunchtime, these animals have their own ways of digesting and resting.\n'
    wordsToPrint += this.duck.afternoonActivities() + '\n';
    wordsToPrint += this.otter.afternoonActivities() + '\n';

    return wordsToPrint;
  }
}

// Subclass
class Duck {
  public wakeUp(): string {
    return 'Ducks like to eat slimy weeds for breakfast and go for a paddle.'
  }

  public afternoonActivities(): string {
    return 'Naptime is a duck\'s favorite time of day.'
  }
}

// Subclass
class Otter {
  public wakeUp(): string {
    return 'Otters brush their teefs before heading out for the day.'
  }

  public afternoonActivities(): string {
    return 'An otter who has had a full lunch likes to lounge on the riverbank and hum a lil ditty.'
  }
}


// Run the code
function clientCodeFacade(facade: MyFacade) {
  console.log(facade.tellMeAboutAnimals());
}

let duckSubClass = new Duck();
let otterSubClass = new Otter();
let myFacade = new MyFacade(duckSubClass, otterSubClass);

clientCodeFacade(myFacade);