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
        this.dy = 1,
        this.dx = 1,
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
    constructor(){
        this.startX = eCanvas.width - 800,
        this.startY = eCanvas.height - 600,
        this.x = eCanvas.width / 2
    }
    rita() {
        /* skapa  ett svart bord */
        ctx.beginPath();
        ctx.rect(this.startX, this.startY, 800, 600,);
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
        this.vned = false

        /* variabler för det högra */
        this.hx = 780,
        this.hy = eCanvas.height / 2
        this.hupp = false,
        this.hned = false
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
/* skapa en variabel för classen */
var racketen = new Racketen();

/* Spelloopen */
function gameLoop() {
    bakgrund.rita();
    racketen.rita();
    boll.rita();

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
window.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "ArrowUp":
            racketen.hupp = true;
            console.log(e.key);
            break;
        case "ArrowDown":
            racketen.hned = true;
            console.log(e.key);
            break;
        case "87":
            racketen.vupp = true;
            console.log(e.key);
            break;
        case "83":
            racketen.vned = true;
            console.log(e.key);
            break;
    }
})


function animate() {
    if (racketen.hned) {
        racketen.hy += 3;
    }
}
