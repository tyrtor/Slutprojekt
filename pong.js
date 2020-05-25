/* elementen som används */
var eCanvas = document.querySelector("canvas");

/* storleken på canvas */
eCanvas.width = 800;
eCanvas.height = 600;

/* öppna så att man kan rita */
var ctx = eCanvas.getContext("2d");

/* skapa en klass för bollen */
class Boll {
    constructor() {
        this.x = eCanvas.width / 2,
            this.y = eCanvas.height / 2,
            this.dy = 0,
            this.dx = 3,
            this.radie = 12

    }
    rita() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radie, 0, Math.PI * 2);
        ctx.fill();
    }
}
/* skapa variabel för classen */
var boll = new Boll();

/* skapa en class för bordet/bakgrunden */
class Bakgrund {
    constructor() {
        this.startX = eCanvas.width - 800,
            this.startY = eCanvas.height - 600,
            this.x = eCanvas.width / 2
    }
    rita() {
        /* skapa  ett svart bord */
        ctx.beginPath();
        ctx.rect(this.startX, this.startY, 800, 600, );
        ctx.fillStyle = "black";
        ctx.fill();

        /* skapa en mittplan/pingisnät */
        ctx.beginPath();
        ctx.rect(this.x, 5, 10, 590);
        ctx.fillStyle = "green";
        ctx.fill();

        /* skapa en vit ram */
        ctx.strokeStyle = "green";
        ctx.lineWidth = 10;
        ctx.strokeRect(this.startX + 1, this.startY + 1, 798, 598);
    }
}
/* skapa en variabel för classen */
var bakgrund = new Bakgrund();

/* skapa en class för racketen */
class Racketen {
    constructor() {
        /* variabler för det vänstra */
            this.vx = 10,
            this.vy = eCanvas.height / 2,
            this.vupp = false,
            this.vned = false,
            this.vhojd = 100,
            this.vbredd = 10

        /* variabler för det högra */
            this.hx = 780,
            this.hy = eCanvas.height / 2
            this.hupp = false,
            this.hned = false,
            this.hhojd = 100,
            this.hbredd = 10
    }
    rita() {
        /* skapa ett racket till vänstra sidan */
        ctx.beginPath();
        ctx.rect(this.vx, this.vy - 50, this.vbredd, this.vhojd);
        ctx.fillStyle = "white";
        ctx.fill();

        /* skapa ett racket till högra sidan */
        ctx.beginPath();
        ctx.rect(this.hx, this.hy - 50, this.hbredd, this.hhojd);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}
/* skapa en variabel för classen */
var racketen = new Racketen();

class Poäng{
    constructor(){
        this.h = 0,
        this.v = 0
    }
}

var poäng = new Poäng();

/* Spelloopen */
function gameLoop() {
    bakgrund.rita();
    racketen.rita();
    boll.rita();
    animate();
    kollision();

    rörselseBoll();

    requestAnimationFrame(gameLoop);

}

/* kör spelet */
gameLoop();

/* skapa en funktion för att få bollen att röra på sig */
function rörselseBoll() {
    boll.x += boll.dx;
    boll.y += boll.dy;
}

/* röra på racketen */
/* högra racketen */
window.addEventListener("keyup", function(e) {
    switch (e.key) {
        case "ArrowUp":
            racketen.hupp = false;
            break;
        case "ArrowDown":
            racketen.hned = false;
            break;
    }
})

window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowUp":
            racketen.hupp = true;
            console.log(e.key);
            break;
        case "ArrowDown":
            racketen.hned = true;
            console.log(e.key);
            break;
    }
})

/* vänstra racketen */
window.addEventListener("keyup", function (e) {
    switch (e.key) {
        case "w":
            racketen.vupp = false;
            break;
        case "s":
            racketen.vned = false;
            break;
    }
})

window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "w":
            racketen.vupp = true;
            console.log(e.key);
            break;
        case "s":
            racketen.vned = true;
            console.log(e.key);
            break;
    }
})


function animate() {

    if (boll.y <= 15) {
        boll.dy = -boll.dy
    }
    if (boll.y >= 590) {
        boll.dy = -boll.dy
    }
    if (racketen.hupp == true) {
        racketen.hy --;
    }
    if (racketen.hned == true) {
        racketen.hy ++;
    }
    if (racketen.vupp == true) {
        racketen.vy --;
    }
    if (racketen.vned == true) {
        racketen.vy ++;
    }
}



function kollision() {
    if ((racketen.hy <= boll.y) && (boll.y <= (racketen.hy+racketen.hhojd))) {
        if ((boll.x  + boll.radie) >= racketen.hx + racketen.hbredd) {
            boll.dx = -boll.dx;
            poäng.h ++;
            
        }
    }

    if ((racketen.vy <= boll.y) && (boll.y <= (racketen.vy+racketen.vhojd))) {
        if ((boll.x  - boll.radie) <= racketen.vx + racketen.vbredd) {
            boll.dx = -boll.dx;
            poäng.v ++;
            console.log(poäng.v);
            
        }
    }
}