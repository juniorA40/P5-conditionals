var x = 0; 
var speed = 3;

function setup(){
    createCanvas(750,400);
}

function draw(){
    background(50);
    
    if(mouseIsPressed){
        if(mouseX<100){
            background(255,0,0);
        }
        else if(mouseX<200){
            background(255,100,0);
        }
        else if(mouseX<300){
            background(255,255,0);
        }
        else if(mouseX<400){
            background(73,255,51);
        }
        else if(mouseX<500){
            background(51,255,243);
        }
        else if(mouseX<600){
            background(51,125,255);
        }
        else if(mouseX<700){
            background(236,51,255);
        }
        else if(mouseX<800){
            background(255,51,150);
        }
    }
    
    stroke(255);
    strokeWeight(6);
    noFill();
    
    if(mouseY<150){
        fill(0,255,0);
    }
    else{
        noFill();
    }
    
    
    ellipse(x,200,200,200);
    
    
    if(x>width || x < 0){
        console.log("Circle is MIA")
        speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
}



 
