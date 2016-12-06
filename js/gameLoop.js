var canvas = document.createElement("canvas");

var ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 600;


document.body.appendChild(canvas);
// Referenciando o cenário
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function(){
    bgReady = true;
};
bgImage.src = "./image/coma.jpg";

// Referenciando o player
var playerReady = false;
var playerImage = new Image();

playerImage.onload = function(){
    playerReady = true;
};
playerImage.src = "./image/player.png";

//Referenciando o monster
var monsterReady = false;
var monsterImage = new Image;

monsterImage.onload = function(){
    monsterReady = true
};
monsterImage.src = "./image/pizza.png";

//Configurações do Jogo
var  player ={
    speed: 256
};

var monster = {};
var monstersCaught = 0;
var keysDown = {};
//manipulador de eventos
addEventListener("keydown", function(e){
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e){
    delete keysDown[e.keyCode];
}, false); 

//Resetar o jogo
var reset = function(){
    player.x = canvas.width / 2;
    player.y = canvas.height /2;
    
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
}

//Controles Jogador
var update = function(modifier){
    if(37 in keysDown){
        player.x -= player.speed * modifier; //Esquerda
    }
    if(38 in keysDown){
        player.y -= player.speed * modifier; //Cima
    }
    if(39 in keysDown){
        player.x += player.speed * modifier; //Cireita
    }
    if(40 in keysDown){
        player.y += player.speed * modifier; //Baixo
    }
    //Colisão
    if(    player.x <= (monster.x + 32)
        && monster.x <= (player.x + 32)
        &&player.y <= (monster.y + 32)
        && monster.y <= (player.y +32)){
        
        ++monstersCaught; 

        //condicao de vitoria
        if(monstersCaught == 6 )
        {
            alert("WIN !");
            var atualizar = 1;
        }

        if (atualizar == 1) {
            window.location.reload();
        };

     // condicao derrota

     if(player.x > 890)
     {   
         alert("você perdeu !");
         var atualizar = 1;
     }
     if (atualizar == 1) {
         window.location.reload();
     }
         if(player.x < -30)
     {
         alert("você perdeu !");
         var atualizar = 1;
     }
     if (atualizar == 1) {
         window.location.reload();
     }

     if(player.y > 590)
     {
         alert("você perdeu !");
         var atualizar = 1;
     }
     if (atualizar == 1) {
         window.location.reload();
     }

         if(player.y < -30)
     {
         alert("você perdeu !");
         var atualizar = 1;
     }
     if (atualizar == 1) {
         window.location.reload();
     }

        reset();
    }
};

//Desenhar na tela 
var render = function(){
    if(bgReady){
        ctx.drawImage(bgImage, 0, 0);
    }
    if(playerReady){
        ctx.drawImage(playerImage, player.x,player.y);
    }
    if(monsterReady){
        ctx.drawImage(monsterImage, monster.x,monster.y);
    }
    
    //Desenhar placar de monstros capturados
    ctx.fillStyle = "rgb(255 ,255, 255)";
    ctx.font = "22px Verdana";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("pizza comidas: " + monstersCaught, 32, 32);
    
};


//Loop do Jogo

var main = function(){
    var now = Date.now();
    var delta = now - then;
    
    update(delta / 1000);
    render();
    
    then = now;
};

//Iniciar o Jogo
reset();
var then = Date.now();
setInterval(main, 1);

//condicao de vitoria
    if(monstersCaught == 10 )
    {
        alert("Você ganhou !");
        var monstersCaught = 0;
    }
