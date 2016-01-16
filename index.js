var araneum = require('./package.json');
var config = require('./config.json');
var koa = require('koa');
var app = koa();
var route = require('koa-route');
var render = require('./app/lib/render');
var process = require('./app/lib/process');
var marked = require('marked');
var yaml = require('yaml-front-matter');
var serve = require('koa-static');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

app.use(process());

app.use(function*(next) {
  this.defaultProps = {
    config: config,
    version: araneum.version,
    page: {
      title: config.name,
      menu: 'false',
      category: 'Ucategorized',
      author: config.author
    },
    data: this.data
  };
  yield next;
});

app.use(function* (next) {
  var accessPath = path.parse(this.url);
  // console.log( 'path', path.parse(this.url) );
  if (accessPath.dir !== '/') {
    this.cat = accessPath.dir;
    this.page = accessPath.base;
  } else {
    this.page = accessPath.base;
  }
  yield next;
});

var pages = {
  home: function*() {
    var pageVar = yaml.loadFront(path.resolve(config.content, 'home.md'));
    var props = {
      page: pageVar,
      content: marked(pageVar.__content)
    };
    this.body = yield render(config.theme + '/home', {
      prop: _.defaultsDeep(props,this.defaultProps)
    });
  },
  cat: function *(cat) {
    var props = {
      page: {
        category: cat
      }
    };
    this.body = yield render(config.theme + '/category', {
      prop: _.defaultsDeep(props,this.defaultProps)
    });
    // this.body = 'Hi, I am category ' + cat;
  },
  catPage: function*(cat, page) {
    var pageVar = yaml.loadFront(path.resolve(config.content, cat, page + '.md'));
    var props = {
      page: pageVar,
      content: marked(pageVar.__content)
    };
    this.body = yield render(config.theme + '/layout', {
      prop: _.defaultsDeep(props,this.defaultProps)
    });
  },
  page: function*(page) {
    var pageVar = yaml.loadFront(path.resolve(config.content, page + '.md'));
    // if (!pageVar.title) this.redirect('/404');
    var props = {
      page: pageVar,
      content: marked(pageVar.__content)
    };
    this.body = yield render(config.theme + '/layout', {
      prop: _.defaultsDeep(props,this.defaultProps)
    });
  },
  search: function*(next) {
    this.body = `Page: search`;
  },
  notFound: function*(next) {
    this.status = 404;
    var props = {
      title: '404',
      category: '404',
      slug: '/404'
    };
    this.body = yield render(config.theme + '/404', {
      prop: _.defaultsDeep(props,this.defaultProps)
    });
  }
};

// Static files
app.use(serve(__dirname + '/' + config.views +'/'+ config.theme +'/style'));
app.use(serve(__dirname + '/' + config.views +'/'+ config.theme +'/scripts'));

// app.use(rewrite('/cat/:cat', '/$1'));

// routes
app.use(route.get('/', pages.home));
app.use(route.get('/404', pages.notFound));
app.use(route.get('/:page', pages.page));
app.use(route.get('/cat/:cat', pages.cat));
app.use(route.get('/:cat/:page', pages.catPage));

app.listen(config.port || 3000);
