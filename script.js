// Sound 

let audio = document.getElementById('music-load')
let playPauseButton = document.getElementById('sound-button')
let playcount = 0

function playPause(){
    if(playcount == 0){
        playcount = 1;
        audio.play();
        playPauseButton.innerHTML = "Pause"
    } else {
        playcount = 0;
        audio.pause();
        playPauseButton.innerHTML = "Play &#9658"
    }
}

// splash 

const startSound = document.createElement('audio');
startSound.src = "./src/startsound.mp3"

function startStoryMode(){
        let splash = document.getElementById('splashScreen');
        let storyScene0 = document.getElementById('story0');
        
        if(splash.style.display === 'block'){
            splash.style.display = 'none'
            storyScene0.style.display = 'block'
        } 
}


// story mode 

let storyScene0 = document.getElementById('story0')
let storyScene1 = document.getElementById('story1')
let storyScene2 = document.getElementById('story2')
let storyScene3 = document.getElementById('story3')
let storyScene4 = document.getElementById('story4')
let storyScene5 = document.getElementById('story5')
let storyScene6 = document.getElementById('loading')

function changeStory0(){
     if(storyScene0.style.display === 'block'){
            storyScene0.style.display = 'none'
            storyScene1.style.display = 'block'
        } 
}

function changeStory1(){
     if(storyScene1.style.display === 'block'){
            storyScene1.style.display = 'none'
            storyScene2.style.display = 'block'
        } 
}
function changeStory2(){
     if(storyScene2.style.display === 'block'){
            storyScene2.style.display = 'none'
            storyScene3.style.display = 'block'
        } 
}
function changeStory3(){
     if(storyScene3.style.display === 'block'){
            storyScene3.style.display = 'none'
            storyScene4.style.display = 'block'
        } 
}
function changeStory4(){
     if(storyScene4.style.display === 'block'){
            storyScene4.style.display = 'none'
            storyScene5.style.display = 'block'
        } 
}
function changeStory5(){
     if(storyScene5.style.display === 'block'){
            storyScene5.style.display = 'none'
            storyScene6.style.display = 'block'
        } 
}
function changeStory6(){
    let thegame = document.getElementById('myCanvas');

     if(storyScene6.style.display === 'block'){
            storyScene6.style.display = 'none'
            thegame.style.display = 'block'
            canvasPos = canvas.getBoundingClientRect();
        } 
    pickedStory = true;
    togglePause();
    mainMusic.play();
    
}

// start survival
let splash = document.getElementById('splashScreen');
let thegame = document.getElementById('myCanvas');

function startSurvivalMode(){
    let thegame = document.getElementById('myCanvas');

        if(splash.style.display === 'block'){
            startSound.play();
            splash.style.display = 'none'
            thegame.style.display = 'block'
            canvasPos = canvas.getBoundingClientRect();
        } 
        togglePause();
        mainMusic.play();
}

// sound 
let mainMusic = new Audio();
mainMusic.src = "./src/Scott Pilgrim's Fairy Fountain.mp3";
mainMusic.loop = true;
mainMusic.volume = 0.75;

let bossBattleMusic = new Audio();
bossBattleMusic.src = './src/A Slave To No One MP3.mp3';
bossBattleMusic.loop = true;
bossBattleMusic.volume = 0.1;

let taunt = new Audio();
taunt.src = './src/Meatshield/Archer_Taunt_001.wav'
taunt.volume = 1;

let hurt1 = new Audio();
hurt1.src = './src/Meatshield/Pikeman_Bomb_002.wav'


let herovoice1  = new Audio();
herovoice1.src = './src/Meatshield/Archer_Kill_002.wav'
herovoice1.volume = 1;
let herovoice2 = new Audio();
herovoice2.src = './src/Meatshield/Crossbowman_Attack_001.wav'
herovoice2.volume = 1;
let herovoice3 = new Audio();
herovoice3.src = './src/Meatshield/Hero_Kill_001.wav'
herovoice3.volume = 1;


