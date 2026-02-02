/**
 * About Page - Brand philosophy and mission
 */

export function renderAbout(container) {
  container.innerHTML = `
    <div class="content">
      <section class="page-section">
        <h1 class="page-title">About</h1>
        <div class="page-content">
          <p>
            <strong>Athariq Games Studio</strong> makes story-driven games built for immersion—
            the kind that stay with you after the screen goes dark.
          </p>
          <p>
            Our name, <strong>Athariq</strong>, comes from the Arabic word <strong>Ṭarīq</strong>,
            meaning <em>path</em> or <em>journey</em>. It's a reminder that what matters isn't only
            where a story ends, but how it feels to walk through it.
          </p>
          <p>
            We craft original worlds with strong atmosphere—places you can almost hear breathe.
            Every choice is designed to mean something: to reveal character, test conviction, and
            quietly reshape the road ahead.
          </p>
          <p>
            We hope each title becomes a path worth taking—one you remember, and one that leaves
            a trace.
          </p>
        </div>
      </section>
    </div>
  `;
}
