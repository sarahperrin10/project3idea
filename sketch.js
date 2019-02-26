
let guns;
let img;

let table;
let name;
let dead;
let x;
let y;


function preload(){
    table = loadTable ("data/shootingsdata.csv", "header");
    img = loadImage ('images/gun.gif')

}

function setup (){
    createCanvas(windowWidth, windowHeight);
    loadData();
}

function draw (){
   background (255, 0, 0);
   for (var i = 0; i<guns.length; i++){
        guns[i].display();
        guns[i].rollover(mouseX, mouseY);
   }
}

function loadData(){
   guns = [];

    for (var i=0; i < table.getRowCount(); i++){
        var row = table.getRow(i);  
        x = row.get("x");
        y = row.get ("y");
        name = row.get("name");
        dead = row.get ("dead");
        guns[i] = new Gun (x, y, name, dead);
    }
}

class Gun {
constructor(x, y, n, td) {
    this.x = Number(x);
    this.y = Number(y);
    this.w = img.width/3
    this.h = img.height/3
    this.name = n;
    this.dead = td;
    this.over = false;
    }

rollover (px, py){
    var d = dist (px, py, this.x, this.y);
    if (d < this.w/2){
        this.over = true;
    }
    else {
        this.over = false;
    }
}


display(){
   stroke(0);
   strokeWeight(1);
   image (img, this.x, this.y, this.w, this.h);
   if (this.over){
       textAlign(CENTER);
       textSize (50);
       fill (0, 40, 104)
       text (this.name, 600, 100);
       fill(255);
       text (this.dead, this.x+235, this.y+55);
   }
}
}

