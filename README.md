# Me

👻 This is my personal [Ghost](https://ghost.org) theme used on [wustep.me](https://wustep.me).

## Features

- ✔️ Home page
  - ✔️ Content is used from page with URL `home`
  - ✔️ Projects are tagged `Projects`
  - ✔️ Articles are tagged `Articles`
  - ✔️ "Read More" buttons linking to pages
  - ✔️ Uses 2 most recent projects and articles
- ✔️ Projects
  - ✔️ These should be posts tagged `Projects` first
  - ✔️ Set `/projects` to route to `/tags/projects`
  - ✔️ Projects will be loaded by creation date desc
  - ✔️ Projects are routed to `/projects/{slug}`
  - Loads `featured` projects first
  - ✔️ Hide day for datetime published
- ✔️ Articles
  - ✔️ These should be posts tagged `Articles` first
  - ✔️ Articles will be loaded by creation date desc
  - ✔️ Articles are routed to `/articles/{slug}`
  - Loads `featured` first
- ✔️ Notes
  - ✔️ These should be posts tagged `Notes` first
  - ✔️ Notes will be loaded by creation date desc
  - ✔️ Notes are routed to `/articles/{slug}`
  - Loads `featured` first
  - ✔️ Hide day for datetime published
  - Uses package.json property `posts-per-page` with pagination
- ✔️ Posts that are not primarily tagged `Articles` or `Projects` or `Notes` will be routed to `/`
- ✔️ Dynamic navigation bar
  - ✔️ Based on the items in Settings > Navigation:
  - ✔️ "Home", "Projects", "Articles", and "Notes" will be on the left side
  - ✔️ Any other link will be on the right side
  - ✔️ Mobile-friendly dropdown
  - ✔️ Facebook, Twitter, GitHub, and LinkedIn will add icons
- ✔️ Tags category pages: `/tag/[tag]` and author page: `/author/[author]`
- ✔️ Dedicated post webpages
  - Proper formatting--match editor styles
    - ✔️ Headings, links, paragraphs, bold, italics, blockquotes, bullets, code blocks
    - Images, responsive feature images
  - ✔️ Author byline with icon, name, and bio
    - ✔️ Links to author's website
  - Bug: Ghost Code injection might not work properly
- ✔️ Post Cards (loop)
  - ✔️ with title, excerpt, tags
  - ✔️ (These will not have feature images)
  - Use package.json property `posts-per-page` with pagination
- ✔️ Custom 404 page with 404-porcupine
- Subscribe modal
  - ✔️ Set up modal and form
  - Set up form action and errors
- Additional scripts:
  - ✔️ Add [jQuery v3.2](https://jquery.com/) via CDN
  - ✔️ [Syntax highlighting](https://github.com/highlightjs/highlight.js/blob/master/README.md) for programming code blocks with Highlight.js
  - ✔️ Convert external links to open in new tab
  - ✔️ Tagify [#Tags] with Bulma tags
    - ✔️ "[##TagName]" will be turned into dark tags of #TagName with `.is-primary-label`
    - ✔️ "[##!TagName]" will get the same treatment but with anchor link
    - ✔️ "[#TagName]" will be turned into grey tags of #TagName with `.is-secondary-label`
    - ✔️ Lines that start and end in tags will be given `.label-collection`
- ✔️ Build tools:
  - ✔️ `gulp` for development and `gulp deploy` for deployment
  - ✔️ Compile SCSS to CSS
  - ✔️ JSHint (error-checking) and Sass-lint (style-checking)
  - ✔️ Minify CSS and JavaScript with source maps

**De-prioritized:**

- Multi-author byline support
- Proper RSS feeds
- Fork into generic Bulma + Ghost theme

## Development

- With npm installed, install gulp globally with `npm install -g gulp`.

- `gulp`: run compile task with Sass, Autoprefixer, and JSHint, watching for changes

  - Ghost reloads `.hbs` changes by default, but new partials will require a `ghost restart`

- `gulp deploy`: recompile stylesheets, create theme `.zip`, and uses `gscan` to validate

- To run ghost: `ghost start`, `ghost restart`, or `ghost run [session-name] --development` for logs

## Setup

0. [Install Ghost](https://docs.ghost.org/setup/) and complete modifications noted below.

1. Clone this repo to `/content/themes`, then (`npm install`) and (use `gulp`) or (`gulp deploy` and upload zip file to **Settings -> Design**).

1. Under **Settings -> Navigation**: add:

```
Home -> /
Projects -> /projects/
Articles -> /articles/
Notes -> /notes/
(optional)
LinkedIn, Twitter, GitHub, Facebook
```

3. Create a **page** with URL `/home`. This will be shown on the home page.

4. Write **posts** that are tagged `Projects`, `Articles`, or `Notes`!

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

- Replace your `content/settings/routes.yaml` with the `routes.yaml` in this repository, modifying as desired.

#### 3. (Optional) Change excerpt algorithm

Automatic excerpts, by default, tend to be a poor result and concatenate multiple lines together without proper spacing. Optionally, revise the `excerpt` code to catch only the first `<p>` block instead of carrying on.

### Other Optional Changes

#### Add more internal pages

By default, only "Home", "Projects", "Articles", and "Ideas" are in the left side of the nav. To add more internal pages to the nav bar, edit `partials/navigation.hbs` and make sure the new label is listed in the `#has` and `^has` statements.

#### Contact button

Use a service like Typeform to add a "Contact" button to the `home` page.

Edit the button to use Bulma, with class `button` and `is-success` (or [another color](https://bulma.io/documentation/overview/colors/))!

Example:

```
<a class="typeform-share button is-success" href="https://wustep.typeform.com/to/LR3jOI" data-mode="popup" target="_blank">Contact Me</a>
```

#### Subscribe button

Add a subscribe button somewhere with classes `subscribe-button button is-primary`.

```
<a class="button subscribe-button is-primary" data-target="subscribe-modal" href="#subscribe">Subscribe</a>
```

#### Syntax highlighting

I added syntax highlighting through `highlight.js` for a limited number of languages that I felt I might use (including `[JavaScript, Python, Java, SQL, JSON, Markdown, HTTP, CSS, SCSS, ...]`).

I excluded many common ones, like `[C#, C++, Ruby, Makefiles, Apache]`, and there's tons more that can be added.

If you'd like to replace this library, [build your own package at highlightjs.org](https://highlightjs.org/download/) and replace `assets/lib/highlight.pack.js`.

To change the theme, follow the instructions in `assets/css/highlight.scss`.

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
