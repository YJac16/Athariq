/**
 * Studio Page - Parent studio (Nūriya)
 */

export function renderStudio(container) {
  container.innerHTML = `
    <div class="content">
      <section class="studio-page" aria-label="Nūriya Studios">
        <div class="studio-mark">
          <img
            src="/nuriya-logo-and-name-no-background.png"
            alt="Nūriya Studios"
            class="studio-title-img"
            width="564"
            height="468"
          >
        </div>
        <p class="studio-lead">
          Āthariq is an interactive games label by Nūriya Studios.
        </p>
        <a
          href="https://nuriya-studio-production.up.railway.app/"
          class="btn btn-primary studio-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Nūriya Studios
        </a>
      </section>
    </div>
  `;
}
