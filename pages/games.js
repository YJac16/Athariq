/**
 * Games Page - Display available games by genre
 */

export function renderGames(container) {
  const gamesByGenre = {
    story: [
      {
        title: 'Echoes of the Last Light',
        description: 'A narrative journey through fading memories and lingering echoes. Every decision shapes the path forward.',
        status: 'In Development',
        playUrl: '#', // Replace with actual game URL when available
      },
    ],
    mystery: [
      {
        title: 'Whispers Before the Silence',
        description: 'A mystery where silence speaks louder than words. Uncover the truth hidden in the spaces between.',
        status: 'In Development',
        playUrl: '#', // Replace with actual game URL when available
      },
    ],
    islamic: [], // Coming soon
  };

  function renderGameCard(game) {
    return `
      <div class="game-card">
        <h2 class="game-title">${game.title}</h2>
        <p class="game-description">${game.description}</p>
        <div class="game-meta">
          <span class="game-status">${game.status}</span>
        </div>
        <a href="${game.playUrl}" class="btn game-play-btn" target="_blank" rel="noopener noreferrer">Play</a>
      </div>
    `;
  }

  function renderGenreSection(genreName, games) {
    const genreTitle = genreName.charAt(0).toUpperCase() + genreName.slice(1);
    
    if (games.length === 0) {
      // Coming soon section for empty genres
      return `
        <div class="genre-section">
          <h2 class="genre-title">${genreTitle}</h2>
          <div class="coming-soon">
            <p class="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      `;
    }

    const gamesHTML = games.map(renderGameCard).join('');
    
    return `
      <div class="genre-section">
        <h2 class="genre-title">${genreTitle}</h2>
        <div class="games-grid">
          ${gamesHTML}
        </div>
      </div>
    `;
  }

  const genresHTML = Object.entries(gamesByGenre)
    .map(([genre, games]) => renderGenreSection(genre, games))
    .join('');

  container.innerHTML = `
    <div class="content">
      <section class="games-section">
        <h1 class="section-title">Games</h1>
        ${genresHTML}
      </section>
    </div>
  `;
}

