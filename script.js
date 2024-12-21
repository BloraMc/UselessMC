function searchUsername() {
    const username = document.getElementById('username').value || `Player${Math.floor(Math.random() * 10000)}`;
    const resultsDiv = document.getElementById('results');
    const randomSeed = Math.floor(Math.random() * 10000000000);

    const bios = [
        "Minecraft enthusiast who loves building castles.",
        "A dedicated survival player who has conquered every biome.",
        "A redstone expert who can build anything!",
        "Master of building and exploring the world of Minecraft.",
        "Famous for their epic survival adventures!"
    ];

    const bio = username.toLowerCase() === "bloramc" ? 
        "Considered the greatest Minecraft player - Creator of UselessMC" :
        bios[Math.floor(Math.random() * bios.length)];

    const fakeStats = `
        <div class="fake-stats">
            <p><strong>Blocks Mined:</strong> ${Math.floor(Math.random() * 100000000) + 180000000}</p>
            <p><strong>Deaths by Creeper:</strong> ${Math.floor(Math.random() * 200000000) + 850000000}</p>
            <p><strong>Favorite Biome:</strong> Mushroom Island</p>
        </div>
    `;

    const isBloraMc = /bloramc/i.test(username);
    const creatorLabel = isBloraMc ? "<strong>UselessMC's Creator</strong>" : "";

    resultsDiv.innerHTML = `
        <div class="skin">
            <p>Skin:</p>
            <img src="https://mc-heads.net/body/${username}" alt="${username}'s Skin">
        </div>
        <div class="cape">
            <p>Cape:</p>
            <img src="https://mc-heads.net/cape/${username}" alt="${username}'s Cape">
        </div>
        <div class="random-seed">
            <strong>Random Seed:</strong> ${randomSeed}
        </div>
        <div class="bio">
            <strong>Bio:</strong> ${bio}
        </div>
        <div class="creator-label">
            ${creatorLabel}
        </div>
        ${fakeStats}
    `;
}

function randomSkin() {
    searchUsername();
}
