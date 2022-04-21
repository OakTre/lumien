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

  const countryBtns = Array.from(document.querySelectorAll(".js-map-country"));
  const map = document.querySelector(".js-map");
  const url = '/assets/include/countries.json';
  const heading = document.querySelector(".js-heading");
  const text = document.querySelector(".js-text");
  let response;
  let placemark;
  let contactsMap;

  sendRequest("GET", url)
    .then(data => {
      response = data;

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
          let marActive = `<a data-img="" href="" class="contacts-map__marker"><img src="images/map-logo.svg"></a>`

          let infoCoordinates = [
            [55.70, 37.30],
            [55.80, 37.40]
          ];

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
          // сдвигаем ценрт карты от блока
          let pixelCenter = contactsMap.getGlobalPixelCenter(center);

          pixelCenter = [
            pixelCenter[0] - 400,
            pixelCenter[1] - 100
          ];

          let geoCenter = contactsMap.options.get('projection').fromGlobalPixels(pixelCenter, contactsMap.getZoom());

          contactsMap.setCenter(geoCenter);
        } else {
          // сдвигаем ценрт карты от блока
          let pixelCenter = contactsMap.getGlobalPixelCenter(center);

          pixelCenter = [
            pixelCenter[0] - 0,
            pixelCenter[1] - 0
          ];

          let geoCenter = contactsMap.options.get('projection').fromGlobalPixels(pixelCenter, contactsMap.getZoom());

          contactsMap.setCenter(geoCenter);
        }

      }

      // инициализируем карту
      ymaps.ready(init);
    })
    .catch(() => {
      // ошибка запроса
    })

  countryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sendRequest("GET", url)
        .then(data => {
          data.forEach(country => {
            if (country.slug == btn.value) {
              contactsMap.setCenter(country.coords);

              heading.innerHTML = country.title;
              text.innerHTML = country.adress;
            }
          });
        })
        .catch(() => {
          // ошибка запроса
        });
    });
  });
};
