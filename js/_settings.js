export let lt = {
  vers: '3.2',
  times: '&VeryThinSpace;&times;&VeryThinSpace;', // carattere x e spaziatura
  unitSpacing: '&VeryThinSpace;',
  settings: {},

  store_settings: param_obj  => {
    lt.settings = Object.assign({}, lt.settings, param_obj );
    sessionStorage.lt_settings = JSON.stringify(lt.settings);
  }
};
