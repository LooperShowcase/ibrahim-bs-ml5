let player;
let bgImg;
let playerImg;
let obsImg;
let obstacles=[];
let wordClassifier;

function preload(){
  bgImg = loadImage("backgroung.jpg")
  playerImg = loadImage("player.png")
  obsImg = loadImage("obstacle.png")

  let  options = { probabilityThreshold: 0.85, };
  wordClassifier = ml5.soundClassifier('SpeechCommands18w', options)
} 


function setup() {
  createCanvas(1400, 610);
  player = new Player();
  wordClassifier.classify(heardWord)

}
function heardWord(error,results){
  console.log(results[0].label)
  if (results[0].label == "up"){
    player.jump();
  }
}


function draw() {
  background(bgImg);
  
  if (random(1)< 0.009){
    obstacles.push(new Obstacle())
  }

  for (let obs of obstacles){
    obs.show();
    obs.move();
    if(player.collided(obs)===true){
      console.log("Game Over!")
      noLoop();
    }
  }

  player.show();
  player.move();
}

function keyPressed(){
  if(key === " "){
    player.jump() 
  }
}