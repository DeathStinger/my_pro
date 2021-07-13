

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
            if (keyPressed =='78') {
                new_image("Night_Shift.jpg");
                console.log("n");
                }
             if (keyPressed =='66') {
                 new_image("Boom_Jet.jpg");
                console.log("b");
                }
                if (keyPressed =='83') {
                    new_image("Stink_bomb.png");
                    console.log("s");
                    }
                    if (keyPressed =='70') {
                        new_image("Freeze_blade.png");
                        console.log("f");
                        }
                        if (keyPressed =='84') {
                            new_image("Trap_Shadow.png");
                            console.log("t");
                            } 
                            if (keyPressed =='75') {
                                new_image("Fire_kraken.png");
                                console.log("k");
                            }
                            if (keyPressed =='82') {
                                new_image("Rubble.png");
                                console.log("r");
                                }   
                             
                   
                                                if (keyPressed =='90') {
                                                    new_image("Mags.jpg");
                                                    console.log("z");
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
    window.location = "Trap_team.html"; 
  }
  function addUserB() {
    window.location = "giants.html" ; 
  }


