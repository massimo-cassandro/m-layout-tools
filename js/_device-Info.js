import {lt} from './_init';

export default function () {
  'use strict';

  //device info

  lt.content_wrapper.insertAdjacentHTML('afterbegin', '<div class="lt-device-info"></div>');

  const lt_dinfo = lt.content_wrapper.querySelector('.lt-device-info');

  lt_dinfo.innerHTML = '<details><summary>Device info</summary>' +
    `<strong>userAgent</strong>: ${window.navigator.userAgent}<br>` +
    `<strong>devicePixelRatio</strong>: ${window.devicePixelRatio}<br>` +
    `<strong>screen.width</strong>: ${window.screen.width}&VeryThinSpace;px<br>` +
    `<strong>screen.height</strong>: ${window.screen.height}&VeryThinSpace;px` +
    '</details>';

  return lt;

}
