import Player from "./Player.js";
import Player2 from "./Player2.js";

const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


let Arena= Math.floor(Math.random()*13);
canvas.style.backgroundImage=`url('GameAssets/Arenas/Arena${Arena+1}.gif')`;
let a=1;

let music=Math.floor(Math.random()*2);
const bgMusic= new Audio(`GameAssets/bgMusic/music${music+1}.mp3`);
// document.addEventListener("click",()=>{
  
// })

if(a==1){
bgMusic.play();
  bgMusic.volume=0.1;
}
function effects(b){
let effect= new Audio(b);
effect.play();
}
const player=new Player({
 imageSrc:"GameAssets/Players/HeroKnight/Sprites/Idle.png",
 framesMax:11,
 scale:5,
 offSet:{
  x:390,
  y:350,
 },
 sprites:{
  idle:{
    imageSrc:"GameAssets/Players/HeroKnight/Sprites/Idle.png",
    framesMax:11,
    // scale:5,
  },
  run:{
    imageSrc:"GameAssets/Players/HeroKnight/Sprites/Run.png",
    framesMax:8,
    // scale:5,
  },
  jump:{
    imageSrc:"GameAssets/Players/HeroKnight/Sprites/Jump.png",
    framesMax:3,
    // scale:5,
  },
  fall:{
    imageSrc:"GameAssets/Players/HeroKnight/Sprites/Fall.png",
    framesMax:3,
  },
  
  attack1:{
    imageSrc:`GameAssets/Players/HeroKnight/Sprites/Attack1.png`,
    framesMax:7,
  },
  attack2:{
    imageSrc:`GameAssets/Players/HeroKnight/Sprites/Attack2.png`,
    framesMax:7,
  },
  takeHit:{
    imageSrc:`GameAssets/Players/HeroKnight/Sprites/TakeHit.png`,
    framesMax:4,
  },
  death:{
    imageSrc:`GameAssets/Players/HeroKnight/Sprites/Death.png`,
    framesMax:11,
  },
 },
 attackBox:{
  offset:{
    x:0,
    y:0,
  },
  width:200,
  height:50,
 },
 ctx:ctx,
});
const player2=new Player2({
 imageSrc:"GameAssets/Players/MartialHero/Sprites/Idle.png",
 framesMax:8,
 scale:5,
 offSet:{
  x:390,
  y:390,
 },
 sprites:{
  idle:{
    imageSrc:"GameAssets/Players/MartialHero/Sprites/Idle.png",
    framesMax:8,
    // scale:5,
  },
  run:{
    imageSrc:"GameAssets/Players/MartialHero/Sprites/Run.png",
    framesMax:8,
    // scale:5,
  },
  jump:{
    imageSrc:"GameAssets/Players/MartialHero/Sprites/Jump.png",
    framesMax:2,
    // scale:5,
  },
  fall:{
    imageSrc:"GameAssets/Players/MartialHero/Sprites/Fall.png",
    framesMax:2,
  },
  
  attack1:{
    imageSrc:`GameAssets/Players/MartialHero/Sprites/Attack1.png`,
    framesMax:6,
  },
  attack2:{
    imageSrc:`GameAssets/Players/MartialHero/Sprites/Attack2.png`,
    framesMax:6,
  },
  takeHit:{
    imageSrc:`GameAssets/Players/MartialHero/Sprites/TakeHitWhite.png`,
    framesMax:4,
  },
  death:{
    imageSrc:`GameAssets/Players/MartialHero/Sprites/Death.png`,
    framesMax:6,
  },

 },
 attackBox:{
  offset:{
    x:0,
    y:0,
  },
  width:200,
  height:50,
 },
 ctx:ctx,
});



let keys={};
let lastKey1=""; //for P1
let lastKey2=""; //for p2
let winCount=0;
let winCount2=0;

const p1Win1= document.getElementById("p1Win1");
p1Win1.style.left=canvas.width/2.3;
p1Win1.style.top="100px";

const p1Win2= document.getElementById("p1Win2");
p1Win2.style.left=canvas.width/2.47;
p1Win2.style.top="100px";

const p2Win1= document.getElementById("p2Win1");
p2Win1.style.left=canvas.width/1.83;
p2Win1.style.top="100px";

const p2Win2= document.getElementById("p2Win2");
p2Win2.style.left=canvas.width/1.73;
p2Win2.style.top="100px";

document.addEventListener("keydown",(e)=>{
  keys[e.key]=true;

  //Player 1 controls
  if(["a","A","d","D","w","W","s","S"].includes(e.key)){
    lastKey1=e.key;
  }

  //Player 2 controls
  if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)){
    lastKey2=e.key;
  }
});

