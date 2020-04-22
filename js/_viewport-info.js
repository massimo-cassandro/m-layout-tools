import {lt} from './_init';

export default function () {
  'use strict';

  //viewport info
  lt.content_wrapper.insertAdjacentHTML('beforeend', '<div class="lt-vpinfo"></div>');

  const lt_vpinfo = lt.content_wrapper.querySelector('.lt-vpinfo'),
    body_font_size = parseFloat(window.getComputedStyle(document.body, null)
      .getPropertyValue('font-size')),
    getViewportSize = function () {
      let body_width = document.body.clientWidth,
        body_width_em = (body_width / body_font_size).toFixed(2),
        body_height = document.body.clientHeight,
        body_height_em = (body_height / body_font_size).toFixed(2);

      lt_vpinfo.innerHTML = `<div class="heading">Viewport info</div>
        ${body_width}${lt.times}${body_height}${lt.unitSpacing}px
        <br>
        ${body_width_em}${lt.times}${body_height_em}${lt.unitSpacing}em`;
    };


  getViewportSize();
  if(ResizeObserver) {

    const resizeObserver = new ResizeObserver(() => {
      getViewportSize();
    });

    resizeObserver.observe(document.body);

  } else {
    window.onresize = getViewportSize; // safari, ie
  }
}
