---
title: "Sasha test title"
category: "docs"
type: "category"
slug: "/docs/readme"
order: 3
---

# Hello, this is body text.

Hello, _this_ is body text. Hello, **this is body text**. Hello, this is body text.

> Hello, this is body text.

Hello, this is body text. Hello, this is body text. `Hello, this` is body text.

## Code example:

```html
<!DOCTYPE html>
<head>
  <title>Title</title>
</head>
<body>

<!-- content -->

  <script>
    alert('Hello Docz');
  </script>
</body>
</html>
```

# JavaScript

```javascript
app.use(function* processUrl(next) {
  var q = this.url.split('/');
  if (q.length > 2) {
    this.cat = q[1];
    this.page = q[2];
  } else {
    this.page = q[1];
  }
  yield next;
});
```
