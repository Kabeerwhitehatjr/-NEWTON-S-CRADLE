
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;

var ropeobject1;
var ropeobject2;
var ropeobject3;
var ropeobject4;
var ropeobject5;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new bob(200,700,150);
    bobObject2 = new bob(350,700,150);
    bobObject3 = new bob(500,700,150);
    bobObject4 = new bob(650,700,150);
    bobObject5 = new bob(800,700,150);

    roofObject = new roof(500,100,900,60);

    ropeobject1 = new rope(bobObject1.body,{x:100,y:40})
    //ropeobject2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2, 0)
    //ropeobject3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2, 0)
    //ropeobject4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2, 0)
    //ropeobject5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0)
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  ropeobject1.display();
 // ropeobject2.display();
 // ropeobject3.display();
 // ropeobject4.display();
 // ropeobject5.display();

  
  drawSprites();
 
}



