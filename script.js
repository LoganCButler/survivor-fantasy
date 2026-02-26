document.addEventListener("DOMContentLoaded", function () {
	const container = document.querySelector('.team-container');
	
	// Show loading state
	showLoadingState();

	fetch('team-data.json')
		.then(response => {
			if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
			return response.json();
		})
		.then(teamData => {
			if (!teamData || typeof teamData !== 'object') {
				throw new Error('Invalid team data format');
			}
			// Remove loading state
			hideLoadingState();
			
			Object.keys(teamData).forEach(teamId => {
				updateTeam(teamId, teamData[teamId]);
			});
		})
		.catch(error => {
			console.error('Error loading team data:', error);
			hideLoadingState();
			displayErrorMessage('Unable to load team data. Please refresh the page.');
		});

	function showLoadingState() {
		if (container) {
			container.classList.add('loading');
			const teams = document.querySelectorAll('.team');
			teams.forEach(team => {
				const skeleton = document.createElement('div');
				skeleton.classList.add('skeleton');
				team.appendChild(skeleton);
			});
		}
	}

	function hideLoadingState() {
		if (container) {
			container.classList.remove('loading');
			const skeletons = document.querySelectorAll('.skeleton');
			skeletons.forEach(skeleton => skeleton.remove());
		}
	}

	function displayErrorMessage(message) {
		if (container) {
			const errorDiv = document.createElement('div');
			errorDiv.style.cssText = 'color: #ff6b6b; text-align: center; padding: 20px; font-size: 16px; animation: fadeIn 0.5s ease;';
			errorDiv.textContent = message;
			container.appendChild(errorDiv);
		}
	}

	function createPlayerHTML(player) {
		if (!player || !player.name) {
			console.warn('Invalid player data:', player);
			return '';
		}

		const gameState = player.eliminated ? 'eliminated' : (player.medicalEvac ? 'medical-evac' : 'active');

		return `
			<div class="player" data-game-state="${gameState}">
				<img class="${player.ogTribe || ''}" src="${player.image}" alt="${player.name}">
				<span>
					${player.name}
					${player.hasIdol ? '<div class="material-symbols-outlined advantage-icon" title="Has Idol">verified_user</div>' : ''}
					${player.hasAdvantage ? '<div class="material-symbols-outlined advantage-icon" title="Has Advantage">upgrade</div>' : ''}
				</span>
				${player.eliminated ? '<span class="eliminated" title="Eliminated">X</span>' : ''}
				${player.medicalEvac ? '<span class="material-symbols-outlined medicalEvac" title="Medical Evacuation">local_hospital</span>' : ''}
			</div>
		`;
	}

	function updateTeam(teamId, teamData) {
		const teamElement = document.getElementById(teamId);
		if (!teamElement) {
			console.warn(`Team element not found: ${teamId}`);
			return;
		}

		const scoreElement = teamElement.querySelector(".team-score");
		if (!scoreElement) {
			console.warn(`Score element not found in team: ${teamId}`);
			return;
		}

		if (!teamData || typeof teamData !== 'object') {
			console.warn(`Invalid team data for ${teamId}`);
			return;
		}

		const score = teamData.score || 0;
		scoreElement.textContent = score;

		const playerContainer = document.createElement("div");
		playerContainer.classList.add("players-container");

		if (Array.isArray(teamData.players) && teamData.players.length > 0) {
			teamData.players.forEach(player => {
				const playerHTML = createPlayerHTML(player);
				if (playerHTML) {
					playerContainer.innerHTML += playerHTML;
				}
			});
		} else {
			console.warn(`No players found for team: ${teamId}`);
		}

		teamElement.appendChild(playerContainer);
	}
});
