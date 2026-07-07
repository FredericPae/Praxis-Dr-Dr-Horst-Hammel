// Progressive enhancement: mark that JS is active (so CSS only hides
// reveal elements when JS can bring them back), then reveal sections gently
// as they scroll into view. No external requests. Respects users without
// IntersectionObserver by simply showing everything.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('.reveal');
  if (els.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  els.forEach(function (el) { observer.observe(el); });
});