let villianVoice1 = new Audio();
villianVoice1.src = "./src/ghostbreath.flac"
villianVoice1.volume = 1;
let villianVoice2 = new Audio();
villianVoice2.src = "./src/evil cyber laugh.wav"
villianVoice2.volume = 1;
let villianVoice3 = new Audio();
villianVoice3.src = "./src/bossvoice/demon-go (mp3cut.net).mp3"
villianVoice3.volume = 1;
// canvas

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1300;
canvas.height = 800;
let pickedStory = false;

let points = 0;
let gframes = 0;
this.life = 3;
let speed = 500;
let flyspeed = 700;
let bombspeed = 150;
ctx.font = "50px Georgia" 


// mouse interaction 
let canvasPos = canvas.getBoundingClientRect();
console.log(canvasPos)
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}

canvas.addEventListener('mousedown', function(event){
    mouse.click = true;
    mouse.x = event.x - canvasPos.left;
    mouse.y = event.y - canvasPos.top;
    // console.log(mouse.x, mouse.y);
})

canvas.addEventListener('mouseup', function(){
    mouse.click = false;
})


//Duck 
const duckLeft = new Image();
duckLeft.src = './src/duckleft/duckrun.png';
const duckRight = new Image();
duckRight.src = './src/duckvert.png';


class Player{
    constructor() {
       this.x = canvas.width / 2;
       this.y = canvas.height / 2;
       this.radius = 40; 
       this.angle = 0;
       this.spriteWidth = 270;
       this.spriteHeight = 270;
       this.frameX = 0;
       this.frameY = 0;
       this.frame = 0;
       this.projectiles = [];
     

       this.canShoot = true;
       this.ctx = ctx
    }

    shootProjectile(){
        if(this.canShoot && this.projectiles.length < 10){
            let projectile = new FireBall(this.x,this.y)
            this.projectiles.push(projectile)
        }
    }

    update(){
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        let theta = Math.atan2(dy,dx);
        this.angle = theta;

        if(mouse.x != this.x){
            this.x -= dx/20;
        }
        if(mouse.y != this.y){
            this.y -= dy/20;
        }
    }

    draw(){
        if(mouse.click === true) {
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke()
        }
        // ctx.fillStyle = '#04a46c';
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();

        ctx.save()
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle);
        if(this.x >= mouse.x){
            ctx.drawImage(duckLeft, 0, 0,this.spriteHeight, this.spriteWidth, 0 - 60, 0 - 70, this.spriteWidth/1.9, this.spriteHeight/1.9)
        } else {
            ctx.drawImage(duckRight, 0, 0,this.spriteHeight, this.spriteWidth, 0 - 70, 0 - 70, this.spriteWidth/1.9, this.spriteHeight/1.9)
        }
        ctx.restore()
        for (let i = 0; i < this.projectiles.length; i++) {
            this.projectiles[i].update(this.ctx)      
        }
    }
}

const duckquack = document.createElement('audio');
duckquack.src = "./src/toyducksound-[AudioTrimmer.com].mp3"


const player = new Player();

// Lifes 
const fullHeart = new Image();
fullHeart.src = './src/extralife1.png'
const emptyHeart = new Image();
emptyHeart.src = './src/0-percent.png'

let lifebar = []

class Life {
    constructor(){
        this.x = 800;
        this.y = 50;
        this.radius = 60;
    }

    draw(){
        ctx.fillStyle = '#04a46c';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
        
       for (let i = 0; i <= life; i++) {
           
           ctx.drawImage(fullHeart, this.x - 75 , this.y - 70, this.radius * 2.5,this.radius * 2.5)
           this.x += 50
       }
        // heartimg = ctx.drawImage(fullHeart, this.x - 37, this.y - 40, this.radius * 2.5,this.radius * 2.5)
        // ctx.drawImage(fullHeart, this.x - 75 , this.y - 70, this.radius * 2.5,this.radius * 2.5)
    }
}

