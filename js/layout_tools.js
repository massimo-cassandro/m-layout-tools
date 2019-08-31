/* eslint no-console: 0, no-unused-vars: 0, no-empty:  0 */
/* exported _LT */
/*
 * layout_tools.js - 2.0 / Massimo Cassandro / 2018-2019
*/

/*
  @codekit-append '_load-settings.js'
  @codekit-append '_ui.js'
  @codekit-append '_breakpoints.js'
  @codekit-append '_viewport-info.js'
	@codekit-append '_device-info.js'
  @codekit-append '_pictures-info.js'
*/

var _LT = (() => {
  'use strict';

  let lt = {
    vers: '2.0'
  };

  let currentScript = document.currentScript;
  lt.currentDir = currentScript.src.split('?')[0];
  lt.currentDir = lt.currentDir.substring(0, lt.currentDir.lastIndexOf('/'));

  lt.framework = currentScript.dataset.fw || 'bootstrap4';

  // load css
  document.head.insertAdjacentHTML('beforeend',
    '<link rel="stylesheet" href="' + lt.currentDir + '/layout_tools.css?v=' + lt.vers + '" type="text/css" media="all">'
  );
  return lt;
})();

