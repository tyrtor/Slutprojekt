/* elementen som används */
var eCanvas = document.querySelector("canvas");

/* storleken på canvas */
eCanvas.width = 800;
eCanvas.height = 600;

/* öppna så att man kan rita */
var ctx = eCanvas.getContext("2d");

/* skapa en klass för bollen */
class Boll {
    constructor(){
        this.x = eCanvas.width / 2,
        this.y = eCanvas.height / 2,
        this.dy = 0,
        this.dx = 0
    }
    rita() {
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
/* skapa variabel för classen */
var boll = new Boll();

/* skapa en class för bordet/bakgrunden */
class Bakgrund {
    constructor(){
        this.startX = eCanvas.width - 800,
        this.startY = eCanvas.height - 600
    }
    rita() {
        /* skapa  ett svart bord */
        ctx.beginPath();
        ctx.rect(this.startX, this.startY, 800, 600,);
        ctx.fillStyle = "black";
        ctx.fill();

        /* skapa en mittplan/pingisnät */
        ctx.beginPath();
        ctx.rect(boll.x, 5, 10, 590);
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
        this.vy = eCanvas.height / 2

        /* variabler för det högra */
        this.hx = 780,
        this.hy = eCanvas.height / 2
    }
    rita() {
        /* skapa ett racket till vänstra sidan */
        ctx.beginPath();
        ctx.rect(this.vx, this.vy - 50, 10, 100);
        ctx.fillStyle = "white";
        ctx.fill();

        /* skapa ett racket till högra sidan */
        ctx.beginPath();
        ctx.rect(this.hx, this.hy - 50, 10, 100);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

var racketen = new Racketen();

/* Spelloopen */
function gameLoop() {
    boll.rita();
    bakgrund.rita();
    racketen.rita();

    requestAnimationFrame(gameLoop);

}

/* kör spelet */
gameLoop();
