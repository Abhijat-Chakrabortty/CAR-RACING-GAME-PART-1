canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

Car1_width = 120;
Car1_height = 70;
Car1_image = "Car_1.png";
Car1_x = 10;
Car1_y = 10;

Car2_width = 120;
Car2_height = 70;
Car2_image = "Car_2.png";
Car2_x = 10;
Car2_y = 100;

background_image = "canvas.jpg";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_image;

    Car1_imgTag=new Image();
    Car1_imgTag.onload= uploadCar1;
    Car1_imgTag.src=Car1_image;

    Car2_imgTag=new Image();
    Car2_imgTag.onload= uploadCar2;
    Car2_imgTag.src=Car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(Car1_imgTag,Car1_x,Car1_y,Car1_width,Car1_height);
}

function uploadCar2(){
    ctx.drawImage(Car2_imgTag,Car2_x,Car2_y,Car2_width,Car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        Car1_up();
        console.log("up arrow key");
    }

    if(keyPressed=="40"){
        Car1_down();
        console.log("down arrow key");
    }
    
    if(keyPressed=="37"){
        Car1_left();
        console.log("left arrow key");
    }

    if(keyPressed=="39"){
        Car1_right();
        console.log("right arrow key");
    }

    if(keyPressed=="87"){
        Car2_up();
        console.log("key w");
    }
    
    if(keyPressed=="83"){
        Car2_down();
        console.log("key s");
    }

    if(keyPressed=="65"){
        Car2_left();
        console.log("key a");
    }

    if(keyPressed=="68"){
        Car2_right();
        console.log("key d");
    }
    
}