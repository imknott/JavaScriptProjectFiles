class Media {
    constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    }
    
    get title(){
      return this._title;
    
    }
    
    get isCheckedOut(){
      return this._isCheckedOut;
    
    }
    
    get ratings(){
      return this._ratings;
    }
    
    set isCheckedOut(checkedOut){
    
      this._isCheckedOut = checkedOut;
    
    }
    
    toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
    
    }
    
    getAverageRating() {
    let sumOfRatings = this._ratings.reduce((currentSum, rating) => 
    currentSum + rating, 0)
    
    const lengthOfRatings = this._ratings.length; 
    return Math.floor(sumOfRatings/lengthOfRatings); 
    
    }
    
    addRating(newRating) {
       this._ratings.push(newRating);
    }
    
    }
    
    
    class Book extends Media {
    constructor(author, title, pages){
    super(title);
    this._author = author; 
    this._pages = 0; 
    
    }
    
    get author() { 
      return this._author; 
    }
    
    get pages() { 
      return this._pages; 
    }
    
    
    }
    
    //this is a class that utilizes the Media parent class to provide prepackaged methods and info.
    class Movie extends Media { 
    constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = 0; 
    
    }
    
    get director() {
      return this._director;
    }
    
    get runTime(){
      return this._runTime;
    }
    
    
    }
    
    
    //this stores the data of a new Book object with the following data. 
    const historyOfEverything = new Book('Bill Bryson', 'A Short History of nearly Everything', 544);
    
    historyOfEverything.toggleCheckOutStatus();
    
    console.log(historyOfEverything.isCheckedOut);
    
    historyOfEverything.addRating(4);
    
    historyOfEverything.addRating(5);
    
    historyOfEverything.addRating(5);
    
    console.log(historyOfEverything.getAverageRating());
    
    
    const speed = new Movie('Jan de bont', 'Speed' , 116);
    
    speed.toggleCheckOutStatus();
    
    console.log(speed.isCheckedOut);
    
    speed.addRating(1);
    
    speed.addRating(1);
    
    speed.addRating(5);
    
    console.log(speed.getAverageRating());
    