document.addEventListener("keyup",(e)=>{
  keys[e.key]=false;
});


function moving(){
  
  if(!player.dead){

  if(player.isAttacking){
    return};

  
    
  if((keys["a"]&&lastKey1=="a")||(keys["A"]&&lastKey1=="A")){
    player.moveLeft();
  
  } else if((keys["d"]&&lastKey1=="d")||(keys["D"]&&lastKey1=="D")){
    player.moveRight();

  }else{

    player.switchSprite("idle");
  }

  if((keys["w"]||keys["W"])&&!player.isAttacking){
    player.jump();
  }
  else if(player.mathi.y>0&&player.mathi.y<1.6){
    // player.framesMax=player.sprites.fall.framesMax
    // player.switchSprite('fall')
    // console.log("falling");
  }

}
  if(!player2.dead){

  if(player2.isAttacking){
    return};
  // PLAYER 2
  
  if (keys["ArrowLeft"]&&lastKey2=="ArrowLeft"){
    player2.moveLeft();
    
  }
  else if(keys["ArrowRight"]&&lastKey2=="ArrowRight"){
    player2.moveRight();
    
  }else{
    player2.switchSprite("idle");
  }

  if(keys["ArrowUp"]&&!player2.isAttacking){
    player2.jump();
    
  }
  else if(player2.mathi.y>0&&player2.mathi.y<1.6){
    // player2.framesMax=player2.sprites.fall.framesMax
    // player2.switchSprite('fall')
    // console.log(player2.mathi.y);
  }
}

}
let b=new Audio(`GameAssets/bgMusic/dead.mp3`);
const p1Health= document.getElementById("p1Health")
const p2Health= document.getElementById("p2Health");
const timer= document.getElementById("timer");
const whoWon=document.getElementById("whoWon");
let time=60;
let timerId;

let gameOver= false;
let resetTimeout=null;
function winnerwinner({player,player2,timerId}){
  if(gameOver) return;
  gameOver=true;
  clearTimeout(timerId)
if(player.health==player2.health)
  {
    whoWon.style.display="flex";
    whoWon.textContent="Tie"; 
    player.switchSprite("death");
    player2.switchSprite("death");
    canvas.style.backgroundImage=`url('GameAssets/Arenas/final1.jpg')`;
    b.play();

  }
  if(player.health>player2.health)
  {
    whoWon.style.display="flex";
    
    player2.switchSprite("death");
    canvas.style.backgroundImage=`url('GameAssets/Arenas/final1.jpg')`;
    b.play();
    // ko();
    if(winCount==0){
      p1Win1.style.backgroundColor="green";
      winCount++;
      console.log("p1"+winCount);
    }
    else if(winCount==1){
      p1Win2.style.backgroundColor="green";
      whoWon.textContent="Player1 Won";
      winCount++;
      console.log("p1"+winCount);
    }
  }
  if(player.health<player2.health)
  {
    whoWon.style.display="flex";
    
    player.switchSprite("death");
    canvas.style.backgroundImage=`url('GameAssets/Arenas/final1.jpg')`;
    // ko();
    b.play();
    if(winCount2==0){
      p2Win1.style.backgroundColor="green";
      winCount2++;
      console.log("p2"+winCount2);
    }
    else if(winCount2==1){
      p2Win2.style.backgroundColor="green";
      whoWon.textContent="Player2 Won";
      winCount2++;
      console.log("p2"+winCount2);
    }
  }
  if(resetTimeout){clearTimeout(resetTimeout)};
  resetTimeout=setTimeout(()=>{
    resetGame();
  },5000);
}
function decTime(){
  if(time>0){
    timerId=setTimeout(decTime,1000)
    time--;
    timer.textContent=time;
  }
  if(time==0){
    winnerwinner({player,player2,timerId});
    
  }
}
decTime();

