

var canvas = new fabric.Canvas('myCanvas');

block_image_width =30; 
block_image_height =30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "";
function player_update() {
 fabric.Image.fromURL("player.jpg",function(Img){
     player_object= Img;

     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({
         top:player_y,
         left:player_x
     });
     canvas.add(player_object);
 }); 
}


function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object= Img;
   
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    }); 
   }

   window.addEventListener("keydown",my_keydown);
   function my_keydown(e) {
     keyPressed = e.keyCode;
     console.log(keyPressed);  
     if (e.shiftKey == true && keyPressed =='80') {
     console.log("p and shift pressed together");
     block_image_height = block_image_height + 10;
     block_image_width = block_image_width + 10;
     document.getElementById("current_width").innerHTML = block_image_width;
     document.getElementById("current_height").innerHTML = block_image_height;
     }
     if (e.shiftKey && keyPressed =='77') {
        console.log("m and shift pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
       }
       if (keyPressed =='38') {
        up();
        console.log("up");
        }
        if (keyPressed =='40') {
        down();
        console.log("down");
            }
        if (keyPressed =='37') {
        left();
         console.log("left");
         }
         if (keyPressed =='39') {
            right();
            console.log("right");
            }
            if (keyPressed =='73') {
                new_image("ignitor.jpg");
                console.log("i");
                }
             if (keyPressed =='86') {
                 new_image("Voodood_Promo.jpg");
                console.log("v");
                }
                if (keyPressed =='87') {
                    new_image("War.jpg");
                    console.log("w");
                    }
                    if (keyPressed =='90') {
                        new_image("Zap.png");
                        console.log("z");
                        }
                        if (keyPressed =='65') {
                            new_image("ba.png");
                            console.log("a");
                            } 
                            if (keyPressed =='67') {
                                new_image("Chop_chop.png");
                                console.log("c");
                            }
                            if (keyPressed =='66') {
                                new_image("Boomer.jpg");
                                console.log("b");
                                }   
                                                if (keyPressed =='83') {
                                                    new_image("Stump_smash.png");
                                                    console.log("s");
                                                    }  

   }

   function up() {
    if (player_y>= 0) {
     player_y = player_y-block_image_height;
      console.log("block_image_height = " + block_image_height);
      console.log("When Up arrow key is pressed, X = "+ player_x +", Y ="+ player_y);
      canvas.remove(player_object);
      player_update();  
    }   
   }
   
   function down() {
    if (player_y <= 500) {
     player_y = player_y+block_image_height;
      console.log("block_image_height = " + block_image_height);
      console.log("When Down arrow key is pressed, X = "+ player_x +", Y ="+ player_y);
      canvas.remove(player_object);
      player_update();  
    }   
   }
   
   function left() {
    if (player_x> 0) {
     player_x = player_x- block_image_width;
      console.log("block_image_width = " + block_image_width);
      console.log("When Left arrow key is pressed, X = "+ player_x +", Y ="+ player_y);
      canvas.remove(player_object);
      player_update();  
    }   
   }
   
   function right() {
    if (player_x <= 850) {
     player_x = player_x +block_image_width;
      console.log("block_image_width = " + block_image_width);
      console.log("When Right arrow key is pressed, X = "+ player_x +", Y ="+ player_y);
      canvas.remove(player_object);
      player_update();  
    }   
   }
   function addUserF() {
     window.location = "giants.html"; 
   }
  

