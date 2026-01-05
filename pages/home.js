/**
 * Home Page - Hero section with logo and tagline
 */

export function renderHome(container) {
  container.innerHTML = `
    <div class="content">
      <section class="hero">
        <h1 class="hero-logo">Āthariq</h1>
        <p class="hero-tagline">
          Interactive stories where every choice leaves a trace.
        </p>
        <a href="/games" class="btn btn-primary" data-link>Explore Games</a>
      </section>
    </div>
  `;
}

