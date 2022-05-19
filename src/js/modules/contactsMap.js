export default () => {
  function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.responseType = "json";

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        reject(xhr.response);
      };

      xhr.send();
    });
  };

  function init() {
    let zoom = 16;
    let center = [55.811513, 37.624723];

    contactsMap = new ymaps.Map(
      map, {
      center: center,
      zoom: zoom,
      controls: [],
    }, {
      searchControlProvider: "yandex#search",
    }
    )

    let housesCollection = new ymaps.GeoObjectCollection(null, {
      hideIconOnBalloonOpen: false,
    });

    // contactsMap.behaviors.disable('scrollZoom');
    // contactsMap.behaviors.disable('drag');

    // проходимся по бз и подставляем иконки на карту
    response.forEach((city) => {
      let marActive = `<a data-img="" href="" class="contacts-map__marker"><img src="${icon}"></a>`;

      placemark = new ymaps.Placemark(
        city.coords, {}, {
        iconLayout: ymaps.templateLayoutFactory.createClass(marActive),
        zIndex: 700,
        zIndexHover: 700,
        zIndexActive: 700,
        iconShape: {
          type: "Rectangle",
          coordinates: [
            [55.70, 37.30],
            [55.80, 37.40]
          ],
        },
      });

      housesCollection.add(placemark);
    });

    contactsMap.geoObjects.add(housesCollection);

    if (window.matchMedia("(min-width: 992px)").matches) {
      setCenter(center, 400, 100);
    } else {
      setCenter(center, 0, 0);
    }
  };

  function setCenter(mapCenter, val1, val2) {
    // сдвигаем ценрт карты от блока
    let pixelCenter = contactsMap.getGlobalPixelCenter(mapCenter);

    pixelCenter = [
      pixelCenter[0] - val1,
      pixelCenter[1] - val2
    ];

    let geoCenter = contactsMap.options.get('projection').fromGlobalPixels(pixelCenter, contactsMap.getZoom());

    contactsMap.setCenter(geoCenter);
  };

  const countryBtns = Array.from(document.querySelectorAll(".js-map-country"));
  const map = document.querySelector(".js-map");

  if (!map) return;

  const url = map.dataset.url;
  const icon = map.dataset.mapIcon;
  const heading = document.querySelector(".js-heading");
  const text = document.querySelector(".js-text");
  const links = Array.from(document.querySelectorAll(".contacts-map__link:not(._tel)"));
  const tels = Array.from(document.querySelectorAll(".contacts-map__link._tel"));
  const reqs = Array.from(document.querySelectorAll(".contacts-map__requisites"));
  let response;
  let placemark;
  let contactsMap;

  sendRequest("GET", url)
    .then(data => {
      response = data;

      // инициализируем карту
      ymaps.ready(init);
    })
    .catch(() => {
      // ошибка запроса
    })

  countryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      for (const item of response) {
        if (item.slug == btn.value) {
          contactsMap.setCenter(item.coords);
          const itemEmails = item.emails || ["info@auvix.ru", "www.auvix.ru"];
          const itemTels = item.tels || ["+7 (495) 797-5775", "+7 (926) 797-5775"];
          const itemFeautures = item.feautures || ["ООО «АУВИКС»", "ИНН/КПП 7708651718/771701001", "ОГРН 1077761595064"];

          heading.innerHTML = item.title;
          text.innerHTML = item.adres;

          for (const [index, email] of itemEmails.entries()) {
            links[index].innerHTML = email;
          };

          for (const [index, tel] of itemTels.entries()) {
            tels[index].innerHTML = tel;
          };

          for (const [index, req] of itemFeautures.entries()) {
            reqs[index].innerHTML = req;
          };

          if (window.matchMedia("(min-width: 992px)").matches) {
            setCenter(item.coords, 400, 100);
          } else {
            setCenter(item.coords, 0, 0);
          };

          return;
        }
      };
    });
  });
};
