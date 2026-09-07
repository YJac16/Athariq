/**
 * 404 Page - Branded empty state for unknown routes
 */

export function renderNotFound(container) {
  container.innerHTML = `
    <div class="content">
      <section class="not-found" aria-labelledby="not-found-title">
        <div class="not-found-glow" aria-hidden="true"></div>
        <img
          src="/athariq-logo-vector-no-background.png"
          alt=""
          class="not-found-logo"
          width="40"
          height="48"
        >
        <p class="not-found-code" aria-hidden="true">404</p>
        <h1 id="not-found-title" class="not-found-title">Page not found</h1>
        <p class="not-found-message">
          This path doesn't lead anywhere yet. Let's get you back on track.
        </p>
        <a href="/" class="btn btn-primary" data-link>Home</a>
      </section>
    </div>
  `;
}
