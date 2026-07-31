/**
 * Games Page - Display available games by genre with genre selection
 */

export function renderGames(container) {
  const gamesByGenre = {
    story: [
      {
        title: 'Echoes of the Last Light',
        titleImage: '/Echoes of the Last Light Title.jpg',
        description:
          'A narrative journey through fading memories and lingering echoes. Every decision shapes the path forward.',
        status: 'Available Now',
        playUrl: 'https://echoes-of-the-last-light-production.up.railway.app/',
      },
    ],
    mystery: [
      {
        title: 'Whispers Before the Silence: Shadows Over Blackthorn Manor',
        titleImage: '/Shadows Over Blackthorn Manor Title.jpg',
        description:
          'A mystery where silence speaks louder than words. Uncover the truth hidden in the spaces between. The first case in the Whispers Before the Silence series.',
        status: 'Available Now',
        playUrl: 'https://wbts-shadows-over-blackthorn-manor-production.up.railway.app/',
        series: 'Whispers Before the Silence',
        episode: 'Episode 1',
      },
    ],
    islamic: [
      {
        title: 'The Path You Choose',
        description:
          'Learn Islam through choices, reflection, and discovery — a calm, respectful journey for new Muslims, lifelong learners, and curious explorers.',
        status: 'Available Now',
        playUrl: 'https://the-path-you-choose.vercel.app/',
        placeholder: true,
      },
    ],
  };

  let selectedGenre = Object.keys(gamesByGenre)[0];

  function renderGameCard(game) {
    const seriesInfo = game.series
      ? `<div class="game-series">${game.series} · ${game.episode}</div>`
      : '';
    const media = game.titleImage
      ? `<img src="${game.titleImage}" alt="" class="game-title-image" loading="lazy">`
      : `<div class="game-art-placeholder" aria-hidden="true"><span>${game.title}</span></div>`;

    return `
      <article class="game-card">
        <div class="game-media">${media}</div>
        <div class="game-body">
          ${seriesInfo}
          <h2 class="game-title">${game.title}</h2>
          <p class="game-description">${game.description}</p>
          <div class="game-meta">
            <span class="game-status">${game.status}</span>
            <a href="${game.playUrl}" class="btn btn-primary game-play-btn" target="_blank" rel="noopener noreferrer">Play</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderGenreContent(games) {
    if (games.length === 0) {
      return `
        <div class="coming-soon">
          <p class="coming-soon-text">Coming Soon</p>
        </div>
      `;
    }

    return `<div class="games-grid">${games.map(renderGameCard).join('')}</div>`;
  }

  function render() {
    const genres = Object.keys(gamesByGenre);
    const genreButtons = genres
      .map(
        (genre) => `
      <button type="button" class="genre-btn ${genre === selectedGenre ? 'active' : ''}" data-genre="${genre}">
        ${genre.charAt(0).toUpperCase() + genre.slice(1)}
      </button>
    `
      )
      .join('');

    container.innerHTML = `
      <div class="content">
        <section class="games-section">
          <h1 class="section-title">Games</h1>
          <div class="genre-selector" role="tablist" aria-label="Game genres">
            ${genreButtons}
          </div>
          <div class="genre-content">
            ${renderGenreContent(gamesByGenre[selectedGenre])}
          </div>
        </section>
      </div>
    `;

    container.querySelectorAll('.genre-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedGenre = btn.getAttribute('data-genre');
        render();
      });
    });
  }

  render();
}
