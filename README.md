# Me

👻 This is my personal [Ghost](https://ghost.org) theme used on [wustep.me](https://wustep.me).

## Features

#### Features

- ✔️ Front page with post content, 2 recent projects, and 2 articles
  - ✔️ Content from page with URL `home`
    - Better styling
  - ✔️ Projects should be tagged `projects`
  - ✔️ Articles should be tagged `articles`
  - ✔️ The 2 most recent (by creation date) articles & projects will be shown, with "Read More" buttons
    - With `featured` prioritized
- ✔️ Dedicated Projects tab
  - ✔️ These should be tagged `projects`
  - ✔️ Set `/projects` to route to `/tags/projects`
  - ✔️ Projects will be loaded by creation date desc
    - With `featured` projects first
  - Projects will pop up article in modal.
  - [Idea] Custom JS-based emoji table of contents at the top. Each emoji links to a project and displays its title.
  - Uses package.json property `posts-per-page` with pagination
- ✔️ Dedicated Articles tab
  - ✔️ These should be tagged `articles`
  - ✔️ Articles will be loaded by creation date desc
    - With `featured` first
  - Uses package.json property `posts-per-page` with pagination
- ✔️ Dedicated tags category pages: `/tag/[tag]`
- Dynamic navbar
  - ✔️ Based on the items in Settings > Navigation:
  - ✔️ "Home", "Projects", and "Articles" will be on the left side
  - ✔️ Any other link will be on the right side
  - ✔️ Mobile-friendly dropdown
  - Facebook, Twitter, GitHub, and LinkedIn will have icons!
- Dedicated post webpages
- Year-organized URIs: `/[projects|articles]/year/[slug]`
- ✔️ Custom 404 page with 404-porcupine

## Development

Use `gulp` to run compile task with Sass, Autoprefixer, and JSHint, watching for changes.

Use `gulp deploy` to recompile stylesheets, create zip file of theme, and gscan to validate.

## Setup

1. [Install Ghost](https://docs.ghost.org/setup/), see notes below.
2. Under **Settings -> Navigation**: add `Projects` -> `/tag/projects/` and `Articles` -> `/tag/articles`

   (optional) add `LinkedIn` to LinkedIn url, and `GitHub` to GitHub url.

3. Create a page with URL `/home`. This will be shown on the home page.
4. Write posts that are tagged `projects` and `articles`! (Not both.)
5. (optional) Use a service like Typeform to add a "Contact" button to the `home` page

   Edit the button to use Bulma, with class `button` and `is-success` (or [another color](https://bulma.io/documentation/overview/colors/))!

### Modifications to Ghost

Some minor mods were made to Ghost, particularly:

#### \#has tag for labels

In `has.js`, add `label` to `validAttrs` and add to `checks` object (line 140ish):

```
label: function() {
  return (
    (attrs.label && evaluateTagList(attrs.label, [self.label], true)) ||
    false
  );
},
```

#### Routes

Replace your `routes.yaml` with the one in this directory.

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
