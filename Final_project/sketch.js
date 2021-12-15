var serial;
var sensorValue = 0;

var portName = "/dev/tty.usbmodem101";

var inMessage = [0, 0];
var i = 0;

var x = 0;
var y = 0;


let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake= new Snake();
  foodLocation();
  
  serial = new p5.SerialPort();
  serial.list();
  serial.open(portName);
  serial.on('list', gotList);
  serial.on('data', gotData);
  
}

function gotList(thelist) {
  
  for (var i = 0; i < thelist.length; i++) {

    console.log(i + " " + thelist[i]);
  }
}

function gotData() {
  var currentString = serial.readLine();
  
  trim(currentString);
  
  if (!currentString) return;
  
  // console.log(currentString);
      inMessage = split(currentString, '&');
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function draw() {
  
  console.log(inMessage);
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if(inMessage[1] > 100 && abs(inMessage[0] < 100)){
    snake.setDir(0, 1);
  }
  if(inMessage[1] < -100 && abs(inMessage[0] < 100)){
    snake.setDir(0, -1);
  }
   if(inMessage[0] < -100 && abs(inMessage[1] < 100)){
    snake.setDir(-1, 0);
  }
  if(inMessage[0] > 100 && abs(inMessage[1] < 100)){
    snake.setDir(1, 0);
  }
  //  if(x < 0);
  //   snake.setDir(0, -1);
  //  if (y > 0);
  // snake.setDir(1, 0);
  //   if (y < 0);
  // snake.setDir(-1, 0);
    
  
  

  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
  
//   function serialEvent() {
//   var inString = serial.readLine();
//   if (inString.length > 0) {
//     sensorValue = inString; 
 
//   }
// }
}