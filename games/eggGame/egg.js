class Egg {
  constructor(ctx) {
    
    this.ctx = ctx;
    this.position = {
      x:60,
      y:60,
    };

    this.size = {
      width:50,
      height:50,
    };

    this.color = "black";
    this.speed = 1;
    this.direction = {
    x:1,
    y:1,
    }

    this.image= new Image();
    this.image.src="egg.png";
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
  }
  
  update(){
    this.position.y=this.position.y+this.speed*this.direction.y; 
  }
  playMusic(){
          let  audio=new Audio("plsSpeed.mp3");
          audio.play()
        }
}
export default Egg;

