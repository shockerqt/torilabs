document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById('navMenu');
  const bsOffcanvas = new bootstrap.Offcanvas(menu);
  document.getElementById("hamburger").addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});