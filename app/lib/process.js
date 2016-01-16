var config = require('../../config.json');
var koa = require('koa');
var app = koa();
var fs = require('fs');
var path = require('path');
var glob = require("co-glob");
var yaml = require('yaml-front-matter');
var marked = require('marked');
var _ = require('lodash');
var contentPath = path.resolve(__dirname, '../../', config.content);

module.exports = function process() {
  return function*(next) {
    var pageVars = [];
    var files = yield glob(contentPath + '/**/*.md');
    files.some(function(file, i) {
      var pVar = yaml.loadFront(file);
      pageVars.push({
        "name": pVar.title,
        "slug": pVar.slug,
        "type": pVar.type,
        "category": pVar.category,
        "filename": file.replace(contentPath.toString(), ''),
        "order": pVar.order,
        "menu": pVar.menu,
        "text": marked(pVar.__content).substring(0,100)
      });
    });
    this.data = _.sortByAll(pageVars, ['order']);
    // console.log(this.data);
    yield next;
  };
};
