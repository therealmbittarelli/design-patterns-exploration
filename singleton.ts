// Restricts instantiation of a class to one object, providing global access to the one instance

// Cannot implement with a regular constructor as constructors must return a new object (by design)\
// Default constructor is made private (can't use the 'new' operator to create a new instance)
// Create static creation method to act as a constructor, which calls the private constructor to create an object and saves it in a static field (all future calls to the method return the cached object)

// We use Singleton enforcement in Thunder and MyGiide (AppRoot.js, connectedCallback())

// Singleton

// -instance: Singleton
// -Singleton()
// getInstance(): Singleton

// if (instance == null) {
    // instance = new Singleton()
// }
// return instance



// Usually, the goal is to manage global application state. Some examples I’ve seen or written myself include using a singleton as the source of config settings for a web app, on the client side for anything initiated with an API key (you usually don’t want to risk sending multiple analytics tracking calls, for example), and to store data in memory in a client-side web application (e.g. stores in Flux).

class SingletonClassTS {
  private static instance: SingletonClassTS;

  /**
   * The SingletonClass's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): SingletonClassTS {
    if (!SingletonClassTS.instance) {
      SingletonClassTS.instance = new SingletonClassTS();
    }

    return SingletonClassTS.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someMethod() {
    console.log("Inside of someMethod()")
  }
}

/**
 * The client code.
 */
function clientCode() {
  const s1 = SingletonClassTS.getInstance();
  const s2 = SingletonClassTS.getInstance();

  s1.someMethod();

  if (s1 === s2) {
    console.log('SingletonClassTS works, both variables contain the same instance.');
  } else {
    console.log('SingletonClassTS failed, variables contain different instances.');
  }
}

clientCode();