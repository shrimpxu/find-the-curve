let colors = ['#f7fff7','#06205d', '#8bb7f6', '#ff803c', '#0f29af', '#189356', '#7bb7a0', '#dea2b5', '#ffe45b'];
let value = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200, 200, 200,8);
  noFill();
  for(let i = 0; i<100; i++){
    let x = random(-0.1, 1.1) * width;
    let y = random(0.45, 0.55) * height;
    let w = width*80;
    let h = noise(width*0.5, width)*80;
    let n = int(random(10,200));
    let col = random(colors);
    stroke(col);
    strokeWeight(20*0.01);
    bigEllipse(x,y,w,h,n,random(0.001,0.005));
  }
}
function bigEllipse(x, y, w, h, n, b){
  for(let i = 0; i < n; i++){
    let ang = noise(x*b, y*b)*TAU*10;
    let ww = cos(x*0.1) * w;
    let hh = cos(y*0.1) * h;
    let col = (colors);
    push();
    translate(x,y);
    stroke(col);
    ellipse(0,0,ww,hh);
    pop();
    x+=cos(ang);
    y+=sin(ang);
  }
}
function keyPressed() {
  if (value === 0) {
  save('curve');  
  } else {
    value = 0;
  }
}
