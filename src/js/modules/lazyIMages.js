import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import canUseWebp from '../helpers/canUseWebp';

export default () => {
  lazySizes.cfg.lazyClass = 'lazy';

  if (canUseWebp() === false) {
    const lazyBgItems = document.querySelectorAll('.lazy[data-bg-fallback]');

    lazyBgItems.forEach((item) => {
      const srcBgFallback = item.getAttribute('data-bg-fallback');

      item.setAttribute('data-bg', srcBgFallback);
    });
  };

  document.addEventListener('lazybeforeunveil', function (e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
      e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });

  // window.lumien_API.updateLazyLoad = () => {
  //   lazyLoadInstance.restoreAll();
  //   lazyLoadInstance.update();
  // }
};
