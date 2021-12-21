const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0,
  y = 0,
  dirX = true,
  dirY = true;
ctx.fillStyle = "black";

setInterval(() => {
  ctx.clearRect(x, y, 50, 50);
  ctx.fillStyle = "black";
  dirX ? (x += 10) : (x -= 10);
  if (x > canvas.width - 50 || !x) dirX = !dirX;

  dirY ? y += 10 : y -= 10;
  if (y > canvas.height - 50 || !y) dirY = !dirY;

  ctx.fillRect(x, y, 50, 50);
}, 100);



//!.........................................................

const floor = {
  x: 0,
  y: function () {
    return canvas.height - this.height;
  },
  width: canvas.width,
  height: 60,
};

const player = {
  x: 0,
  y: function () {
    return floor.y() - this.height;
  },
  width: 80,
  height: 200,
};

let dir = true;

ctx.fillStyle = "brown";
ctx.fillRect(floor.x, floor.y(), floor.width, floor.height);

ctx.fillStyle = "green";
ctx.fillRect(player.x, player.y(), player.width, player.height);

const playerAnim = () => {
  ctx.clearRect(player.x, player.y(), player.width, player.height);
  ctx.fillStyle = "green";

  dir ? (player.x += 1) : (player.x -= 1);
  if (player.x > canvas.width - 80 || player.x === 0) dir = !dir;

  ctx.fillRect(player.x , player.y(), player.width, player.height);
  requestAnimationFrame(playerAnim);
};

playerAnim();
