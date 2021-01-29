class Rectangle {
  constructor(){
    this._length = 0;
    this._width = 0;
  }

/***
 * returns the width
 * Precondition: none
 * Postcondition: none
 */
  get width(){
    return this._width; 
  }

/***
 * returns the length
 * Precondition: none
 * Postcondition: none
 */
  get length(){
    return this._length; 
  }

/***
 * changes the width to the user input
 * Precondition: none
 * Postcondition: none
 */
  setWidth () {
    var newWidth = prompt("Enter in a new width: ");
    this._width = newWidth;
  }

/***
 * changes the length to user input
 * Precondition: none
 * Postcondition: this._length
 */
  setLength () {
    var newLength = prompt("Enter in a new length: ");
    this._length = newLength;
  }

/***
 * calculates and prints out the perimeter
 * Precondition: none
 * Postcondition: perimeter
 */
  perimeter () {
    var perimeter = (2 * this._width) + (2 * this._length);
    console.log("Perimeter: " + perimeter);
  }

/***
 * calculates and prints out the area
 * Precondition: none
 * Postcondition: area
 */
  area() {
    var area = this._width * this._length;
    console.log("Area: " + area);
  }

/***
 * asks the users how they would like to scale the rectangle then returns it by the scale option and factor they choose
 * Precondition: factor >= 0
 * Postcondition: this._width, this._length
 */
  scaleRectangle() {
    var userChoice = prompt ("Would you like to \n 1. Scale the width and length by the same factor \n 2. Scale the length only \n 3. Scale the width only \n 4. Scale the width and length by different factors");
    if (userChoice == 1){
      var scaleBoth = prompt("What factor would you like to scale it by?");
      this._width *= scaleBoth;
      this._length *= scaleBoth;
      console.log("Your width is: " + this._width + "\nYour length is: " + this._length);
    } else if (userChoice == 2){
      var scaleLength = prompt("What factor would you like to scale it by?");
      this._length *= scaleLength;
      console.log("Your width is: " + this._width + "\nYour length is: " + this._length);
    } else if (userChoice == 3){
      var scaleWidth = prompt("What factor would you like to scale it by?");
      this._width *= scaleWidth;
      console.log("Your width is: " + this._width + "\nYour length is: " + this._length);
    } else if (userChoice == 4){
      var scaleDiffLength = prompt("What factor would you like to scale the length by?");
      var scaleDiffWidth = prompt("What factor would you like to scale the width by?")
      this._width *= scaleDiffWidth;
      this._length *= scaleDiffLength;
      console.log("Your width is: " + this._width + "\nYour length is: " + this._length);
    } else {
      console.log("That is not a valid choice. Please restart selections.");
    }
  }

  drawRectangle () {
    var message;
    for (var i = 0; i < this._length; i++){
      message = "";
      for (var j = 0; j < this._width; j++){
        message += "*";
      }
      console.log(message);
    }
  }
}


/**
 * runs the user through the program until they say no
 */
const myRect = new Rectangle(); 
var startUsing = prompt("Would you like to continue using (Y/N)?");
while (startUsing == "Y"){
  myRect.setWidth();
  myRect.setLength();
  myRect.perimeter();
  myRect.area();
  myRect.drawRectangle();
  myRect.scaleRectangle();
  myRect.drawRectangle();
  var continueUsing = prompt("Would you like to continue (Y/N)?");
  startUsing = continueUsing;
}

console.log("Ok, goodbye!");