import departments from "./departments.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmF0YWxpYWNob2puYWNrYSIsImEiOiJjanZ4Z202dDAwNGlrNGJtcXF1a3lhbXh1In0.djjjVEHUcv59eZ5zS8Jucg";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/nataliachojnacka/ckyizypw09flx14nu925dznzr",
  center: [16.9317, 52.4665],
  zoom: 15.2,
  // https://docs.mapbox.com/mapbox-gl-js/example/restrict-bounds/
  maxBounds: [
    [16.619, 52.271],
    [17.27, 52.581],
  ],
});

map.addControl(new mapboxgl.NavigationControl());

map.on("load", () => {
  map.loadImage("./assets/education.png", (error, image) => {
    if (error) throw error;
    map.addImage("education", image);

    map.addSource("departments", departments);

    map.addLayer({
      id: "departments",
      type: "symbol",
      source: "departments",
      layout: {
        "icon-image": "education",
        "icon-size": 0.11,
      },
    });
    const popup = new mapboxgl.Popup({
      closeButton: true,
      // dzięki true jak klikniemy poza dialog to zamknie się
      closeOnClick: true,
      className: "tooltip",
      maxWidth: "none",
      offset: 24,
    });

    // metoda zwracjąca stringa z HTMLem popupu
    // budujemy go z danych ficzera za pomocą template stringów
    const getPopupHtml = (name, address, photo, url) => {
      return `<div class="popup__header">${name}</div>
      <div class="popup__address">${address}</div>
      <div class="photo__wrapper">
      <img class="popup__photo" src="${photo}">
      </div>
    <div class="popup__button">
    <a href="${url}">Zobacz</a>
    </div>
      `;
    };

    map.on("click", "departments", (e) => {
      // wyciągamy ficzer z danych
      const feature = e.features[0];

      const coordinates = feature.geometry.coordinates.slice();
      const fullName = feature.properties.fullname;
      const photo = feature.properties.photo;
      const address = feature.properties.address;
      const url = feature.properties.url;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // ustawiamy HTML popupu na to co zwróci metoda getPopupHtml
      popup
        .setLngLat(coordinates)
        .setHTML(getPopupHtml(fullName, address, photo, url))
        .addTo(map);
    });
    // zmiana kursora na zjechane z ficzra
    map.on("mouseleave", "departments", () => {
      map.getCanvas().style.cursor = "";
    });
    // zmiana kursora na najechanie
    map.on("mouseenter", "departments", () => {
      map.getCanvas().style.cursor = "pointer";
    });
  });
});

// nasłuchiwanie na event DOMContentLoaded (załadowanie DOM) i wtedy wywołanie funkcji dialogywch. Trzeba czekać, żeby DOM się załadował, bo wcześniej nie ma jeszcze elementów DOM.
document.addEventListener("DOMContentLoaded", () => {
  // obiekt z elementami DOM, żeby później za każdym razem nie wywoływać getElementsByClassName jak chcemy coś z którymś zrobić
  const elements = {
    dialog: document.getElementsByClassName("dialog")[0],
    buttonDialogClose: document.getElementsByClassName(
      "dialog__button--close"
    )[0],
    buttonInfo: document.getElementsByClassName("button__info")[0],
  };

  // wyciągnięcie z Local Storage zmiennej dialogAccepted i przypisanie jej do zmiennej dialogAccepted. JSON.parse musi być bo z LS wszystko wychodzi jako string i chcemy to zamienić na obiekt
  const dialogAccepted = JSON.parse(localStorage.getItem("dialogAccepted"));

  // funckja uruchamiana od razu po załadowaniu DOM (na samym dole). Sprawdza czy zaakceptowaliśmy już dialog - jeśli tak to nie wyświetla go, jeśli nie to dialog jest wyświetlany na start
  const manageDialogOnInit = () => {
    if (!dialogAccepted) {
      showDialog();
    }
  };
  // funckja ukrywająca dialog
  const hideDialog = () => {
    // dodanie klasy hide
    elements.dialog.classList.add("hide");
    // po ukryciu dialogu zapisujemy do LS, że już go widzieliśmy i wtedy się nie wyświetla na start
    localStorage.setItem("dialogAccepted", true);
  };
  // wyświetlenie dialog
  const showDialog = () => {
    // usunięcie klasy hide
    elements.dialog.classList.remove("hide");
  };
  // przypięcie listenera do przycisku zamykającego dialog
  elements.buttonDialogClose.addEventListener("click", hideDialog);
  // przypięcie listenera do przycisku otwierającego dialog
  elements.buttonInfo.addEventListener("click", showDialog);
  // wywołanie metody sprawdzającej czy otworzyć dialog na start
  manageDialogOnInit();
});
