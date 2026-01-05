/**
 * Studio Page - Information about parent studio
 */

export function renderStudio(container) {
  container.innerHTML = `
    <div class="content">
      <section class="page-section">
        <div class="studio-title-logo">
          <img src="/Nuriya Studios Logo.png" alt="Nūriya Studios" class="studio-title-img">
        </div>
        <div class="page-content">
          <p>
            Āthariq is an interactive games label by Nūriya Studios.
          </p>
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <a href="https://nuriya-studio-production.up.railway.app/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Visit Nūriya Studios
          </a>
        </div>
      </section>
    </div>
  `;
}




