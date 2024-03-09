var inputGameName = "";

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        populateTable(data.games); // Populate table with game data
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to populate the HTML table with game data
function populateTable(games) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear previous entries
    const date = new Date().getFullYear();
    // Iterate over each game entry
    games.forEach(game => {
        // Create a new row for each game
        if (game.year == date) {
            const row = document.createElement('tr');

            // Add game information to the row
            row.innerHTML = `
                <td>${game.gameId}</td>
                <td>${game.title}</td>
                <td>${game.year}</td>
                <td>${game.console}</td>
                <td>${game.price}</td>
                <td><img src="${game.url}" alt="Game Image"></td>
            `;

            // Append the row to the table
            tbody.appendChild(row);
        }
    });
}
