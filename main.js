/**
 * Main Router - Handles navigation and page rendering
 */

import { renderHome } from './pages/home.js';
import { renderGames } from './pages/games.js';
import { renderAbout } from './pages/about.js';
import { renderStudio } from './pages/studio.js';

const app = document.getElementById('app');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

const routes = {
  '/': renderHome,
  '/games': renderGames,
  '/about': renderAbout,
  '/studio': renderStudio,
};

function getCurrentRoute() {
  return window.location.pathname;
}

function closeNav() {
  document.body.classList.remove('nav-open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}

function renderPage() {
  const route = getCurrentRoute();
  const renderFunction = routes[route] || renderHome;

  document.body.classList.toggle('theme-studio', route === '/studio');
  closeNav();

  app.innerHTML = '';
  renderFunction(app);
  updateActiveNavLink(route);
  window.scrollTo(0, 0);
}

function updateActiveNavLink(route) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === route);
  });
}

function handleNavigation(e) {
  const link = e.target.closest('[data-link]');
  if (!link) return;

  e.preventDefault();
  const href = link.getAttribute('href');
  window.history.pushState({}, '', href);
  renderPage();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

document.addEventListener('click', handleNavigation);
window.addEventListener('popstate', renderPage);

renderPage();
