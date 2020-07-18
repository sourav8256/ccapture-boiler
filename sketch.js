// Where is the circle
let x, y;

let gifLength = 180;
let canvas;

let images = [];

let sequence = [];

function setup() {
  var p5canvas = createCanvas(1440, 800);
  // Starts in the middle
  x = width / 2;
  y = height;

  canvas = p5canvas.canvas;

  frameRate(60);

  // capturer.start();
  // capturer.capture(canvas);




}


function preload(){



  images.push(loadImage('ninja/Glide_000.png'));
  images.push(loadImage('ninja/Glide_001.png'));
  images.push(loadImage('ninja/Glide_002.png'));
  images.push(loadImage('ninja/Glide_003.png'));
  images.push(loadImage('ninja/Glide_004.png'));
  images.push(loadImage('ninja/Glide_005.png'));
  images.push(loadImage('ninja/Glide_006.png'));
  images.push(loadImage('ninja/Glide_007.png'));
  images.push(loadImage('ninja/Glide_008.png'));
  images.push(loadImage('ninja/Glide_009.png'));

  images.push(loadImage('ninja/Run__000.png'));
  images.push(loadImage('ninja/Run__001.png'));
  images.push(loadImage('ninja/Run__002.png'));
  images.push(loadImage('ninja/Run__003.png'));
  images.push(loadImage('ninja/Run__004.png'));
  images.push(loadImage('ninja/Run__005.png'));
  images.push(loadImage('ninja/Run__006.png'));
  images.push(loadImage('ninja/Run__007.png'));
  images.push(loadImage('ninja/Run__008.png'));
  images.push(loadImage('ninja/Run__009.png'));




  images.push(loadImage('ninja/Slide__000.png'));
  images.push(loadImage('ninja/Slide__001.png'));
  images.push(loadImage('ninja/Slide__002.png'));
  images.push(loadImage('ninja/Slide__003.png'));
  images.push(loadImage('ninja/Slide__004.png'));
  images.push(loadImage('ninja/Slide__005.png'));
  images.push(loadImage('ninja/Slide__006.png'));
  images.push(loadImage('ninja/Slide__007.png'));
  images.push(loadImage('ninja/Slide__008.png'));
  images.push(loadImage('ninja/Slide__009.png'));






  images.push(loadImage('ninja/Jump_Attack__000.png'));
  images.push(loadImage('ninja/Jump_Attack__001.png'));
  images.push(loadImage('ninja/Jump_Attack__002.png'));
  images.push(loadImage('ninja/Jump_Attack__003.png'));
  images.push(loadImage('ninja/Jump_Attack__004.png'));
  images.push(loadImage('ninja/Jump_Attack__005.png'));
  images.push(loadImage('ninja/Jump_Attack__006.png'));
  images.push(loadImage('ninja/Jump_Attack__007.png'));
  images.push(loadImage('ninja/Jump_Attack__008.png'));
  images.push(loadImage('ninja/Jump_Attack__009.png'));




  for(var i = 0; i < 3;i++){
    sequence.push(0);
    sequence.push(1);
    sequence.push(2);
    sequence.push(3);
    sequence.push(4);
    sequence.push(5);
    sequence.push(6);
    sequence.push(7);
    sequence.push(8);
    sequence.push(9);
  }


  for(var i = 0; i < 3;i++){
    sequence.push(20);
    sequence.push(21);
    sequence.push(22);
    sequence.push(23);
    sequence.push(24);
    sequence.push(25);
    sequence.push(26);
    sequence.push(27);
    sequence.push(28);
    sequence.push(29);
  }

  for(var i = 0; i < 8;i++){
    sequence.push(10);
    sequence.push(11);
    sequence.push(12);
    sequence.push(13);
    sequence.push(14);
    sequence.push(15);
    sequence.push(16);
    sequence.push(17);
    sequence.push(18);
    sequence.push(19);
  }





  for(var i = 0; i < 4;i++){
    sequence.push(30);
    sequence.push(31);
    sequence.push(32);
    sequence.push(33);
    sequence.push(34);
    sequence.push(35);
    sequence.push(36);
    sequence.push(37);
    sequence.push(38);
    sequence.push(39);
  }




  console.log(sequence);

}

function draw() {
  
  console.log("log 2");
  

  background(200);



  
  var img = images[sequence[floor(frameCount / 2) % sequence.length]];
  
  image(img,400,180,img.width,img.height);

  console.log("draw called");

  // if(frameCount < gifLength){
  //   capturer.capture(canvas);
  // } else if(frameCount == gifLength){
  //   capturer.stop();
  //   capturer.save();
  // } 

}



