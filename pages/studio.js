/**
 * Studio Page - Information about parent studio
 */

export function renderStudio(container) {
  container.innerHTML = `
    <div class="content">
      <section class="page-section">
        <h1 class="page-title">Studio</h1>
        <div class="page-content">
          <p>
            Āthariq is an interactive games label by
          </p>
          <div class="studio-logo-container">
            <img src="/Nuriya Studios Logo.png" alt="Nūriya Studio" class="studio-logo">
          </div>
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <a href="https://nuriya-studio-production.up.railway.app/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Visit Nūriya Studio
          </a>
        </div>
      </section>
    </div>
  `;
}




