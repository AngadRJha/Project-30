class Block{
    constructor(x,y){
        var options = {
            
            
        }     
        this.visibility=255
        this.height=40;
        this.width=30;
        this.x=x
        this.y=y
        this.body= Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    
    if(this.body.speed <8){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      else
      {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
      }
}

}