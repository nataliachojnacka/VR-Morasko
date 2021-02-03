AFRAME.registerComponent('book', {
  schema: {bookFile: {type: 'asset'}},
  init: function () {
    var loader = new THREE.FileLoader();
    var self = this;
    loader.load(this.data.bookFile, function (data) {
      self.bookData = JSON.parse(data);
    });
  }
});