const lifearea = new Life()



//gems
const redGem = new Image();
redGem.src = './src/spooktoast.png';

const gemsArray = [];

class Gem {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.radius = 30;
        this.speed = Math.random() * 8;
        this.distance;
        this.noise = Math.random() <= 0.5 ? 'gemsound1' : 'gemsound2'
    }

    update(){
        this.y -= this.speed
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy)
    }

    draw(){
        // ctx.fillStyle = '#9b111e'
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2)
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();

        ctx.drawImage(redGem, this.x - 37, this.y - 40, this.radius * 2.5,this.radius * 2.5)
    }
}

const eatBread = document.createElement('audio')
eatBread.src = './src/eatbread.mp3';



function printGems(){
    if(gframes % 50 === 0){
        gemsArray.push(new Gem());
        (gemsArray)
    }

    for (let i = 0; i < gemsArray.length; i++) {
         let oneGem = gemsArray[i]
         oneGem.update();
         oneGem.draw();
        if(oneGem.y < 0){
            gemsArray.splice(i, 1)
            i--;
        }  
        if (oneGem.distance < oneGem.radius + player.radius){
            if(points % 10 === 0){
                eatBread.play()
            } else {
                eatBread.play()
            }
            points++;
            gemsArray.splice(i,1);
            i--;
        }
    }

}

//bombs and Droids
const mine1 = new Image();
mine1.src = './src/bombspirtesheet.png'

const bombArray = []

class Bomb {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.radius = 50;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteHeight = 485;
        this.spriteWidth = 555;
        this.frames = 0;
        this.speed = Math.random() * 4;
        this.distance;
        this.noise = Math.random() <= 0.5 ? 'bombsound1' : 'bombsound2'
    }

    update(){
        this.y -= this.speed
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy)

        if(gframes % 10 === 0){
            this.frames++
              if(gframes % 5 === 0){
            this.frames++
            if(this.frames >= 6){
                this.frames = 0;
            }
            if(this.frames == 2 || this.frames == 5){
                this.frameX = 0;
            } else {
                this.frameX++;
            }
            if(this.frames < 2){
                this.frameY = 0;
            }
            if(this.frames < 5){
                this.frameY = 1;
            } else {
                this.frameY = 0;
            }
        }
        }
    }

    draw(){
        // ctx.fillStyle = 'black'
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2)
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();

        // ctx.drawImage(mine1, this.x - 120, this.y - 60, this.radius * 8,this.radius * 4)
        ctx.drawImage(mine1, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 90, this.y - 120, this.spriteWidth/3, this.spriteHeight/3)
    }
}

const bombSound = document.createElement('audio')
bombSound.src = './src/8bit_bomb_explosion.wav';



function printBombs(){

    switch(points){
        case 10:
            bombspeed = 140
            break
        case 20:
            bombspeed = 130
            break
        case 30:
            bombspeed = 120
            break
        default:
            bombspeed = bombspeed
    }

    if(gframes % bombspeed === 0){
        bombArray.push(new Bomb());
    }

    for (let i = 0; i < bombArray.length; i++) {
         let oneBomb = bombArray[i]
         oneBomb.update();
         oneBomb.draw();
        if(oneBomb.y < 0){
            bombArray.splice(i, 1)
            i--;
        }  
        if (oneBomb.distance < oneBomb.radius + player.radius){
            if(oneBomb.noise === 'bombsound1'){
                bombSound.play()
            } else {
                bombSound.play()
            }
            life--;
            bombArray.splice(i,1)
            i--;
            if(life === 0){
                alert('GAME OVER');
                document.location.reload();
                clearInterval(interval);
            }
        }
    }

}


// monster

const monster1 = new Image();
monster1.src = './src/monster/frame_1_delay-0.1s.png'

const monsterSprite = new Image();
monsterSprite.src = './src/monsterchompsprite.png'

