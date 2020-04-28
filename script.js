// 1 - iniciando o programa da cobrinha/* 
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
// 2 - define a quantidade de pixels do jogo
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// 7 criar uma variavel para direção da cobrinha
let direction = "right";

// 16 - criar a comida e randomizar ela
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// 3
function criarBG() {
    context.fillStyle = "lightgreen";
    // fillRect desenha o quadrado onde será o jogo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// 4
function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// 17 - criando a comida
function drawFood() {
    context.fillStyle = "red";
    // passando as coordenadas
    context.fillRect(food.x, food.y, box, box);

}



// 14 definindo as direções 
document.addEventListener('keydown', update);

function newFunction() {
    ctx.beginPath();
}

function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

// 8
function iniciarJogo() {
    // 15 - definindo as direções e impedindo que a cobrinha suma, faz ela atravessar a parede
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // 20 - criar fim de jogo
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            // se a condiçõ for true fim de jogo
            clearInterval(jogo);
            alert("FIM DE JOGO HA HA HA!!!")
        }
    }

    // 5 - chamando a função para criar o quadrado
    criarBG();

    // 6 - função para criar a cobrinha
    criarCobrinha();

    // 18 - função desenhar comida
    drawFood();

    // 9 - ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // 12 - criando as coordenadas
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    // 19 - condição para a cobrinha aumentar de tamanho o a comida aparecer em outro local
    // 19.1 - colocar o pop dentro da condição
    if (snakeX != food.x || snakeY != food.y) {
        // 10 - retirar o ultimo elemento do array 
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }



    // 11 - criando uma nova cabeça
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

// 13
let jogo = setInterval(iniciarJogo, 200);














 
















































