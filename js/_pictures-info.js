import {lt} from './_init';

//TODO imgs without picture and with size attribute

export default function () {
  'use strict';

  //ui
  lt.content_wrapper.insertAdjacentHTML('afterbegin',
    '<div><label><input type="checkbox" class="lt-pictures-info-trigger"> Pictures info</label</div>'
  );

  let pictures = document.getElementsByTagName('picture');

  const picturesInfoTrigger = lt.content_wrapper.querySelector('.lt-pictures-info-trigger'),
    removePicturesInfo = () => {
      [...pictures].forEach(element => {
        element.querySelector('.lt-picture-info-wrapper').remove();
        element.classList.remove('lt-position-relative');
      });
    },

    //img info
    showPicturesInfo = () => {

      [...pictures].forEach(element => {
      // detect if picture element is positioned
        let element_position = window.getComputedStyle(element).getPropertyValue('position');

        const img_info_rows = () => {
          const img_props = [
            'src',
            'currentSrc',
            'srcset',
            'sizes',
            'media',
            'width',
            'height',
            'naturalWidth',
            'naturalHeight',
            'id',
            'className'
          //'attributes'
          ];

          let rows = '',
            element_img = element.querySelector('img');

          img_props.forEach(prop => {
            rows += `<tr><th scope="row">${prop}</th><td>${element_img[prop]? element_img[prop] : '&mdash;'}</td></tr>`;
          });

          return rows;
        };

        element.insertAdjacentHTML('beforeend',
          `<div class="lt-picture-info-wrapper">
          <details>
            <summary>Info</summary>
            <table>
              <tbody>
                ${img_info_rows()}
              </tbody>
            </table>
          </details>
        </div>`
        );

        if( element_position === 'static' ) {
          element.classList.add('lt-position-relative');
        }

      }); // end foreach
    }; // end showPicturesInfo


  picturesInfoTrigger.addEventListener('click', () => {
    lt.store_settings({pictures_info: picturesInfoTrigger.checked});

    if( picturesInfoTrigger.checked ) {
      showPicturesInfo();
    } else {
      removePicturesInfo();
    }
  }, false);

  if(lt.settings.pictures_info) {
    showPicturesInfo();
    picturesInfoTrigger.checked = true;
  }

}
