var data;

function preload() {
  data = loadJSON('player.json');
}

function setup() {
  noCanvas();
	var user = {};
  console.log(data);

	//Create dropdowns
	let dropdown1 = createSelect('');
	let dropdown2 = createSelect('');
	console.log(data.players.length);
	console.log(data.stats[0]);
	let stat = data.stats[0];
	let p = data.players[0];
	console.log(p[stat]);

	//Add names players to drowdowns
	for(let i = 0; i<data.players.length;i++){
		let name = data.players[i].playerName;
		dropdown1.option(name);
		dropdown2.option(name);
		user[name]=data.players[i];
	}
	console.log(user);
	let button = createButton("submit");
	button.mousePressed(euclidean);

	//Calculate similarity
	function euclidean(){
		let name1 = dropdown1.value();
		let name2 = dropdown2.value();

		let player1 = user[name1];
		let player2 = user[name2];
		console.log(player1);
		console.log(player2);
	}
}
