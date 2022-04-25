// js-tabs-container - на контейнер
// js-tab-content, data-content="<tab-value>" - на подменяемый контент

export default () => {
  const menuTabsContainerElems = document.querySelectorAll('.js-tabs-container');

  menuTabsContainerElems.forEach(menuTabsContainer => {
    const menuTabs = menuTabsContainer.querySelectorAll('.js-tab');
    const contentElems = menuTabsContainer.querySelectorAll('.js-tab-content');

    menuTabs.forEach((tab, index) => {
      if (tab.hasAttribute('checked')) {
        contentElems[index].classList.add('mod-show');
      } else {
        contentElems[index].classList.remove('mod-show');
      };

      tab.onchange = () => {
        contentElems.forEach(contentElem => {
          if (contentElem.getAttribute('data-content') === tab.value) {
            contentElem.classList.add('mod-show');
          } else {
            contentElem.classList.remove('mod-show');
          }
        });
      };
    });
  });
};
