/**
 * layout_tools.js - 4 / Massimo Cassandro / 2016-2020
 */

import {lt} from './_settings';
import lt_ui from './_ui';
import lt_brkpt from './_breakpoints';
import lt_viewport_info from './_viewport-info';
import lt_device_info from './_device-Info';
import lt_imgs_info from './_imgs-info';


(() => {

  const stored_settings = sessionStorage[lt.storage_key]? JSON.parse(sessionStorage[lt.storage_key]) : {};
  lt.settings = Object.assign({}, lt.settings , stored_settings);


  // load css and init
  let currentScript = document.currentScript;
  lt.currentDir = currentScript.src.split('?')[0];
  lt.currentDir = lt.currentDir.substring(0, lt.currentDir.lastIndexOf('/'));

  lt.framework = currentScript.dataset.fw || 'bootstrap4';
  lt.css = currentScript.dataset.css || lt.currentDir + '/layout_tools.css';

  let lt_css_el = document.createElement('link');
  lt_css_el.onload = function() {
    lt_ui();
    lt_brkpt();
    lt_viewport_info();
    lt_device_info();
    lt_imgs_info();
  };
  lt_css_el.href = lt.css + '?v=' + lt.vers;
  lt_css_el.rel =  'stylesheet';
  lt_css_el.type = 'text/css';
  lt_css_el.media = 'screen';
  document.head.appendChild(lt_css_el);

})();
