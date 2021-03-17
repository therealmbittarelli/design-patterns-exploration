// Useful when a program must support a large number of objects, enough so that it could otherwise crash a computer if built inefficiently
// + these objects have duplicate states in common that can be extracted and shared

// Ex: Rendering a forest of individual trees.
// Instead of each oak tree looking like this: 
//                                             class Oak {
//                                                "leaves": "green",
//                                                "bark": "rough",
//                                                "height": "tall",
//                                                "locationX": 200,
//                                                "locationY": 300
//                                              }

// ... with the same standard oak tree info for leaves, bark, and height, try this instead:

//                                             class TreeTypeOak {
//                                                "leaves": "green",
//                                                "bark": "rough",
//                                                "height": "tall",
//                                                "location": 300, 200
//                                              }
//                                              class TreeOne {
//                                                "treeType": "TreeTypeOak",
//                                                "locationX": 200,
//                                                "locationY": 300
//                                              }
//                                              class TreeTwo {
//                                                "treeType": "TreeTypeOak",
//                                                "locationX": 500,
//                                                "locationY": 200
//                                              }

// ... this way, Oak trees are defined once, and referenced as many times as needed by much smaller (memory-wise) objects