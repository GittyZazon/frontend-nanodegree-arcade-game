// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-driver.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //Creates illusion of enemies looping around 
    if (this.x >= 515){
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y) {
    this.sprite = 'images/char-granny.png';
    this.x = x;
    this.y = y;

}

//When player reaches other side, display winning modal
Player.prototype.update = function(dt) {
    if (this.y === 35){
        document.querySelector('.winBox').style.display = "block";
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Move player according to keypress
Player.prototype.handleInput = function(key) {
    if (key === 'left' && player.x > 30){
        player.x -= 100;
    }
    if (key === 'up' && player.y > 35){
        player.y -= 85;
    }
    if (key === 'right' && player.x < 430){
        player.x += 100;
    }
    if (key === 'down' && player.y < 545){
        player.y += 85;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let enemy1 = allEnemies.push(new Enemy(-100, 375, 320));
let enemy2 = allEnemies.push(new Enemy(-100, 295, 200));
let enemy3 = allEnemies.push(new Enemy(-100, 210, 250));
let enemy4 = allEnemies.push(new Enemy(-100, 125, 300));
let player = new Player(230, 460);

function reset() {
    allEnemies = [];
    let enemy1 = allEnemies.push(new Enemy(-100, 375, 320));
    let enemy2 = allEnemies.push(new Enemy(-100, 295, 200));
    let enemy3 = allEnemies.push(new Enemy(-100, 210, 250));
    let enemy4 = allEnemies.push(new Enemy(-100, 125, 300));
    player = null;
    player = new Player (230, 460);
}

document.querySelector('button').onclick = function (e) {
    document.querySelector('.winBox').style.display = "none";
    reset();
}

window.onclick = function (e){
    if (e.target == document.querySelector('.winBox')){
        document.querySelector('.winBox').style.display = "none";
    }
    reset();
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