function resetGame(){
  if(winCount==2||winCount2==2){
    winCount=0;
    winCount2=0;
    whoWon.style.display="none";
    whoWon.textContent= "";

    p1Win1.style.backgroundColor="grey";
    p1Win2.style.backgroundColor="grey";
    p2Win1.style.backgroundColor="grey";
    p2Win2.style.backgroundColor="grey";
  }
  if(resetTimeout){
    clearTimeout(resetTimeout);
    resetTimeout=null;
  }
  gameOver=false;
  time=60;
  timer.textContent=time;
  whoWon.style.display="none";
  
  
//reset bg
  Arena = Math.floor(Math.random()*13);
  canvas.style.backgroundImage = `url('GameAssets/Arenas/Arena${Arena+1}.gif')`;

//reset music
  bgMusic.pause();
  bgMusic.currentTime = 0;
  bgMusic.play();

//reset player1
player.health=100;
player.dead=false;
player.isAttacking=false;
player.framesCurrent=0;
player.framesElapsed=0;
player.image=player.sprites.idle.image;
player.framesMax=player.sprites.idle.framesMax;
player.position.x=200;
player.position.y=0;
player.staminaBar=200;
//reset player2
player2.health=100;
player2.dead=false;
player2.isAttacking=false;
player2.framesCurrent=0;
player2.framesElapsed=0;
player2.image=player2.sprites.idle.image;
player2.framesMax=player2.sprites.idle.framesMax;
player2.position.x=window.innerWidth - 400;
player2.position.y=0;
player2.staminaBar=200;



// players reset health UI
  p1Health.style.width = "100%";
  p1Health.style.backgroundColor="rgb(35, 116, 35)";
  p2Health.style.width = "100%";
  p2Health.style.backgroundColor="rgb(35, 116, 35)";

  //restart timer
  clearTimeout(timerId);
  decTime();
  
}


function gameLoop(){
  requestAnimationFrame(gameLoop);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  moving();
  player.update();
  player2.update();
  if(player.dead||player2.dead){
    bgMusic.pause();
    // canvas.style.backgroundImage=`url('GameAssets/Arenas/final1.jpg')`;
    
  }
  if((player.position.x>player2.position.x)&&!player.dead){
    player.drawRev();
  }
  else{
    player.draw();
  }
  if((player2.position.x<player.position.x)&&!player2.dead){
    player2.drawRev();
  }
  else{
    player2.draw();
  }
  
  if(
  player.attackBox.x<player2.position.x+player2.size.width&&
  player.attackBox.x+player.attackBox.width> player2.position.x &&
  player.attackBox.y<player2.position.y + player2.size.height &&
  player.attackBox.y+player.attackBox.height > player2.position.y&&player.isAttacking && player.framesCurrent===3
  ) 
  {
    let a= Math.floor(Math.random()*4);
    let b=`GameAssets/SwordClink/swing${a+1}.ogg`
    player.isAttacking=false;
  effects(b)
  player2.takeHit();
  p2Health.style.width=player2.health+"%";
  if(player2.health<=20){
  p2Health.style.backgroundColor="red";
}
  if(player2.health<=0){
 winnerwinner({player,player2,timerId})
 canvas.style.backgroundImage=`url('GameAssets/Arenas/final1.jpg')`;
//  ko();
 player2.staminaBar=0;
//  player2.switchSprite("death");
 player2.stamina(); 
}
  }


if(
player2.attackBox.x>player.position.x&&
player2.attackBox.x+player2.attackBox.width<player.position.x+player.size.width&&
player2.attackBox.y<player.position.y+player.size.height&&
player2.attackBox.y+player.attackBox.height>player.position.y&&player2.isAttacking && player2.framesCurrent===3
) 
{
  let a= Math.floor(Math.random()*4);
  let b=  `GameAssets/SwordClink/swing${a+1}.ogg`
  effects(b)
player2.isAttacking=false;
player.takeHit();
p1Health.style.width=player.health+"%";
if(player.health<=20){
  p1Health.style.backgroundColor="red";
}
if(player.health<=0){
  winnerwinner({player,player2,timerId});
  canvas.style.backgroundImage=`url('GameAssets/Arenas/final1.jpg')`;
  // ko();
  player.staminaBar=0;
  // player.switchSprite("death");
  
  player2.stamina();
  // console.log(player2.health);
}
}


if(player.health<=0){
  player.switchSprite("death");
}
if(player2.health<=0){
  player2.switchSprite("death");
}

}

gameLoop();


document.addEventListener("keyup",(event)=>{
    if (!gameOver && (event.key=="s"||event.key=="S") && player.staminaBar>0)
    {
        player.attack();
        let staminaInterval1;
if (player.staminaBar==0){
  staminaInterval1=setInterval(()=>{
    player.staminaBar+=40;
    if (player.staminaBar>=200){
      player.staminaBar=200;
      clearInterval(staminaInterval1);
    }
  },500);
}
    }
    if(!gameOver&&(event.key=="ArrowDown")&&player2.staminaBar>0)
    {
      player2.attack();
      let staminaInterval;
if (player2.staminaBar==0){
  staminaInterval=setInterval(()=>{
    player2.staminaBar+=40;
    if (player2.staminaBar>=200){
      player2.staminaBar=200;
      clearInterval(staminaInterval);
    }
  },500);
}
    }
})





// document.addEventListener("keydown",(e)=>{
//   if((e.key=="r"||e.key=="R")&&gameOver){
//     resetGame();
//   }
// });
