// Switches the unit grid between HubSpot's default domain matching and matching on the buying-unit ID.
(function () {
  var list = document.querySelector('.agencies');
  var buttons = document.querySelectorAll('.mode');
  var records = document.querySelector('[data-count="records"]');
  var rejected = document.querySelector('[data-count="rejected"]');
  function set(btn) {
    var mode = btn.getAttribute('data-mode');
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
    list.setAttribute('data-mode', mode);
    records.textContent = btn.getAttribute('data-records');
    rejected.textContent = btn.getAttribute('data-rejected');
    list.querySelectorAll('.unit').forEach(function (u) {
      var s = u.querySelector('.unit-status');
      var ok = mode === 'unit' || u.getAttribute('data-kept-domain') === 'true';
      s.textContent = s.getAttribute(ok ? 'data-ok' : 'data-bad');
    });
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { set(b); }); });
})();
