/* globals _LT:writable */

_LT = (lt => {
  'use strict';

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

  return lt;

})(_LT || {});
