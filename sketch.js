const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1,block2,block3,block4,block5,block6,polygon
var block10,sling
var ground,ground1 
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygon=new Polygon(300,200)
    
    sling= new Slingshot(polygon.body,{x:300,y:200})

    block1=new Block(930,125)
    block2=new Block(960,125)
    block3=new Block(990,125)
    block4=new Block(1020,125)
    block5=new Block(1050,125)
    
    block6=new Block(960,110)
    block7=new Block(990,110)
    block8=new Block(1020,110)
    block9=new Block(990,80)
    
    ground=new Ground(990,180,250,10)

    ground1= new Ground(530,292,250,10)

    block10= new Block(440,263)
    block11= new Block(470,263)
    block12= new Block(500,263)
    block13= new Block(530,263)
    block14= new Block(560,263)
    block15= new Block(590,263)
    block16= new Block(620,263)

    block17=new Block(470,223);
    block18=new Block(500,223);
    block19= new Block(530,223);
    block20=new Block(560,223);
    block21=new Block(590,223);

    block22= new Block(500,93)
    block23= new Block(530,93)
    block24= new Block(560,93)

    block25= new Block(530,63)

}

function draw(){
    background("black")
   
    
    text(mouseX+","+mouseY,mouseX,mouseY)
    fill("blue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block10.display();
    block11.display();
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display();
    fill("#1be6c4")
    block17.display()
    block18.display()
    block19.display()
    block20.display();
    block21.display()
    fill("lightblue")
    block6.display();
    block7.display();
    block8.display();
    block22.display()
    block23.display()
    block24.display()
    fill("white")
    block9.display();
    block25.display()
    fill("white")
    ground1.display();
    ground.display()
    polygon.display()
    sling.display()
    Engine.update(engine)
    text(mouseX+","+mouseY,mouseX,mouseY)
    drawSprites()
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    //Booyah
    sling.fly()
}

function keyPressed(){
    if(keyCode==32){
        sling.attach(polygon.body)
    }
}
