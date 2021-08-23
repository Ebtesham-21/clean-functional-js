function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';

}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
    player.addEventListener('click', function () {
        player.style.backgroundColor = 'red';
    })





}

function addPlayer() {
    const playersContainer = document.getElementById("players");
    const player = document.createElement('div');
    player.classList.add('player');


}

document.getElementById('players').addEventListener('click', function (event) {



})