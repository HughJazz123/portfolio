var s;
var scl = 20;
var food;
var score = 0;
var display_hidden_text = false;

function near_round(n,scale){
    // Smaller multiple
    let a = parseInt(n / scale, 10) * scl;

    // Larger multiple
    let b = a + scale;

    return (n - a > b - n)? b : a;
}

function windowResized() {
    resizeCanvas(near_round(windowWidth,scl), near_round(windowHeight,scl)-scl);
    s = new Snake();
    pickLocation();
    score = 0;
}

function setup(){
    createCanvas(near_round(windowWidth,scl), near_round(windowHeight,scl)-scl);
    document.body.style.overflow = "hidden";
    s = new Snake();
    frameRate(10);
    pickLocation();
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
    fill(250,250,250);
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
    text(`Score: ${score}`, 10, height-50);
    s.death();
    s.update();
    s.show();
    if (s.eat(food)){
        pickLocation();
        score += 1000;
        if (score == 10000){
            display_hidden_text = true;
        }
    }
    fill(255, 0,100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed(){
    if (keyCode == UP_ARROW){
        s.dir(0,-1);
    } else if (keyCode == DOWN_ARROW){
        s.dir(0,1);
    } else if (keyCode == RIGHT_ARROW){
        s.dir(1,0);
    } else if (keyCode == LEFT_ARROW){
        s.dir(-1,0);
    }
}