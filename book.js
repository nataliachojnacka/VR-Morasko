AFRAME.registerComponent('book', {
  schema: {
    bookFile: {
      parse: function (selector) {
        debugger;
        var file = document.querySelector(selector);
        if (!file) { return; }
        var loader = new THREE.FileLoader();
        loader.load(file.src, function (data) {
          debugger;       
        });
      }
    }
  }
});