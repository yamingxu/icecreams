var iceCreams = [];


function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  scale(0.3);
  for(var i = 200; i < 10000; i+=700){ 
    for(var j = 200; j < 10000; j+=1000){ 
      iceCreams.push(new IceCream(i,j));
    }
  }
  for(var i = 0; i < 130; i++){ 
   iceCreams[i].show();
 }
}




