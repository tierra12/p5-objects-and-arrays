var allMyBubbles = [];
var numOfBubbles = prompt("How many blood cells do you want to see?")
var sizeofBubble = 15;

function setup(){
    createCanvas(600,400);
    for(var i =0; i < numOfBubbles; i++){
    allMyBubbles [i] = new Bubble(random(0,600),random(0,400));
    } 
   
    }
    
    function mousePressed(){
        bubbles.push(new Bubble(mouseX,mouseY))
    }
}

function draw(){
    background(0);
    for(var i = 0; i < allMyBubbles.length; i++){
       allMyBubbles[i].display();
       allMyBubbles[i].move();
    }
      
}

function Bubble(x,y){
    this.x = x;
    this.y = y;


    fill(255,255,255);
    this.display  =function(){
        stroke(255);
        ellipse(this.x, this.y, sizeofBubble, sizeofBubble);
   
    }
    this.move = function (){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
        
    
    }
}