# Me

👻 This is my personal [Ghost](https://ghost.org) theme used on [wustep.me](https://wustep.me).

## Features

#### Features planned

- Front page with post content, 3 recent projects, and 3 articles
  - Post content should be in a single post tagged `#home` and be `featured`
  - Projects should be tagged `projects` and be `featured`
  - Articles should be tagged `articles` and be `featured`
  - The 3 most recent (by creation date) articles & projects will be shown
  - These are configurable in package.json
- Dedicated Projects tab
  - These should be tagged `projects`
  - Set `/projects` to route to `/tags/projects`
  - Projects will be loaded by creation date, with `featured` projects first
  - [Idea] Custom JS-based emoji table of contents at the top. Each emoji links to a project and displays its title.
- Dedicated Articles tab
  - These should be tagged `articles`
  - Set `/articles` to route to `/tags/articles`
  - Articles will be loaded by creation date, with `featured` projects first
  - Use `#short` tag to remove link to dedicated page
- Dedicated tags category pages (same template as Projects / Articles)
- Dynamic navbar
  - Based on the items in Settings > Navigation:
  - "Home", "Projects", and "Articles" will be on the left side
  - Any other link will be on the right side
  - Facebook, GitHub, and LinkedIn will have icons!

## Development

Use `gulp` to run compile task with Sass, Autoprefixer, and JSHint, watching for changes.

Use `gulp deploy` to recompile stylesheets, create zip file of theme, and gscan to validate.

## Installation

TBD with route setup / .yml stuff

1. [Install Ghost](https://docs.ghost.org/setup/), see note below about modifying.
2. Under **Design**: add `Projects` to `/tag/projects/` and `Articles` to `/tag/articles`

   If desired, add `LinkedIn` to LinkedIn url, and `GitHub` to GitHub url.

3. Create a post with tag `#home` which is `featured`. This will be shown on the home page.
4. Write posts that are tagged `projects` and `articles`!

### Modifications to Ghost

Some minor mods were made to Ghost, particularly:

#### \#has tag for labels

In `has.js`, add `label` to validAttrs and add to `checks` object (line 140ish):

```
label: function() {
  return (
    (attrs.label && evaluateTagList(attrs.label, [self.label], true)) ||
    false
  );
},
```

## Resources

#### Documentation

- [Ghost Themes API](https://docs.ghost.org/api/handlebars-themes/)
- [Bulma](https://bulma.io/)
- [SCSS](https://sass-lang.com/guide)
- [Handlebars](https://handlebarsjs.com/)

#### Templates

- [Ghost-Theme-Template](https://github.com/thoughtbot/ghost-theme-template): Starting templates
- [Gulma](https://github.com/simply-fiete/Gulma): Ghost + Bulma theme
- [Casper](https://github.com/TryGhost/Casper): Default Ghost theme
- [Blog](https://github.com/TryGhost/Blog): Official Ghost blog theme
