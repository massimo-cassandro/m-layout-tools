export let lt = {
  vers: '3.0'
};

export default function() {
  'use strict';

  // init
  let currentScript = document.currentScript;
  lt.currentDir = currentScript.src.split('?')[0];
  lt.currentDir = lt.currentDir.substring(0, lt.currentDir.lastIndexOf('/'));

  lt.framework = currentScript.dataset.fw || 'bootstrap4';
  lt.css = currentScript.dataset.css || lt.currentDir + '/layout_tools.css';

  // load css
  document.head.insertAdjacentHTML('beforeend',
    '<link rel="stylesheet" href="' + lt.css + '?v=' + lt.vers + '" type="text/css" media="all">'
  );

  // load settings from storage
  const default_settings = {
    hidden: false,
    pictures_info: false
  };

  const stored_settings = sessionStorage.lt_settings? JSON.parse(sessionStorage.lt_settings) : {};
  lt.settings = Object.assign({}, default_settings, stored_settings );


  lt.store_settings = (( param_obj ) => {
    lt.settings = Object.assign({}, lt.settings, param_obj );
    sessionStorage.lt_settings = JSON.stringify(lt.settings);
  });
}