const monsterArray = []

class Monster {
    constructor(){
        this.x = canvas.width + 100;
        this.y = Math.random() * canvas.height;
        this.radius = 70;
        this.min = 4
        this.max = 8
        this.frameX = 0;
        this.frameY = 0;
        this.spriteHeight = 518;
        this.spriteWidth = 520;
        this.speed = Math.random() * (this.max - this.min) + this.min;
        this.distance;
        this.frames = 0;
        // this.noise = Math.random() <= 0.5 ? 'bombsound1' : 'bombsound2'
    }

    update(){
        this.x -= this.speed
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy)

        if(gframes % 5 === 0){
            this.frames++
            if(this.frames >= 6){
                this.frames = 0;
            }
            if(this.frames == 2 || this.frames == 5){
                this.frameX = 0;
            } else {
                this.frameX++;
            }
            if(this.frames < 2){
                this.frameY = 0;
            }
            if(this.frames < 5){
                this.frameY = 1;
            } else {
                this.frameY = 0;
            }
        }
    }

    draw(){
        // ctx.fillStyle = 'black'
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2)
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();

        ctx.drawImage(monsterSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 130, this.y - 170, this.spriteWidth/2, this.spriteHeight/2)
    }
}


function printMonster(){
    
    switch(points){
        case 10:
            speed = 400
            break
        case 20:
            speed = 300
            break
        case 30:
            speed = 200
            break
        default:
            speed = speed
    }

     if(gframes % speed == 0){
        monsterArray.push(new Monster());
    }

    for (let i = 0; i < monsterArray.length; i++) {
         let oneMonster = monsterArray[i]
         oneMonster.update();
         oneMonster.draw();
        if(oneMonster.y < 0){
            monsterArray.splice(i, 1)
            i--;
        }  
        if (oneMonster.distance < oneMonster.radius + player.radius){
            if(oneMonster.noise === 'bombsound1'){
                duckquack.play()
            } else {
                duckquack.play()
            }
            life--;
            monsterArray.splice(i,1)
            i--;
            if(life === 0){
                alert('GAME OVER');
                document.location.reload();
                clearInterval(interval);
            }
        }
    }

}

// monster

const monster2 = new Image();
monster2.src = './src/firem.png'

const monster2Array = []

class Monster2 {
    constructor(){
        this.x = canvas.width - 1300;
        this.y = Math.random() * canvas.height;
        this.radius = 100;
        this.min = 3
        this.max = 5
        this.frameX = 0;
        this.frameY = 0;
        this.spriteHeight = 300;
        this.spriteWidth = 300;
        this.frames = 0;
        this.speed = Math.random() * (this.max - this.min) + this.min;
        this.distance;
        // this.noise = Math.random() <= 0.5 ? 'bombsound1' : 'bombsound2'
    }

    update(){
        this.x += this.speed
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);

        if(gframes % 10 === 0){
            this.frames++
            if(this.frames >= 16){
                this.frames = 0;
            }
            if(this.frames == 3 || this.frames == 7 || this.frames == 11 || this.frames == 15){
                this.frameX = 0;
            } else {
                this.frameX++;
            }

            if(this.frames < 3){
                this.frameY = 0;
            }
            if(this.frames < 7){
                this.frameY = 1;
            } 
            if(this.frames < 11){
                this.frameY = 2;
            }
            if(this.frames < 15){
                this.frameY = 3;
            } else {
                this.frameY = 0;
            }
        }
    }

    draw(){
        // ctx.fillStyle = 'black'
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2)
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();

        ctx.drawImage(monster2, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 130, this.y - 120, this.spriteWidth/1, this.spriteHeight/1)
    }
}


