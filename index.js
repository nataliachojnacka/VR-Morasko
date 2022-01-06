import departments from "./departments.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmF0YWxpYWNob2puYWNrYSIsImEiOiJjanZ4Z202dDAwNGlrNGJtcXF1a3lhbXh1In0.djjjVEHUcv59eZ5zS8Jucg";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [16.933, 52.466],
  zoom: 14.5,
});

map.addControl(new mapboxgl.NavigationControl());

map.on("load", () => {
  map.loadImage("./education.png", (error, image) => {
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
      closeButton: false,
      closeOnClick: false,
      className: "tooltip",
      maxWidth: "none",
    });

    map.on("mouseenter", "departments", (e) => {
      map.getCanvas().style.cursor = "pointer";

      const coordinates = e.features[0].geometry.coordinates.slice();
      const fullName = e.features[0].properties.fullname;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      popup.setLngLat(coordinates).setHTML(fullName).addTo(map);
    });

    map.on("mouseleave", "departments", () => {
      map.getCanvas().style.cursor = "";
      popup.remove();
    });

    map.on("click", "departments", (e) => {
      location.href = e.features[0].properties.url;
    });
  });
});
