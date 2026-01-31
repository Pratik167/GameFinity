import Egg from "./egg.js";
import Bucket from "./bucket.js";


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const score= document.getElementById("score");
const life=document.getElementById("life");
const eggSpeed=document.getElementById("eggSpeed");
const bucketSpeed=document.getElementById("bucketSpeed");
const bucket = new Bucket(ctx,canvas);
const egg=new Egg(ctx);

let count=0;
score.textContent="Score:"+count;
let lives=5;
life.textContent="Lives:"+lives;

eggSpeed.textContent="EggSpeed:"+egg.speed;
bucketSpeed.textContent="Speed:"+bucket.speed;

function eggLoop(){
    requestAnimationFrame(eggLoop);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    egg.update();
    if(egg.position.y+egg.size.height>=500)
    {
      lives--;
      life.textContent="Lives:"+lives;
      if(lives==0)
      {
        count=0;
        lives=5;
        life.textContent="Lives:"+lives;
        egg.speed=1;
        bucket.speed=20;
        bucketSpeed.textContent="Speed:"+bucket.speed;
        score.textContent="Score:"+count;
      }
      egg.playMusic();
      egg.position.y=0;
      egg.position.x=10+Math.floor(Math.random()*970);
      egg.update();
      
    }
    
    if((egg.position.y+egg.size.height)>=bucket.position.y&&
    (egg.position.y)<bucket.position.y&&
    (egg.position.x+egg.size.width)>=bucket.position.x+30&&
    (egg.position.x+egg.size.width)<=bucket.position.x+bucket.size.width+10)
    {
      playMusic();
      egg.position.y=0;
      egg.position.x=10+Math.floor(Math.random()*960);
      egg.update();
      count++;
      score.textContent="Score:"+count;
      if(count%5==0)
      {
        egg.speed+=0.5;
        eggSpeed.textContent="EggSpeed:"+egg.speed;
        bucket.speed+=5;
        bucketSpeed.textContent="Speed:"+bucket.speed;
      }
    }
    egg.draw();
    bucket.draw();
}
eggLoop();


document.addEventListener("keydown",(event)=>{
  if(event.key=="a"||event.key=="A"||event.key=="ArrowLeft")
    {
      bucket.moveLeft();
    } 
  if (event.key=="d"||event.key=="D"||event.key=="ArrowRight") 
    {
      bucket.moveRight();
    }
  if(event.key=="i")
  {
    egg.speed+=1;
  }
});


function playMusic(){
  let  audio=new Audio("1.mp3");
  audio.play()
}