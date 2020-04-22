import {lt} from './_init';

//TODO imgs without picture and with size attribute

export default function () {
  'use strict';

  //ui
  lt.content_wrapper.insertAdjacentHTML('beforeend',
    '<div><label><input type="checkbox" class="lt-pictures-info-trigger">Pictures info</label</div>'
  );

  let pictures = document.getElementsByTagName('picture');

  const picturesInfoTrigger = lt.content_wrapper.querySelector('.lt-pictures-info-trigger'),
    removePicturesInfo = () => {
      document.querySelectorAll('.lt-picture-info-wrapper').forEach(item => {
        item.remove();
      });
    },
    shortenSrcString = (str) => {
      // mantiene solo gli ultimi due elementi del path
      const shortenSrc = src => {
        let srcElements = src.trim().split('/'),
          strPrefix = srcElements.length > 2? '[&hellip;] /' : '';
        return `<span title="${src}">${strPrefix}${srcElements.slice(-2).join('/')}</span>`;
      };

      return str.split(',').map(item => {
        return shortenSrc(item);
      }).join(',<br>');
    },
    formatPropValue = (prop, value) => {
      if(value) {
        if(['src', 'currentSrc', 'srcset'].indexOf(prop) !== -1 ) {
          return shortenSrcString(value);
        } else {
          return value;
        }
      } else {
        return '&mdash;';
      }
    },

    //img info
    showPicturesInfo = () => {

      [...pictures].forEach(element => {

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
            rows += `<tr>
              <th scope="row">${prop}</th>
              <td class="lt-pct-${prop}">${formatPropValue(prop, element_img[prop])}</td>
            </tr>`;
          });

          return rows;
        };

        element.insertAdjacentHTML('afterend',
          `<details class="lt-picture-info-wrapper">
            <summary>Info</summary>
            <table>
              <tbody>
                ${img_info_rows()}
              </tbody>
            </table>
          </details>`
        );



      }); // end foreach
    }, // end showPicturesInfo

    updPicturesInfo = () => {
      const upd_img_props = [
        'currentSrc',
        'width',
        'height'
      ];
      [...pictures].forEach(pct => {
        upd_img_props.forEach(prop => {
          let element_img = pct.querySelector('img');
          pct.querySelector(`td.lt-pct-${prop}`).innerHTML =
            formatPropValue(prop, element_img[prop]);
        });
      }); // end foreach


    }; // end updPicturesInfo

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

  if(ResizeObserver) {

    const resizeObserver = new ResizeObserver(() => {
      if( picturesInfoTrigger.checked ) {
        updPicturesInfo();
      }
    });

    resizeObserver.observe(document.body);

  } else {
    window.onresize = function () {
      if( picturesInfoTrigger.checked ) {
        updPicturesInfo();
      }
    }; // safari, ie
  }

}
