let d=0
let colors=["#6A0136","#BFAB25","#B81365","#026C7C","#055864"]
let ripples=[]
let drops=[]

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3)
}

function draw() {

  background(250);
  if(frameCount%20==1){
    drops.push(new drop())
  }
  
  
  
  for(let ripple of ripples){
    ripple.update();
    ripple.display();
  }
  
  for(let drop of drops){
    drop.update();
    drop.display();
  }
}

class ripple{
  constructor(x, y, color){
    this.x=x
    this.y=y
    this.d=10
    this.color= color
  }
  
  update(){
  this.d+=5
  if(this.d>height*10){
    let index = ripples.indexOf(this);
      ripples.splice(index, 1);
  }
    
  }
  
  display(){
    noFill()
    stroke(this.color)
    // noStroke()
    let filler= color(this.color)
    filler.setAlpha(100)
    fill(filler)
    push()
    translate(this.x, this.y)
    ellipse(0, 0, this.d, this.d/4)
    pop()
  }
}


class drop{
  constructor(){
    this.x=width/2
    this.y=-5
    this.yacc= 0.2
    this.yvel=0
    this.color= random(colors)
  }
  update(){
    this.yvel+=this.yacc
    this.y+=this.yvel
    
    if(this.y>=height/2){
     ripples.push(new ripple(width/2, height/2, this.color))
      let index = drops.indexOf(this);
      drops.splice(index, 1);
    }
    
  }
  
  display(){
   
    stroke(this.color)
    fill(this.color)
   ellipse(this.x, this.y, 18, 20) 
  }
}