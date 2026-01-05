/**
 * Main Router - Handles navigation and page rendering
 */

import { renderHome } from './pages/home.js';
import { renderGames } from './pages/games.js';
import { renderAbout } from './pages/about.js';
import { renderStudio } from './pages/studio.js';

const app = document.getElementById('app');

// Route configuration
const routes = {
  '/': renderHome,
  '/games': renderGames,
  '/about': renderAbout,
  '/studio': renderStudio,
};

/**
 * Get current route from URL
 */
function getCurrentRoute() {
  return window.location.pathname;
}

/**
 * Render the appropriate page based on route
 */
function renderPage() {
  const route = getCurrentRoute();
  const renderFunction = routes[route] || renderHome;
  
  app.innerHTML = '';
  renderFunction(app);
  
  // Update active nav link
  updateActiveNavLink(route);
}

/**
 * Update active navigation link
 */
function updateActiveNavLink(route) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === route || (route === '/' && href === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Handle navigation clicks
 */
function handleNavigation(e) {
  const link = e.target.closest('[data-link]');
  if (!link) return;
  
  e.preventDefault();
  const href = link.getAttribute('href');
  
  // Update URL without page reload
  window.history.pushState({}, '', href);
  renderPage();
}

/**
 * Handle browser back/forward buttons
 */
function handlePopState() {
  renderPage();
}

// Event listeners
document.addEventListener('click', handleNavigation);
window.addEventListener('popstate', handlePopState);

// Initial render
renderPage();

