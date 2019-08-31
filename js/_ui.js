/* globals _LT:true */

_LT = (lt => {
  'use strict';

  const wrapper_id = 'lt-wrapper';

  document.body.insertAdjacentHTML('beforeend', '<div id="' + wrapper_id + '" class="lt-collapsed"></div>');
  lt.wrapper = document.getElementById(wrapper_id);

  lt.wrapper.innerHTML = `<div class="lt-inner-wrapper">
      <div class="lt-content">
        <div role="button" class="lt-hide-show">Nascondi</div>
      </div>
      <div class="lt-brkpt">&#x2732;</div>
    </div>`;

  lt.content_wrapper = document.querySelector('#' + wrapper_id + ' .lt-content');
  lt.brkpt_wrapper = document.querySelector('#' + wrapper_id + ' .lt-brkpt');

  // contrazione wrapper
  lt.brkpt_wrapper.addEventListener('click', function () {
    lt.wrapper.classList.toggle('lt-collapsed');
  }, false);

  // wrapper invisibile
  const set_hidden = (add_storage) => {
    lt.wrapper.classList.toggle('lt-hidden');
    let is_hidden = lt.wrapper.classList.contains('lt-hidden');
    hide_btn.innerHTML = is_hidden ? 'Mostra' : 'Nascondi';
    if(add_storage) {
      lt.store_settings({hidden: is_hidden});
    }
  };
  const hide_btn = lt.content_wrapper.querySelector('.lt-hide-show');
  hide_btn.addEventListener('click', () => {
    set_hidden(true);

  },false);

  if(lt.settings.hidden) {
    set_hidden(false);
  }

  return lt;

})(_LT || {});
