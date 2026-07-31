/**
 * About Page - Brand philosophy and mission
 */

export function renderAbout(container) {
  container.innerHTML = `
    <div class="content">
      <section class="page-section about-section">
        <h1 class="page-title">About</h1>
        <div class="page-content">
          <p>
            <strong>Āthariq</strong> makes story-driven games built for immersion—
            the kind that stay with you after the screen goes dark.
          </p>
          <blockquote class="about-pull">
            <p>
              Our name comes from the Arabic <strong>Ṭarīq</strong> —
              <em>path</em> or <em>journey</em>.
            </p>
          </blockquote>
          <p>
            What matters isn't only where a story ends, but how it feels to walk through it.
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
