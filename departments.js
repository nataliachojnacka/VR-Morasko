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
          address: "ul. Bogumiła Krygowskiego 10, Poznań",
          photo:
            "https://wngig.amu.edu.pl/__data/assets/image/0024/216708/WNgiGfoto.jpg",
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
          address: "ul. Uniwersytetu Poznańskiego 2, Poznań",
          photo:
            "https://imgproxy.geocaching.com/f2c19f938e59c7200e7df265b1eed70e970d8a8e?url=http%3A%2F%2Fpearl.amu.edu.pl%2FXVIminisymp%2FFotki_Minisymp2011%2FWydzialFizykiUAM.jpg",
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
          address: "ul. Uniwersytetu Poznańskiego 4, Poznań",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/c/c0/Wydzia%C5%82_Matematyki_i_Informatyki_UAM.jpg",
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
          address: "ul. Uniwersytetu Poznańskiego 6, Poznań",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/1/1d/Wydzia%C5%82_Biologii_%28cropped%29.jpg",
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
          address: "ul. Uniwersytetu Poznańskiego 5, Poznań",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Wydzia%C5%82_Nauk_Politycznych_i_Dziennikarstwa_UAM.jpg/2560px-Wydzia%C5%82_Nauk_Politycznych_i_Dziennikarstwa_UAM.jpg",
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
          address: "ul. Uniwersytetu Poznańskiego 8, Poznań",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wydzia%C5%82_Chemii_UAM.jpg",
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
          address: "ul. Uniwersytetu Poznańskiego 7, Poznań",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/9/98/Wydzia%C5%82_Historyczny_UAM.jpg",
        },
        geometry: {
          type: "Point",
          coordinates: [16.921098491576632, 52.46639583731335],
        },
      },
    ],
  },
};
