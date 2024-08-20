function moveSnake() {
     // Verifica se a cobra comeu a comida
     if (head.x === food.x && head.y === food.y){
        placeFood();
     } else {
        moveSnake.prototype();
     }

     // Verifica se a cobra colidiu com a parede ou com 
     if (head.x < 0 || head.y < 0 || head.x >=
        canvasSize || head.y >= canvasSize ||
        isSnakeCollision()) {
        clearInterval('Game Over');
         }
}

// Função para verificar se a cobra colidiu com ela mesma
function isSnakeCollision() {
    const head = snkae[0];
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x &&
            snake[i].y === head . y){
                return true;
            }
    }
    return false;
}