function savePlayers(key,players) {
	localStorage.setItem(key, JSON.stringify(players));
}

function updatePlayers(player) {
	var players=getAllPlayers();
	players[player.name] = player.getUserInfo();
	localStorage.setItem("players", JSON.stringify(players));
}

function getAllPlayers() {
    return JSON.parse(localStorage.getItem("players"));
}

function getPlayer(name) {
    return getAllPlayers()[name];
}
