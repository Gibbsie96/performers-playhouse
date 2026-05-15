(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var sticky = document.querySelector('.sticky-cta');
  var triggers = document.querySelectorAll('[data-sticky-trigger]');
  if (!sticky || !triggers.length || !('IntersectionObserver' in window)) return;

  var state = new Map();
  triggers.forEach(function (el) { state.set(el, false); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { state.set(e.target, e.isIntersecting); });
    var anyVisible = false;
    state.forEach(function (visible) { if (visible) anyVisible = true; });
    sticky.classList.toggle('is-visible', !anyVisible);
  }, { threshold: 0 });

  triggers.forEach(function (el) { io.observe(el); });
})();
