class Stripe {
  constructor(size, color) {
    this.size = size;
    this.spacing = size*random(3,6);
    this.color = color;
  }
  paintVerticalStripe(){
    fill(this.color);
    noStroke();
    for (let i=this.spacing/3; i<width; i+=this.spacing){
      rect(i, 0, this.size, height);
    }
  }
  paintHorizontalStripe(){
    fill(this.color);
    noStroke();
    for (let i=this.spacing/2; i<height; i+=this.spacing){
      rect(0, i, width, this.size);
    }
  }
}

let colorCode1;
let colorCode2;
let colorCode3;
let a;
let b;
let c;

function setup() {
  createCanvas(600, 600);
  colorCode1 = color(random(255),random(255),random(255), 70)
  colorCode2 = color(random(255),random(255),random(255), 100)
  colorCode3 = color(random(255),random(255),random(255), 150)
  a = new Stripe(floor(random(10,50)), colorCode1);
  b = new Stripe(floor(random(10,50)), colorCode2);
  c = new Stripe(floor(random(10,50)), colorCode3);
  
    background(color(random(255),random(255),random(255), 150)); 
}


function draw() {
 
  a.paintVerticalStripe();
  b.paintVerticalStripe();
  a.paintHorizontalStripe();
  c.paintVerticalStripe();
  b.paintHorizontalStripe();
  
  c.paintHorizontalStripe();
}