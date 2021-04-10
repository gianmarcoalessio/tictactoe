var gioco;
var isComputer=false;
var o = {
    CW: 0,
    CH: 0,
}

function init() {
    o.CW = windowWidth;
    o.CH = windowHeight;
    o.size = o.CW / N;
    o.ox = (o.CW - o.size*sqrt(N)) / 2
    o.oy = (o.CH - o.size*sqrt(N)) / 2

    if (o.CH / (N-1) < o.size) {
        o.size = o.CH / (N-1)
    }
    
}
function windowResized() {
    init();
    resizeCanvas(o.CW, o.CH)
}
function setup(){
    init();
    createCanvas(o.CW, o.CH).parent("canvas");
    gioco = new Gioco();
}
function draw(){
    background("whitesmoke");
    gioco.draw();
}
function preload(){
    o.sprite = loadImage("./img/sprites.png", (img) => {
        o.spritex = img.width/25;
        o.spritey = img.height/16;
    })
}
function mousePressed(){
    if (isComputer) return;
    var i = gioco.getcella(mouseX, mouseY);
    if (i >= 0) {
        gioco.move(i);
        gioco.xx = !gioco.xx
    }
}
function keyPressed() {
    if (isComputer) return;
    switch (key) {
        case "r":
            gioco.reset();
            break;
        case "u":
            gioco.undo();
            break;
    }
}