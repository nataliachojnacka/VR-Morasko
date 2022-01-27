export default {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    name: "departments",
    crs: {
      type: "name",
      properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
    },
    features: [
      {
        type: "Feature",
        properties: {
          id: 1,
          name: "wngig",
          fullname: "Wydział Nauk Geograficznych i Geologicznych",
          url: "./wngig.html",
          address: "Bogumiła Krygowskiego 10, Poznań",
          photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwngig.amu.edu.pl%2Fen&psig=AOvVaw3MrgB5y5y8qJYokC9hwyeo&ust=1643383728148000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiEoM-f0vUCFQAAAAAdAAAAABAD",
        },
        geometry: {
          type: "Point",
          coordinates: [16.94220414875093, 52.46392399306373],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 2,
          name: "fiz",
          fullname: "Wydział Fizyki",
          url: "./fiz.html",
        },
        geometry: {
          type: "Point",
          coordinates: [16.929754370544792, 52.46667142125995],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 3,
          name: "wmi",
          fullname: "Wydział Matematyki i Informatyki",
          url: "./wmi.html",
        },
        geometry: {
          type: "Point",
          coordinates: [16.927057431998357, 52.46693663501232],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 4,
          name: "bio",
          fullname: "Wydział Biologii",
          url: "./bio.html",
        },
        geometry: {
          type: "Point",
          coordinates: [16.9251302889005, 52.46737326393017],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 5,
          name: "wnpid",
          fullname: "Wydział Nauk Politycznych i Dziennikarstwa",
          url: "./polityczny.html",
        },
        geometry: {
          type: "Point",
          coordinates: [16.924669935204093, 52.46568167834703],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 6,
          name: "chem",
          fullname: "Wydział Chemii",
          url: "./chem.html",
        },
        geometry: {
          type: "Point",
          coordinates: [16.921839362282782, 52.468058757917539],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 7,
          name: "hist",
          fullname: "Wydział Historii",
          url: "./hist.html",
        },
        geometry: {
          type: "Point",
          coordinates: [16.921098491576632, 52.46639583731335],
        },
      },
    ],
  },
};
