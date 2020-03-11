var x=60;
var y=440;
var radius = 35;
var bodyHeight = 100;
var neckHeight = 50;
var easing = 0.04;

function setup(){
 createCanvas(360,480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw(){
  background("white");
  //var targetX=mouseX;
  //x=x+(targetX-x)* easing;
 
  if(mouseIsPressed){
    neckHeight = 216;
    BodyHeight= 90;
  }
  else{
    neckHeight = 20;
    bodyHeight = 100;
  }
  var neckY=y-bodyHeight-neckHeight-radius;
 
 //antennas and the neck
  stroke(100);
  line(x+12,y-bodyHeight,x+12,neckY);
  line(x+20,neckY,x-12,neckY-103);
  line(x+20,neckY,x+52,neckY-109);
  line(x+20,neckY,x+78,neckY+15);
 
  noStroke();
  
 //creating wheel
  fill(0,0,182);
  ellipse(x,y-33,33,33);
    
 // creating body
  fill(63,224,200);
  rect(x-48,y-bodyHeight,90,bodyHeight-43);
 
 // creating head
  fill(0,128,129);
  ellipse(x+12,neckY,radius,radius);
  
 //creating eye 
  fill(32,234,98);
  ellipse(x+20,neckY-16,14,14);
    
}
