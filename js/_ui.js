import {lt} from './_init';

export default function () {
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

  // layout tools e sf toolbar invisibili invisibile
  const hide_btn = lt.content_wrapper.querySelector('.lt-hide-show'),
    sf_toolbar = document.querySelector('.sf-toolbar'),
    set_hidden = (add_storage) => {
      lt.wrapper.classList.toggle('lt-hidden');
      let is_hidden = lt.wrapper.classList.contains('lt-hidden');
      if(sf_toolbar) {
        sf_toolbar.toggleAttribute('hidden', is_hidden);
      }
      hide_btn.innerHTML = is_hidden ? 'Mostra' : 'Nascondi';
      if(add_storage) {
        lt.store_settings({hidden: is_hidden});
      }
    };

  hide_btn.addEventListener('click', () => {
    set_hidden(true);
  },false);

  if(lt.settings.hidden) {
    set_hidden(false);
  }
}
