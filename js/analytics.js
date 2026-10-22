/* -------------------------------------------------
   Google Analytics 4 with a cookie consent banner.
   Nothing is loaded from Google until the visitor
   clicks "Accepter" (loi 09-08 / RGPD).
   ------------------------------------------------- */
const GA_MEASUREMENT_ID = 'G-0W5B3CG93C';
const CONSENT_KEY = 'analyticsConsent';

function readConsent() {
  try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
}

function saveConsent(value) {
  try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* storage blocked */ }
}

let gaLoaded = false;

function loadAnalytics() {
  if (gaLoaded) return;
  gaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);
}

// Contact clicks (phone, WhatsApp, e-mail) reported as GA4 events
function trackContactClicks() {
  document.addEventListener('click', e => {
    if (!gaLoaded) return;
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    let method = null;
    if (href.startsWith('tel:')) method = 'phone';
    else if (href.startsWith('mailto:')) method = 'email';
    else if (href.includes('wa.me/')) method = 'whatsapp';
    if (!method) return;

    gtag('event', 'contact_click', { method: method, link_url: href });
  });
}

function showBanner() {
  if (document.querySelector('.cookie-banner')) return;

  const dict = translations[document.documentElement.lang] || translations.fr;
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Cookies');
  banner.innerHTML = `
    <p data-i18n="cookie_text">${dict.cookie_text}</p>
    <div class="cookie-actions">
      <button type="button" class="btn btn-ghost" data-consent="denied" data-i18n="cookie_decline">${dict.cookie_decline}</button>
      <button type="button" class="btn" data-consent="granted" data-i18n="cookie_accept">${dict.cookie_accept}</button>
    </div>`;

  banner.querySelectorAll('[data-consent]').forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.consent;
      saveConsent(choice);
      if (choice === 'granted') loadAnalytics();
      banner.remove();
    });
  });

  document.body.appendChild(banner);
}

document.addEventListener('DOMContentLoaded', () => {
  trackContactClicks();

  const consent = readConsent();
  if (consent === 'granted') loadAnalytics();
  else if (consent !== 'denied') showBanner();

  // Footer link to change the choice later
  document.querySelectorAll('.cookie-settings').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      try { localStorage.removeItem(CONSENT_KEY); } catch (err) { /* storage blocked */ }
      showBanner();
    });
  });
});
