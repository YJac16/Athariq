/**
 * Games Page - Display available games by genre with genre selection
 */

export function renderGames(container) {
  const gamesByGenre = {
    story: [
      {
        title: 'Echoes of the Last Light',
        description: 'A narrative journey through fading memories and lingering echoes. Every decision shapes the path forward.',
        status: 'Available Now',
        playUrl: 'https://echoes-of-the-last-light-production.up.railway.app/',
      },
    ],
    mystery: [
      {
        title: 'Whispers Before the Silence: Shadows Over Blackthorn Manor',
        description: 'A mystery where silence speaks louder than words. Uncover the truth hidden in the spaces between. The first case in the Whispers Before the Silence series.',
        status: 'In Development',
        playUrl: '#', // Replace with actual game URL when available
        series: 'Whispers Before the Silence',
        episode: 'Episode 1',
      },
    ],
    islamic: [], // Coming soon
  };

  // Default to first genre
  let selectedGenre = Object.keys(gamesByGenre)[0];

  function renderGameCard(game) {
    const seriesInfo = game.series ? `<div class="game-series">${game.series} - ${game.episode}</div>` : '';
    
    return `
      <div class="game-card">
        ${seriesInfo}
        <h2 class="game-title">${game.title}</h2>
        <p class="game-description">${game.description}</p>
        <div class="game-meta">
          <span class="game-status">${game.status}</span>
        </div>
        <a href="${game.playUrl}" class="btn game-play-btn" target="_blank" rel="noopener noreferrer">Play</a>
      </div>
    `;
  }

  function renderGenreContent(genreName, games) {
    const genreTitle = genreName.charAt(0).toUpperCase() + genreName.slice(1);
    
    if (games.length === 0) {
      // Coming soon section for empty genres
      return `
        <div class="coming-soon">
          <p class="coming-soon-text">Coming Soon</p>
        </div>
      `;
    }

    const gamesHTML = games.map(renderGameCard).join('');
    
    return `
      <div class="games-grid">
        ${gamesHTML}
      </div>
    `;
  }

  function render() {
    const genres = Object.keys(gamesByGenre);
    const genreButtons = genres
      .map(
        (genre) => `
      <button class="genre-btn ${genre === selectedGenre ? 'active' : ''}" data-genre="${genre}">
        ${genre.charAt(0).toUpperCase() + genre.slice(1)}
      </button>
    `
      )
      .join('');

    const selectedGames = gamesByGenre[selectedGenre];
    const content = renderGenreContent(selectedGenre, selectedGames);

    container.innerHTML = `
      <div class="content">
        <section class="games-section">
          <h1 class="section-title">Games</h1>
          <div class="genre-selector">
            ${genreButtons}
          </div>
          <div class="genre-content">
            ${content}
          </div>
        </section>
      </div>
    `;

    // Add event listeners to genre buttons
    const genreButtonsEl = container.querySelectorAll('.genre-btn');
    genreButtonsEl.forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedGenre = btn.getAttribute('data-genre');
        render();
      });
    });
  }

  render();
}

