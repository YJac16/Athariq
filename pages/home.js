/**
 * Home Page - Hero section with logo and tagline
 */

export function renderHome(container) {
  container.innerHTML = `
    <div class="content content-home">
      <section class="hero" aria-label="Āthariq">
        <div class="hero-glow" aria-hidden="true"></div>
        <img
          src="/athariq-logo-no-background.png"
          alt="Āthariq"
          class="hero-logo-img"
          width="708"
          height="195"
        >
        <p class="hero-slogan">The Journey Is the Game.</p>
        <p class="hero-tagline">
          Interactive stories where every choice leaves a trace.
        </p>
        <a href="/games" class="btn btn-primary" data-link>Explore Games</a>
      </section>
    </div>
  `;
}
