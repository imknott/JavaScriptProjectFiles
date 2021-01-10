
//the menu object holds the array of the meals courses. 
const menu = {
    _courses: {
       appetizers: [],
       mains: [],
       desserts: []
   
   },
   //this is a getter function that will return the values in the menu object arrays.
   get courses(){
     return{
       appetizers: this.appetizers,
       mains: this.mains,
       desserts: this.desserts
     };
   },
   // the methods containing the get and set are the getter and setter functions that will set up the data inside of our arrays and also return those stored values. 
   get appetizers(){
   return this._courses.appetizers
   },
   
   set appetizers(appetizerIn){
   this._courses.appetizers = appetizerIn;
   },
   
   get mains(){
   return this._courses.mains
   },
   
   set mains(newMain){
   this._courses.mains = newMain;
   },
   
   get desserts(){
   return this._courses.desserts
   },
   
   set desserts(newDessert){
   this._courses.desserts = newDessert;
   },
   //this method takes in three parameters that will be used to fill in a dish inside the given course. 
   addDishToCourse(courseName,dishName, dishPrice){
   
     const dish = {
       name: dishName,
       price: dishPrice
     };
   
   return this._courses[courseName].push(dish);
   
   },
   
   getRandomDishFromCourse(courseName){
   
   const dishes = this._courses[courseName];
   
   const index = Math.floor(Math.random() * dishes.length);
   
   return dishes[index];
   
   
   },
   
   generateRandomMeal(){
   
   const appetizer = this.getRandomDishFromCourse('appetizers');
   
   const main = this.getRandomDishFromCourse('mains');
   
   const dessert = this.getRandomDishFromCourse('desserts');
   
   const totalPrice = main.price + dessert.price + appetizer.price;
      return `Your meal is ${main.name}, ${appetizer.name}, ${dessert.name} and your total is ${totalPrice}`
   }
   
   
   };
   
   menu.addDishToCourse('appetizers', 'calamari', 5.25);
   menu.addDishToCourse('appetizers', 'sauteed spinach', 4.25);
   menu.addDishToCourse('appetizers', 'raw oysters', 8.25);
   menu.addDishToCourse('mains', 'rack of lamb', 20.25);
   menu.addDishToCourse('mains', 'shrimp rissoto', 16.25);
   menu.addDishToCourse('mains', 'barbecued ribs', 18.50);
   menu.addDishToCourse('desserts', 'cheesecake', 8.25);
   menu.addDishToCourse('desserts', 'sticky pudding', 9.25);
   menu.addDishToCourse('desserts', 'lava cake', 8.25);
   
   
   
   const meal = menu.generateRandomMeal();
   
   console.log(meal);