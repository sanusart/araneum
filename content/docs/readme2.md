---
title: "Read me #2"
category: "docs"
type: "category"
slug: "/docs/readme2"
order: 2
---

# Hello, this is body text.

Hello, _this_ is body text. Hello, **this is body text**. Hello, this is body text.

> Hello, this is body text. Hello, this is body text. Hello, this is body text. `Hello, this` is body text. Hello, this is body text. Hello, this is body text. **Hello, this** is body text.

Hello, this is body text. Hello, this is body text. `Hello, this` is body text.

# Code examples:

## Shell script

```sh
#!/usr/bim/env bash

set -e

STR="Araneum!";
printf "Hello ${STR}";

# done
```

## HTML

```html
<!DOCTYPE html>
<head>
  <title>Title</title>
</head>
<body>

  <!-- content -->
  <article class="main">
    <h1>Greetings!</h1>
    <p>Welcome to Araneum</p>
  </article>

  <script>
    alert('Hello Araneum');
  </script>

</body>
</html>
```

## JavaScript

```javascript
/**
 * menu
 *
 * Return array of pages for the nav menu
 *
 * @return {array}
 */
var menu = prop.data.filter(function(page){
  return (page.type === 'page' && page.menu === 'true');
});
```
