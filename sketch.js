var player;

function preload() {
  player = loadJSON('player_samp.json');
}

function setup() {
  noCanvas();
  console.log(player);
}
