document.addEventListener("DOMContentLoaded", function () {
	const teamData = {
		"butlers": {
			"score": 100,
			"players": [
				{
					"name": "Soda",
					"image": "./assets/Survivor-46-Soda-Thompson.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Kenzie",
					"image": "./assets/Survivor-46-Kenzie-Petty.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Randen",
					"image": "./assets/Survivor-46-Randen-Montalvo.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Tevin",
					"image": "./assets/Survivor-46-Tevin-Davis.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
			]
		},
		"Elams": {
			"score": 0,
			"players": [
				{
					"name": "Jess",
					"image": "./assets/Survivor-46-Jessica-Jess-Chong.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Charlie",
					"image": "./assets/Survivor-46-Charlie-Davis.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Hunter",
					"image": "./assets/Survivor-46-Hunter-McKnight.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Ben",
					"image": "./assets/Survivor-46-Ben-Katzman.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
			]
		},
		"starks": {
			"score": 0,
			"players": [
				{
					"name": "Tiffany",
					"image": "./assets/Survivor-46-Tiffany-Nicole-Ervin.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Venus",
					"image": "./assets/Survivor-46-Venus-Vafa.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Ben",
					"image": "./assets/Survivor-46-Ben-Katzman.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Liz",
					"image": "./assets/Survivor-46-Liz-Wilcox.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
			]
		},
		"hamiltons": {
			"score": 0,
			"players": [
				{
					"name": "Q",
					"image": "./assets/Survivor-46-Q-Burdette.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Tim",
					"image": "./assets/Survivor-46-Tim-Spicer.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Jem",
					"image": "./assets/Survivor-46-Jemila-Jem-Hussain-Adams.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
				{
					"name": "Moriah",
					"image": "./assets/Survivor-46-Moriah-Gaynor.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false
				},
			]
		},
	};

	// Function to create player HTML based on JSON data
	function createPlayerHTML(player) {
		return `
				<div class="player">
					<img src="${player.image}" alt="${player.name}">
					<span>
						${player.name} 
						${player.hasIdol ? '<div class="material-symbols-outlined">verified_user</div>' : ''}
						${player.hasAdvantage ? '<div class="material-symbols-outlined">upgrade</div>' : ''}
						</span>
					${player.eliminated ? '<span class="eliminated">X</span>' : ''}
				</div>	
			`;
	}

	// Function to update team information based on JSON data
	function updateTeam(teamId, teamData) {
		const teamElement = document.getElementById(teamId);
		const scoreElement = teamElement.querySelector(".team-score");

		// Update team score
		scoreElement.textContent = teamData.score;

		// Create player elements and append to the team container
		const playerContainer = teamElement.appendChild(document.createElement("div"));
		playerContainer.classList.add("players-container");

		teamData.players.forEach(player => {
			const playerHTML = createPlayerHTML(player);
			playerContainer.innerHTML += playerHTML;
		});
	}

	// Update teams with JSON data
	Object.keys(teamData).forEach(teamId => {
		updateTeam(teamId, teamData[teamId]);
	});
});
