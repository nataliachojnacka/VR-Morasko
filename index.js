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
      closeOnClick: true,
      className: "tooltip",
      maxWidth: "none",
      offset: 24,
    });

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
      const feature = e.features[0];

      const coordinates = feature.geometry.coordinates.slice();
      const fullName = feature.properties.fullname;
      const photo = feature.properties.photo;
      const address = feature.properties.address;
      const url = feature.properties.url;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      popup
        .setLngLat(coordinates)
        .setHTML(getPopupHtml(fullName, address, photo, url))
        .addTo(map);
    });

    map.on("mouseleave", "departments", () => {
      map.getCanvas().style.cursor = "";
    });

    map.on("mouseenter", "departments", () => {
      map.getCanvas().style.cursor = "pointer";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    dialog: document.getElementsByClassName("dialog")[0],
    buttonDialogClose: document.getElementsByClassName(
      "dialog__button--close"
    )[0],
    buttonInfo: document.getElementsByClassName("button__info")[0],
  };

  const dialogAccepted = JSON.parse(localStorage.getItem("dialogAccepted"));

  const manageDialogOnInit = () => {
    if (!dialogAccepted) {
      showDialog();
    }
  };

  const hideDialog = () => {
    elements.dialog.classList.add("hide");
    localStorage.setItem("dialogAccepted", true);
  };
  const showDialog = () => {
    elements.dialog.classList.remove("hide");
  };
  elements.buttonDialogClose.addEventListener("click", hideDialog);
  elements.buttonInfo.addEventListener("click", showDialog);
  manageDialogOnInit();
});
