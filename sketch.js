const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){




    Engine.update(engine);


}

async function getBackgroundImg(){

    //  code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");


    //change the data in JSON format
    var responsejson = await response.json();
    console.log(responsejson.datetime);
    var dt = responsejson.datetime

    // write code slice the datetime
    var hr =dt.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hr>=04 &&hr<=06){
        bg = "sunrise1.png"
    }
    else if (hr >=06 && hr<=08){
        bg = "sunrise2.png"

    }
    else if (hr >=23 && hr==0){
        bg = "sunset10.png"

    }
    else if(hr==0&& hr<=03){
        bg = "sunset11.png"

    }
    else {
        bg = "sunset12.png"

    }
    
     
  
   
    
    
  

    //load the image in backgroundImg variable here
    if(hr=06 ){
        backgroundImg = loadImage(bg);
     
    }
}


