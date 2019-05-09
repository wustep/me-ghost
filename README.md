# Me

👻 This is my personal [Ghost](https://ghost.org) theme used on [wustep.me](https://wustep.me).

## Features

- ✔️ Home page
  - ✔️ Content is used from page with URL `home`
  - ✔️ Projects are tagged `Projects`
  - ✔️ Articles are tagged `Articles`
  - ✔️ "Read More" buttons linking to pages
  - ✔️ Uses 2 most recent projects and articles
    - Loads `featured` prioritized
- ✔️ Projects tab
  - ✔️ These should be posts tagged `Projects` first
  - ✔️ Set `/projects` to route to `/tags/projects`
  - ✔️ Projects will be loaded by creation date desc
  - ✔️ Projects are routed to `/projects/{slug}`
  - Loads `featured` projects first
  - Filtering by tag (e.g. `Java`, `Tutorial`) JS
  - Uses package.json property `posts-per-page` with pagination
  - ✔️ Hide day for datetime posted
    - Add special way to have date range instead of regular dates..
- ✔️ Articles tab
  - ✔️ These should be posts tagged `Articles` first
  - ✔️ Articles will be loaded by creation date desc
  - ✔️ Articles are routed to `/articles/{slug}`
  - Loads `featured` first
  - Uses package.json property `posts-per-page` with pagination
- ✔️ Notes tab
  - ✔️ These should be posts tagged `Notes` first
  - ✔️ Notes will be loaded by creation date desc
  - ✔️ Notes are routed to `/articles/{slug}`
  - Loads `featured` first
  - ✔️ Hide day for datetime posted
  - Uses package.json property `posts-per-page` with pagination
- Projects/Articles/Notes tab use scripts/body from pages named those!
- ✔️ Posts that are not primarily tagged `Articles` or `Projects` or `Notes` will be routed to `/`
- ✔️ Tags category pages: `/tag/[tag]`
  - And author: `/author/[author]`
  - Fix pluralization error saying `A collection of` for `projects, notes, articles`
  - Uses package.json property `posts-per-page`
- ✔️ Dynamic navigation bar
  - ✔️ Based on the items in Settings > Navigation:
  - ✔️ "Home", "Projects", "Articles", and "Notes" will be on the left side
  - ✔️ Any other link will be on the right side
  - ✔️ Mobile-friendly dropdown
  - Facebook, Twitter, GitHub, and LinkedIn will have icons!
- ✔️ Dedicated post webpages
  - Proper formatting--match editor styles
    - ✔️ Headings, links, paragraphs, bold, italics, blockquotes
      - Headings need better styling
    - Pictures, code blocks
    - Responsive feature images
  - ✔️ Single-author & multi-author byline
    - Better styling
  - Syntax highlighting for programming code blocks?
- ✔️ Post cards
  - ✔️ with title, excerpt, tags
  - add: feature image
- ✔️ Custom 404 page with 404-porcupine
- ✔️ Build tools
  - ✔️ `gulp` for development and `gulp deploy` for deployment
  - ✔️ Compile SCSS to CSS
  - ✔️ JSHint (error-checking) and Sass-lint (style-checking)
    - Fix these errors!
  - Minify CSS and JavaScript
- Fork into generic Bulma + Ghost theme

## Development

- With npm installed, install gulp globally with `npm install -g gulp`.

- `gulp`: run compile task with Sass, Autoprefixer, and JSHint, watching for changes

  - Ghost reloads `.hbs` changes by default, but new partials will require a `ghost restart`

- `gulp deploy`: recompile stylesheets, create theme `.zip`, and uses `gscan` to validate

- To run ghost: `ghost start`, `ghost restart`, or `ghost run [session-name] --development` for logs

## Setup

0. [Install Ghost](https://docs.ghost.org/setup/) and complete modifications below.

1. Clone this repo to `/content/themes`, then (`npm install`) and (use `gulp`) or (`gulp deploy` and upload zip file to **Settings -> Design**).

1. Under **Settings -> Navigation**: add:

```
Home -> /
Projects -> /projects/
Articles -> /articles/
Notes -> /notes/
(optional)
LinkedIn -> [your LinkedIn]
GitHub -> [your GitHub]
```

3. Create a **page** with URL `/home`. This will be shown on the home page.

4. Write **posts** that are tagged `Projects`, `Articles`, or `Notes`!

5. (optional) Use a service like Typeform to add a "Contact" button to the `home` page

   Edit the button to use Bulma, with class `button` and `is-success` (or [another color](https://bulma.io/documentation/overview/colors/))!

### Modifications to Ghost

Some minor mods were made to the Ghost code, particularly:

#### 1. \#has tag for labels

This is used for the navigation bar, to have `Home`, `Projects`, and `Articles` be on the left-aligned and any other link to be right-aligned.

- In `has.js`, add `label` to `validAttrs` and add to `checks` object (line 140ish):

```
label: function() {
  return (
    (attrs.label && evaluateTagList(attrs.label, [self.label], true)) ||
    false
  );
},
```

#### 2. Routes

Routes were modified to change `tag/projects` -> `projects`, `tag/articles` -> `articles`, and `tag/notes` -> `notes` and have the user-created page `/home` -> `/`.

- Replace your `content/settings/routes.yaml` with the `routes.yaml` in this repository, modifying as desired

### Other Optional Changes

#### Add more internal pages

By default, only "Home", "Projects", "Articles", and "Ideas" are in the left side of the nav. To add more internal pages to the nav bar, edit `partials/navigation.hbs` and make sure the new label is listed in the `#has` and `^has` statements.

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
