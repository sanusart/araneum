---
title: "About"
type: "page"
slug: "/about"
order: 1
menu: "true"
---

# About Araneum

Araneum will let you create content with ease.
You can use Araneum to build your blog, site, documentation or knowledge base using markdown and customize it with easy to create themes.

# Basic configurations

Project's root containing a `config.json` file. This file holds different base settings to run the site:

- **name** - App/site name
- **content** - location of the content markdown files
- **author** - Author's name
- **port** - Port to use while running the site
- **views** - location of the views (themes)
- **viewEngine** - view engine, need to be installed before use
- **theme** - Theme to use with the site
- **highlightJsTheme** - highlightJs theme to use for code highlighting

# Categorization

Araneum will automatically create category pages, which are listing articles in the category, sorted by the `order` parameter of the front-end matter of the file.

# Themes

Themes are located at `./app/views`, the default theme is called `default` and the setting of what theme to use is found at `config.json` file in the project's root.
