document.addEventListener("DOMContentLoaded", function () {
	const teamData = {
		"butlers": {
			"score": 675,
			"players": [
				{
					"name": "Soda",
					"image": "./assets/Survivor-46-Soda-Thompson.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "nami"
				},
				{
					"name": "Kenzie",
					"image": "./assets/Survivor-46-Kenzie-Petty.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "yanu"
				},
				{
					"name": "Randen",
					"image": "./assets/Survivor-46-Randen-Montalvo.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "nami",
					"medicalEvac": true
				},
				{
					"name": "Tevin",
					"image": "./assets/Survivor-46-Tevin-Davis.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": true,
					"ogTribe": "nami"
				},
			]
		},
		"Elams": {
			"score": 175,
			"players": [
				{
					"name": "Jess",
					"image": "./assets/Survivor-46-Jessica-Jess-Chong.jpg",
					"eliminated": true,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "yanu"
				},
				{
					"name": "Charlie",
					"image": "./assets/Survivor-46-Charlie-Davis.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "siga"
				},
				{
					"name": "Hunter",
					"image": "./assets/Survivor-46-Hunter-McKnight.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "nami"
				},
				{
					"name": "Moriah",
					"image": "./assets/Survivor-46-Moriah-Gaynor.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": true,
					"ogTribe": "siga"
				},
			]
		},
		"starks": {
			"score": 525,
			"players": [
				{
					"name": "Tiffany",
					"image": "./assets/Survivor-46-Tiffany-Nicole-Ervin.jpg",
					"eliminated": false,
					"hasIdol": true,
					"hasAdvantage": false,
					"ogTribe": "yanu"
				},
				{
					"name": "Venus",
					"image": "./assets/Survivor-46-Venus-Vafa.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "nami"
				},
				{
					"name": "Ben",
					"image": "./assets/Survivor-46-Ben-Katzman.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "siga"
				},
				{
					"name": "Liz",
					"image": "./assets/Survivor-46-Liz-Wilcox.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "nami"
				},
			]
		},
		"hamiltons": {
			"score": 100,
			"players": [
				{
					"name": "Q",
					"image": "./assets/Survivor-46-Q-Burdette.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "yanu"
				},
				{
					"name": "Tim",
					"image": "./assets/Survivor-46-Tim-Spicer.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "siga"
				},
				{
					"name": "Jem",
					"image": "./assets/Survivor-46-Jemila-Jem-Hussain-Adams.jpg",
					"eliminated": false,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "siga"
				},
				{
					"name": "Jelinsky",
					"image": "./assets//Survivor-46-David-Jelinsky.jpg",
					"eliminated": true,
					"hasIdol": false,
					"hasAdvantage": false,
					"ogTribe": "yanu"
				},
			]
		},
	};

	// Function to create player HTML based on JSON data
	function createPlayerHTML(player) {
		return `
				<div class="player">
					<img class="${player.ogTribe}" src="${player.image}" alt="${player.name}">
					<span>
						${player.name} 
						${player.hasIdol ? '<div class="material-symbols-outlined">verified_user</div>' : ''}
						${player.hasAdvantage ? '<div class="material-symbols-outlined">upgrade</div>' : ''}
						</span>
					${player.eliminated ? '<span class="eliminated">X</span>' : ''}
					${player.medicalEvac ? '<span class="material-symbols-outlined medicalEvac" >local_hospital</span>' : ''}
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
