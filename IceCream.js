class IceCream{
  constructor(objectX,objectY){
    this.x = objectX;
    this.y = objectY;

  }
  show(){
    push();
    rectMode(CENTER);
    stroke(0);
    translate(this.x,this.y); //x = 900,y=200
    fill(0);
    rotate(-PI/4);
    rect(-70,-80,10,50);
    pop();   //spoon

    strokeWeight(2);
    fill(255);
    triangle(this.x+100,this.y-100,this.x+100,this.y+100,this.x-100,this.y+100);
    triangle(this.x-100,this.y+120,this.x+100,this.y+120,this.x-100,this.y+320);
    triangle(this.x+100,this.y+150,this.x+100,this.y+350,this.x-100,this.y+350); // upper shape
  
    noFill();
    strokeWeight(1);
    for(var i = 0; i < 200; i+=20){
      triangle(this.x-100,this.y+100,this.x-100+i,this.y+100-i,this.x-100+i,this.y+100);
    }
    for(var i = 0; i < 200; i+=5){
      triangle(this.x-100,this.y+320,this.x-100,this.y+320-i,this.x-100+i,this.y+320-i );
    }
    for(var i = 0; i < 200; i+=3){
      triangle(this.x+100,this.y+350,this.x+100,this.y+350-i,this.x+100-i,this.y+350);
    }
    for(var i = 0; i < 200; i+=10){
      for(var j = 0; j <160; j+=10){
        rect(this.x-100+i,this.y+370+j,10,10);   
      }
    }                                  //lines
 
    fill(255);
    noStroke();
    triangle(this.x-100,this.y+370,this.x-100,this.y+610,this.x-40,this.y+610);
    triangle(this.x+104,this.y+370,this.x+104 ,this.y+610,this.x+41,this.y+610);
    noFill();
    stroke(0);
    strokeWeight(2);
    triangle(this.x-100,this.y+370,this.x+100,this.y+370,this.x,this.y+770); //lower shaper and fill

  }

}