function printflyMonster(){

    switch(points){
        case 10:
            flyspeed = 500
            break
        case 20:
            flyspeed = 300
            break
        case 30:
            flyspeed = 200
            break
        default:
            flyspeed = flyspeed
    }

    if(gframes % flyspeed == 0){
        monster2Array.push(new Monster2());
    }




    for (let i = 0; i < monster2Array.length; i++) {
         let flyingMonster = monster2Array[i]
         flyingMonster.update();
         flyingMonster.draw();
        if(flyingMonster.y < 0){
            monster1Array.splice(i, 1)
            i--;
        }  
        if (flyingMonster.distance < flyingMonster.radius + player.radius){
            if(flyingMonster.noise === 'bombsound1'){
                duckquack.play()
            } else {
                duckquack.play()
            }
            life--;
            monster2Array.splice(i,1)
            i--;
            if(life === 0){
                alert('GAME OVER');
                document.location.reload();
                clearInterval(interval);
            }
        }
    }

}


// FireBall 

class FireBall {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.speed = 35;
        

        this.width = 15;
        this.height = 8;
    }

    draw(ctx){
        // ctx.save()
        // ctx.translate(this.x,this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = 'yellow'
        ctx.fillRect(this.x + 100, this.y + 45, this.width,this.height);
        // ctx.restore()
    }

    update(ctx){
        // const dx = this.x - mouse.x;
        // const dy = this.y - mouse.y;
        // let theta = Math.atan2(dy,dx);
        // this.angle = theta;

        this.draw(ctx);
        this.x += this.speed;

        //  if(mouse.x != this.x){
        //     this.x -= dx/20;
        // }
        // if(mouse.y != this.y){
        //     this.y -= dy/20;
        // }
    }
}


// BOSS LEVEL 

const bossLvl = document.getElementById('Bosslevel');
const context = bossLvl.getContext('2d');
const paddleWidth = 90;
const paddleHeight = 15;
bossLvl.width = 1300;
bossLvl.height = 800;


function bossLevel(){
    heroChar.score = 0;
    villianChar.score = 0;

    if(thegame.style.display === 'block'){
        thegame.style.display = 'none'
        bossLvl.style.display = 'block'
    } 
    togglePause();
    handlePauseBoss();
}

// context.fillStyle = "black";
// context.fillRect(100,200,50,75);

// context.fillStyle = "red";
// context.beginPath();
// context.arc(300,350,100,0,Math.Pi * 2,false);

// let rectX = 0;

// function render(){
//     context.drawRect(0,0,1300,800, "wheat");
//     context.drawRect(rectX,100,100,100, "red");
//     rectX = rectX + 100;
// }
const duckyRight = new Image();
duckyRight.src = './src/duckrightsprite.png'

class Hero{
    constructor(){
    this.x = 20;
    this.y = bossLvl.height/2 -100/2;
    this.width = 80;
    this.height = 80;
    this.score = 0;

    this.spriteWidth = 575;
    this.spriteHeight = 520;
    this.frameX = 0;
    this.frameY = 0;
    this.frames = 0;
    }

    update(){
       
        if(bframes % 10 === 0){
            this.frames++
            if(this.frames >= 6){
                this.frames = 0;
            }
            if(this.frames == 2 || this.frames == 5){
                this.frameX = 0;
            } else {
                this.frameX++;
            }
            if(this.frames < 2){
                this.frameY = 0;
            }
            if(this.frames < 5){
                this.frameY = 1;
            } else {
                this.frameY = 0;
            }
        }
    }


    draw(){
        // context.fillStyle = "white";
        // context.fillRect(this.x,this.y,this.width,this.height)

        //  ctx.drawImage(monster2, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 130, this.y - 120, this.spriteWidth/1, this.spriteHeight/1)
        
        context.drawImage(duckyRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 30, this.y - 40, this.spriteWidth/4, this.spriteHeight/4)
    }
}

const heroChar = new Hero();

const mainBoss = new Image();
mainBoss.src = './src/mainbosssprite.png'

