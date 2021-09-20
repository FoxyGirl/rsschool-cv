;(function() {
  /**** Adaptive Menu ****/
  'use strict';

  const navToggler = document.getElementById('navToggler');

  if (!navToggler) { return };

  const mainNav = document.getElementById('mainNav');

  mainNav.classList.add('main-nav__list--hidden');

  navToggler.addEventListener('click', function() {
    this.classList.toggle('main-nav__toggler--close');
    mainNav.classList.toggle('main-nav__list--hidden');
  });
})();

;(function() {
  /**** Scroll to anchor ****/
  const elNav = document.querySelectorAll('#mainNav a');

  for (let i = 0; i < elNav.length; i++) {
      elNav[i].addEventListener('click', scrollToAnchor);
  }

  function scrollToAnchor(e) {
    e.preventDefault();
    let hash = this.href;
    hash = hash.slice(hash.search(/#/i));  // id of element for scrolling

     // indent from browser window to id
    const t = document.querySelector(hash).getBoundingClientRect().top;

    window.scroll({
      top: t, 
      left: 0, 
      behavior: 'smooth'
    });
  }
})();

;(function () {
  /**** Scroll to the top of the page ****/
  'use strict';
 
  const HEIGHT_SHOW = 50;
  const el = document.getElementById('toUp');

  window.onscroll = function () {
    el.style.display = (window.pageYOffset > HEIGHT_SHOW ? 'block' : 'none');
  };

  el.addEventListener('click', function(e) {
    e.preventDefault();
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }, false);
})();