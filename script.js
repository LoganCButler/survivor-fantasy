document.addEventListener("DOMContentLoaded", function () {
	// Sample JSON data
	const teamData = {
		"butlers": {
			"score": 100,
			"players": [
				{
					"name": "Soda",
					"image": "https://www.goldderby.com/wp-content/uploads/2024/02/Survivor-46-Soda-Thompson.jpg",
					"eliminated": true
				},
				{
					"name": "Kenzie",
					"image": "https://www.goldderby.com/wp-content/uploads/2024/02/Survivor-46-Kenzie-Petty.jpg",
					"eliminated": false
				},
				{
					"name": "Randen",
					"image": "https://www.goldderby.com/wp-content/uploads/2024/02/Survivor-46-Randen-Montalvo.jpg",
					"eliminated": false
				},
				{
					"name": "Tevin",
					"image": "https://www.goldderby.com/wp-content/uploads/2024/02/Survivor-46-Tevin-Davis.jpg",
					"eliminated": false
				},
			]
		},
		"Elams": {
			"score": 0,
			"players": [
				{
					"name": "Jess",
					"image": "https://www.goldderby.com/wp-content/uploads/2024/02/Survivor-46-Jessica-Jess-Chong.jpg",
					"eliminated": false
				},
				{
					"name": "Charlie",
					"image": "https://www.goldderby.com/wp-content/uploads/2024/02/Survivor-46-Charlie-Davis.jpg",
					"eliminated": false
				},
				{
					"name": "Hunter",
					"image": "https://www.goldderby.com/wp-content/uploads/2024/02/Survivor-46-Hunter-McKnight.jpg",
					"eliminated": false
				},
				{
					"name": "Ben",
					"image": "https://www.goldderby.com/wp-content/uploads/2024/02/Survivor-46-Ben-Katzman.jpg",
					"eliminated": false
				},
			]
		},
	};

	// Function to create player HTML based on JSON data
	function createPlayerHTML(player) {
		return `
				<div class="player">
					<img src="${player.image}" alt="${player.name}">
					<span>${player.name}</span>
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
