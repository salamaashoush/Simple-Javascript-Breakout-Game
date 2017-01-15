function savePlayer(player) {
	splayer=player.getUserInfo();
	localStorage.setItem("player", JSON.stringify(splayer));
}

function updatePlayers(player) {
	var player = getPlayer();
 	player.getUserInfo();
	localStorage.setItem("player", JSON.stringify(player));
}


function getPlayer() {
	var player = localStorage.getItem("player");
	if (player == null) {
		return null;
	} else {
		return JSON.parse(localStorage.getItem("player"));
	}
}

function restorePlayerSession() {
	var splayer = getPlayer();
	if (splayer) {
		player = new Player();
		player.parseSavedPlayer(splayer);
		return player;
	}else{
		return null;
	}
}