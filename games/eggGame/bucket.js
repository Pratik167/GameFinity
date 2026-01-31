class Bucket{
  constructor(ctx,canvas){
    this.ctx=ctx;
    this.canvas=canvas;
    this.position={
      x: 450,
      y: 440,
    };
    this.size={
      width:60,
      height:60,
    };
    this.speed=20;

    this.image= new Image();
    this.image.src="bucket.png";
  }

 draw(){
    this.ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
      );
    
  }

  moveLeft(){
    this.position.x-=this.speed;
    if(this.position.x<0)
    { 
        this.position.x =0;
    }
    
  }

  moveRight(){
    this.position.x+=this.speed;
    if(this.position.x>940)
    {
      this.position.x=940;
    }
  }
}

export default Bucket;
