// Enables developer to separate the abstraction from the implementation and develop them independently
// Client code only accesses Abstraction part
// Encapsulates an implementation class inside of an interface class


//                Vehicle
//                |      |
//                |      |
//                |      |
//             Bus       Bike
//             |               |
//           _ _            ___________
//          |    |         |           |
//    ProduceBus |      ProduceBike    |
//         AssembleBus              AssembleBike   

//                 ---- TO ----

    //     Vehicle --------------- Workshop
    //        |                        |
    //   _________                 _________
    //   |        |                |        |
    //  Bus     Bike            Produce    Assemble       



    