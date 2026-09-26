/* Accessibility Map NAGOYA — privacy-conscious GA4 navigation events. */
(function () {
  function textOf(link) {
    return (link.getAttribute('aria-label') || link.textContent || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 100);
  }

  function eventName(link, url) {
    var host = url.hostname;
    if (host === 'maps.google.com' || host === 'www.google.com') return 'map_directions_click';
    if (host === 'p.sakuramobile.jp') return 'affiliate_click';
    if (host && host !== location.hostname) return 'outbound_click';
    return 'guide_navigation';
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link || link.hasAttribute('download')) return;
    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^mailto:|^tel:/i.test(href)) return;

    var url;
    try { url = new URL(href, location.href); } catch (_) { return; }
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', eventName(link, url), {
      link_url: url.href,
      link_text: textOf(link),
      page_path: location.pathname
    });
  });
}());
