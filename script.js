document.addEventListener("DOMContentLoaded", function () {
	fetch('team-data.json')
		.then(response => response.json())
		.then(teamData => {
				// Update teams with JSON data
				Object.keys(teamData).forEach(teamId => {
						updateTeam(teamId, teamData[teamId]);
				});
	})
	.catch(error => console.error('Error fetching team data:', error));

	// Function to create player HTML based on JSON data
	function createPlayerHTML(player) {
		return `
				<div class="player">
					<img class="${player.ogTribe}" src="${player.image}" alt="${player.name}">
					<span>
						${player.name} 
						${player.hasIdol ? '<div class="material-symbols-outlined advantage-icon">verified_user</div>' : ''}
						${player.hasAdvantage ? '<div class="material-symbols-outlined advantage-icon">upgrade</div>' : ''}
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
});
