/* globals _LT:true */

_LT = (lt => {
  "use strict";

  //viewport info

  lt.content_wrapper.insertAdjacentHTML('afterbegin', '<div class="lt-vpinfo"></div>');

  const lt_vpinfo = lt.content_wrapper.querySelector('.lt-vpinfo'),
  body_font_size = parseFloat(window.getComputedStyle(document.body, null)
    .getPropertyValue('font-size')),
  getViewportSize = function () {
    let body_width = document.body.clientWidth,
      body_width_em = (body_width / body_font_size).toFixed(2),
      body_height = document.body.clientHeight,
      body_height_em = (body_height / body_font_size).toFixed(2);

      lt_vpinfo.innerHTML = '<details><summary>Viewport info</summary>' +
        `${body_width}&VeryThinSpace;&times;&VeryThinSpace;${body_height}&VeryThinSpace;px` +
        '<br>' +
        `${body_width_em}&VeryThinSpace;&times;&VeryThinSpace;${body_height_em}&VeryThinSpace;em` +
        '</details>';
  };

  getViewportSize();
  window.onresize = getViewportSize;

  return lt;

})(_LT || {});
