//6. Create an object in Javascript using a class and without a class. You can use nodeJS or webbrowse. Discuss the difference in approach.

 //Create JavaScript Object with Constructor
 function Vehicle2(name, maker) {
    this.name = name;
    this.maker = maker;
 }
 let car1 = new Vehicle2('Mustang', 'Ford')
 let car2 = new Vehicle2('Model3', 'Tesla')
 console.log(car1.name);    //Output: Mustang
 console.log(car2.name);    //Output: Model3



 //Create JavaScript Object with create method
 let car = Object.create(Object.prototype,
    {
      name:{
        value: 'Mustang',
        configurable: true,
        writable: true,
        enumerable: false
      },
      maker:{
        value: 'Ford',
        configurable: true,
        writable: true,
        enumerable: true
      }
    });
  console.log(car.name)    //Output: Mustang


//  Create JavaScript Object using ES6 classes
class Vehicle3 {
    constructor(name, maker, type) {
      this.name = name;
      this.maker =  maker;
      this.type = type;
    }
  }
  let EVcar1 = new Vehicle3('Mustang', 'Ford', 'sports-ev');
  let EVcar2 = new Vehicle3('Model3', 'Tesla', 'ev');
  console.log(EVcar1.name);    //Output: Mustang
  console.log(EVcar2.maker);   //Output: Model3
  

  //methods to the JavaScript class
  class Vehicle4 {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
    start() {
      console.log("Starting EV...");
    }
  }
  let EVCar4 = new Vehicle4('ES7', 'NIO', 'ev');
  EVCar4.start();    //Output: Starting...