class Villian {
    constructor(){
    this.x = bossLvl.width - 250;
    this.y = bossLvl.height/2 -100/2;
    this.width = 440;
    this.height = 340;
    this.score = 0;

    this.spriteWidth = 545;
    this.spriteHeight = 700;
    this.frameX = 0;
    this.frameY = 0;
    this.frames = 0;
    }

    update(){
          if(bframes % 10 === 0){
            this.frames++
            if(this.frames >= 6){
                this.frames = 0;
            }
            if(this.frames == 2 || this.frames == 5){
                this.frameX = 0;
            } else {
                this.frameX++;
            }
            if(this.frames < 2){
                this.frameY = 0;
            }
            if(this.frames < 5){
                this.frameY = 1;
            } else {
                this.frameY = 0;
            }
        }
    }


    draw(){
        // context.fillStyle = "white";
        // context.fillRect(this.x,this.y,this.width,this.height)

                
        context.drawImage(mainBoss, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 10, this.y - 20, this.spriteWidth/2, this.spriteHeight/2)
        // context.drawImage(mainBoss, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 0, this.y - 5, this.spriteWidth/2, this.spriteHeight/2)
    }
}

const villianChar = new Villian();

const net = {
    x: bossLvl.width/2 -1,
    y: 0,
    width: 2,
    height: 10,
    color: "white"
}

function drawNet(){
    for (let i = 0; i < bossLvl.height; i+= 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color)      
    }
}

class Spell{
    constructor(){
        this.x = bossLvl.width/2,
        this.y = bossLvl.height/2,
        this.radius = 15;
        this.speed = 5;
        this.velocityX = 5;
        this.velocityY = 5;
    }


    draw(){
        context.fillStyle = "white";
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        context.closePath();
        context.fill();
    }

}

const spellBall = new Spell();


function collision(h,b){
        h.top = h.y
        h.bottom = h.y + h.height;
        h.left = h.x;
        h.right = h.x + h.width;

        b.top = b.y - b.radius;
        b.bottom = b.y + b.radius;
        b.left = b.x - b.radius;
        b.right = b.x + b.radius;

        // if all these conditions are true then there is a collision with the ball and a hero or villian 
        return b.right > h.left && b.top < h.bottom && b.left < h.right && b.bottom > h.top
}

function resetSpellBall(){
    spellBall.x = bossLvl.width/2
    spellBall.y = bossLvl.height/2
    spellBall.speed = 5;
    spellBall.velocityX = -spellBall.velocityX
}


function update(){
        spellBall.x += spellBall.velocityX;
        spellBall.y += spellBall.velocityY;

        //ai char
        let villLvl = 0.5;
        villianChar.y += (spellBall.y - (villianChar.y + villianChar.height/2)) * villLvl;
        
        if(spellBall.y + spellBall.radius > bossLvl.height || spellBall.y - spellBall.radius < 0){
            spellBall.velocityY= -spellBall.velocityY
        }

        let currentPlayer = (spellBall.x < bossLvl.width/2) ? heroChar : villianChar

        if(collision(currentPlayer,spellBall)){
            //ball hits player
            let collidePoint = spellBall.y - (currentPlayer.y + currentPlayer.height/2);

            // normal
            collidePoint = collidePoint/(currentPlayer.height/2);

            //calc angle 
            let angleRad = collidePoint * Math.PI/4;

            // adding direction if hit by hero or villan
            let direction = (spellBall.x < bossLvl.width/2) ? 1 : -1;

            // change vel x and y
            spellBall.velocityX = direction * spellBall.speed * Math.cos(angleRad);
            spellBall.velocityY =             spellBall.speed * Math.sin(angleRad);
            
            // each time the ball hits the speed goes up
            spellBall.speed += 2
        }

        // score update
        if(spellBall.x + spellBall.radius > bossLvl.width){
            heroChar.score++

            if(heroChar.score == 1){
                herovoice1.play()
            }

            if(heroChar.score == 2){
                herovoice2.play();
            }

            if(heroChar.score == 3){
                herovoice3.play();
                alert('YOU WIN');
            } else {
            resetSpellBall();
            }
        } else if(spellBall.x - spellBall.radius < 0){
            if(villianChar.score == 0){
                villianVoice1.play()
            } else if(villianChar.score == 1){
                villianVoice2.play()
            } else if(villianChar.score == 2){
                villianVoice3.play()
            }

            villianChar.score++
             if(villianChar.score == 3){
                let thegame = document.getElementById('myCanvas');
                alert('YOU LOSE');

                if(bossLvl.style.display === 'block'){
                    bossLvl.style.display = 'none'
                    thegame.style.display = 'block'
                    bossBattleMusic.pause();
                    canvasPos = canvas.getBoundingClientRect();
                    points = 0;
                } 
                mainMusic.load();
                mainMusic.play();
                togglePause();
            } else {
            resetSpellBall();
            }
        }
    } 


