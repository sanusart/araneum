var config = require('../../config.json');
var views = require('co-views');
var path = require('path');
module.exports = views(path.resolve(__dirname, '../../', config.views), {
  map: {
    html: config.viewEngine
  }
});
