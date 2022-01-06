var s;
var scl = 20;
var food;
var score = 0;
var best = 0;
var display_hidden_text = false;
var display_instructions = true;
var current_dir = 'right';

console.log("Hi! If you want to see the source code, it's on my github here: https://github.com/liyunze-coding/portfolio")

function near_round(n,scale){
    // Smaller multiple
    let a = parseInt(n / scale, 10) * scl;
    return a;
}

function windowResized() {
    resizeCanvas(near_round(windowWidth,scl), near_round(windowHeight,scl)-scl*5);
    s = new Snake();
    pickLocation();
    score = 0;
    up_button.size(60,60);
    up_button.position(width-120, height-85);

    left_button.size(60,60);
    left_button.position(width-190, height-45);

    right_button.size(60,60);
    right_button.position(width-50, height-45);

    down_button.size(60,60);
    down_button.position(width-120, height-10);
}

function setup(){
    createCanvas(near_round(windowWidth,scl)-scl, near_round(windowHeight,scl)-scl*5);
    document.body.style.overflow = "hidden";
    s = new Snake();
    frameRate(10);
    pickLocation();

    up_button = createButton(`↑`);
    up_button.size(60,60);
    up_button.position(width-120, height-85);

    left_button = createButton(`←`);
    left_button.size(60,60);
    left_button.position(width-190, height-45);

    right_button = createButton(`→`);
    right_button.size(60,60);
    right_button.position(width-50, height-45);

    down_button = createButton(`↓`);
    down_button.size(60,60);
    down_button.position(width-120, height-10);
}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food_x = floor(random(cols-2))+1;
    food_y = floor(random(rows-2))+1;
    food = createVector(food_x, food_y);
    food.mult(scl);
}

function draw(){
    background(25);
    fill(230,230,230);
    textFont('montserrat-bold');
    textAlign(CENTER);
    textSize(50);
    text('Hey! I am Ryan.\nThis is my portfolio website!', width/2, height/2-50);
    textSize(20);
    text('Enjoy this snake game to keep yourself entertained :D', width/2, height/2+50);

    if(display_hidden_text){
        textSize(15);
        text('Glad you\'re having fun with the snake game!', width/2, height/2+80);
    }

    textAlign(LEFT);
    textSize(20);
    if (best < score) best = score;
    text(`Score: ${score}   Best: ${best}`, 10, height-10);

    s.death();
    s.update();
    s.show();

    up_button.mousePressed(()=>{
        if (current_dir !== 'down'){
            moveUp()
        }
    });
    left_button.mousePressed(()=>{
        if (current_dir !== 'right'){
            moveLeft()
        }
    });
    right_button.mousePressed(()=>{
        if (current_dir !== 'left'){
            moveRight()
        }
    });
    down_button.mousePressed(()=>{
        if (current_dir !== 'up'){
            moveDown()
        }
    });

    if (s.eat(food)){
        pickLocation();
        score += 1000;
        if (score === 10000){
            display_hidden_text = true;
        }
    }
    fill(255, 0,100);
    rect(food.x, food.y, scl, scl);
}

function moveUp(){
    s.dir(0,-1);
    current_dir = 'up';
    return false;
}

function moveDown(){
    s.dir(0,1);
    current_dir = 'down';
}

function moveRight(){
    s.dir(1,0);
    current_dir = 'right';
}

function moveLeft(){
    s.dir(-1,0);
    current_dir = 'left';
}

function keyPressed(){
    if (keyCode === UP_ARROW && current_dir !== 'down'){
        moveUp();
    } else if (keyCode === DOWN_ARROW && current_dir !== 'up'){
        moveDown();
    } else if (keyCode === RIGHT_ARROW && current_dir !== 'left'){
        moveRight();
    } else if (keyCode === LEFT_ARROW && current_dir !== 'right'){
        moveLeft();
    }
}
function keyTyped(){
    if (key === 'w' && current_dir !== 'down'){
        moveUp()
    } else if (key === 's' && current_dir !== 'up'){
        moveDown();
    } else if (key === 'd' && current_dir !== 'left'){
        moveRight();
    } else if (key === 'a' && current_dir !== 'right'){
        moveLeft();
    }
}