// animation Work main game

let isRunning = false;
let pausedBossLvl = false;

function togglePause(){
    isRunning = !isRunning;

    if(isRunning){
        animation()
    }
}

function handlePauseBoss(){
   pausedBossLvl = !pausedBossLvl;

    if(pausedBossLvl){
        render()
    }
}

window.addEventListener('keydown', function(event){
    if(event.code == 'KeyP'){
        togglePause();
    }
})

window.addEventListener('keydown', function(event){
    if(event.code == 'KeyB'){
        handlePauseBoss();
    }
})

window.addEventListener('keydown', function(event){
    if(event.code == 'Space'){
        player.shootProjectile()
    }
})

function drawRect(x,y,w,h,color){
    context.fillStyle = color
    context.fillRect(x,y,w,h)
}

function drawtext(text,x,y,color){
    context.fillStyle = color;
    context.font = "45px fantasy";
    context.fillText(text,x,y)
}


// animation work boss lvl

bossLvl.addEventListener('mousemove',moveHero);


function moveHero(event){
    let rect = bossLvl.getBoundingClientRect();

    heroChar.y = event.clientY - rect.top - heroChar.height/2;
}

// const bossbck2 = new Image();
// bossbck2.src ='./src/bossback2.jpg'

// class BossBck{
//     constructor() {
        
//     }

//     draw(){
//         //  context.drawImage(mainBoss, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 0, this.y - 5, this.spriteWidth/2, this.spriteHeight/2)
//         context.drawImage(bossbck2,0,0,)
//     }
// }

// const hellbck = new BossBck();
let bframes = 0;

function render(){
    context.clearRect(0,0,canvas.width,canvas.height)
    update();
    // hellbck.draw();
    // drawNet();
    drawtext(heroChar.score,bossLvl.width/4,bossLvl.height/5,"white");
    drawtext(villianChar.score,3 * bossLvl.width/4,bossLvl.height/5,"white")
    heroChar.update();
    heroChar.draw();
    villianChar.update();
    villianChar.draw();
    spellBall.draw();
    bframes++
    if(pausedBossLvl){
    requestAnimationFrame(render);
    }
}

render();


function animation(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    printGems();
    printBombs();
    printMonster();
    printflyMonster();
    player.update();
    player.draw();
    lifearea.draw();
    // lifearea.update();
    ctx.fillStyle = 'White';
    ctx.fillText('Gems: ' + points, 10, 50);
    ctx.fillText("Lifes: " + life,1100,50)
    if(points == 50 && pickedStory == true){
        if(pausedBossLvl == true){
            pausedBossLvl = false
        }
        mainMusic.pause()
        spellBall.speed = 5
        bossLevel()
        bossBattleMusic.load(); 
        // bossBattleMusic.loop();
        bossBattleMusic.play();
    }
    gframes++;
    if(isRunning){
    requestAnimationFrame(animation);
    }
}

animation()

window.addEventListener('resize', function(){
    canvasPos = canvas.getBoundingClientRect();
    console.log(canvasPos)
});

// check if the boss level needs this ^