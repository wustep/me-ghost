# Me

👻 This is my personal [Ghost](https://ghost.org) theme used on [wustep.me](https://wustep.me).

## Features

- ✔️ Home page
  - ✔️ Content card from page with URL `home`
  - ✔️ Add 2 most recent Articles, Projects, and Notes
  - ✔️ "Read More" buttons linking to pages
- ✔️ Articles
  - ✔️ These should be posts tagged `Articles` first
  - ✔️ Articles will be loaded by creation date desc
  - ✔️ Articles are routed to `/articles/{slug}`
- ✔️ Projects
  - ✔️ These should be posts tagged `Projects` first
  - ✔️ Set `/projects` to route to `/tags/projects`
  - ✔️ Projects will be loaded by creation date desc
  - ✔️ Projects are routed to `/projects/{slug}`
  - ✔️ Hide day for datetime published
- ✔️ Notes
  - ✔️ These should be posts tagged `Notes` first
  - ✔️ Set `/notes` to route to `/tags/notes`
  - ✔️ Notes will be loaded by creation date desc
  - ✔️ Notes are routed to `/notes/{slug}`
  - ✔️ Hide day for datetime published
- ✔️ Posts that are not primarily tagged `Articles` or `Projects` or `Notes` will be routed to `/`
- ✔️ Dynamic navigation bar
  - ✔️ Based on the items in Settings > Navigation:
  - ✔️ "Home", "Projects", "Articles", and "Notes" will be on the left side
  - ✔️ Any other link will be on the right side
  - ✔️ Mobile-friendly dropdown
  - ✔️ Facebook, Twitter, GitHub, and LinkedIn will add icons
- ✔️ Tags category pages: `/tag/[tag]` and author page: `/author/[author]`
- ✔️ Dedicated post webpages
  - ✔️ Proper formatting--match editor styles
    - ✔️ Headings, links, paragraphs, bold, italics, blockquotes, bullets, code blocks, images, galleries
    - Videos / embeds
  - ✔️ Author byline with icon, name, and bio
    - ✔️ Links to author's website
- ✔️ Post Cards (loop)
  - ✔️ with title, excerpt, tags
  - ✔️ (These will not have feature images)
  - Loads `featured` first
  - Use package.json property `posts-per-page` with pagination
    - ([Ran into some issues with pagination related to #get](https://github.com/TryGhost/Ghost/issues/9011))
- ✔️ Custom 404 page with 404-porcupine
- ✔️ Commenting with [Commento](https://commento.io/)
  - ✔️ Disable on any post by setting `window.disableCommento` to `true` in Code Injection
  - Restyle to be more Bulma-like
  - Add syntax highlighting?
- ✔️ Claps with [Applause](https://applause-button.com/)
  - Disable on any page by setting `window.disableApplause` to `true`
- ✔️ Additional scripts:
  - ✔️ Add [jQuery v3.4](https://jquery.com/) via CDN
  - ✔️ [Syntax highlighting](https://github.com/highlightjs/highlight.js/blob/master/README.md) for programming code blocks with Highlight.js
  - ✔️ Convert external links to open in new tab
  - ✔️ Tagify [#Tags] and [!Buttons] with Bulma tags and buttons
    - ✔️ `[##TagName]` will be turned into dark tags of #TagName with `.is-primary-label`
    - ✔️ `[##!TagName]` will get the same treatment but with anchor link
    - ✔️ `[#TagName]` will be turned into grey tags of #TagName with `.is-secondary-label`
    - ✔️ Lines that start and end in `[#Tags]` will be given `.label-collection`
    - ✔️ `[!<a href...>Button Text</a>]` will be given `a.button.is-primary`
    - ✔️ `[!(classes)<a href...>Button Text</a>]` will be given `a.button` with space-separated `classes`
- ✔️ Build tools:
  - ✔️ `gulp` for development and `gulp deploy` for deployment
  - ✔️ Compile SCSS to CSS
  - ✔️ JSHint (error-checking) and Sass-lint (style-checking)
  - ✔️ Minify CSS and JavaScript with source maps

**De-prioritized:**

- Subscribe modal
  - ✔️ Set up modal and form
  - Set up form action and errors
- Multi-author byline support
- Proper RSS feeds
- Fork into generic Bulma + Ghost theme

## Development

- With [npm](https://www.npmjs.com/get-npm) installed, install `gulp` globally with `npm install -g gulp`.

- `gulp`: compiles with Sass, Autoprefixer, Sass-lint, JSHint, Minify, watching for changes.

  - Ghost reloads `.hbs` changes by default, but new partials will require a `ghost restart`.

- `gulp deploy`: recompile everything, create `.zip` for production and uses `gscan` to validate.

- To run Ghost: `ghost start`, `ghost restart`, or `ghost run [session-name] --development` for logs

## Setup

0. [Install Ghost](https://docs.ghost.org/setup/) and complete modifications noted below.

1. Clone this repo to `/content/themes`, then (`npm install`) and (use `gulp`) or (`gulp deploy` and upload zip file to **Settings -> Design**).

1. Under **Settings -> Navigation**: add:

```javascript
Home -> /
Articles -> /articles/
Projects -> /projects/
Notes -> /notes/
(optional)
LinkedIn, Twitter, GitHub, Facebook
```

3. Create a **page** with URL `/home`. This will be shown on the home page.

4. Write **posts** that are tagged `Projects`, `Articles`, or `Notes`!

5. Set up [Commento](https://commento.io/) account for comments.

### Modifications to Ghost

Some minor mods were made to the Ghost code, particularly:

#### 1. \#has tag for labels

This is used for the navigation bar, to have `Home`, `Projects`, and `Articles` be on the left-aligned and any other link to be right-aligned.

- In ghost folder: `core/server/helpers/has.js`, add `label` to `validAttrs` and add to `checks` object (line 140ish):

```javascript
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

#### 3. Add `use-commento` and `use-applause` config properties.

We added two config properties to let users enable or disable [commento](https://commento.io/) / [applause](https://applause-button.com/). Edit `package.json` if you want these enabled or disabled.

- In ghost folder: `core/server/services/themes/config/index.js`.

Add `use-commento` and `use-applause` to `allowedKeys`.

- In ghost folder: `core/server/services/themes/middleware.js`

Add `use-commento` and `use-applause` to `updateGlobalTemplateOptions` in same format:

```javascript
const themeData = {
  posts_per_page: activeTheme.get().config("posts_per_page"),
  image_sizes: activeTheme.get().config("image_sizes"),
  use_commento: activeTheme.get().config("use_commento"),
  use_applause: activeTheme.get().config("use_applause")
};
```

#### 4. Hide RSS feed.

At the moment, RSS feeds are not populated properly. By default, Ghost adds a feed to the `<head>` tag.

To remove it, go to `core/server/helpers/ghost_head.js` and comment out the lines:

```javascript
head.push(
  '<link rel="alternate" type="application/rss+xml" title="' +
    escapeExpression(metaData.blog.title) +
    '" href="' +
    escapeExpression(metaData.rssUrl) +
    '" />'
);
```

#### 5. (Optional) Change excerpt algorithm

TODO: Automatic excerpts, by default, tend to be a poor result and concatenate multiple lines together without proper spacing. Optionally, revise the `excerpt` code to catch only the first `<p>` block instead of carrying on.

### Other Optional Changes

#### 1. Add more internal pages

By default, only "Home", "Projects", "Articles", and "Ideas" are in the left side of the nav. To add more internal pages to the nav bar, edit `partials/navigation.hbs` and make sure the new label is listed in the `#has` and `^has` statements.

#### 2. Contact button

Use a service like Typeform to add a "Contact" button to the `home` page.

Edit the button to use Bulma, with class `button` and `is-success` (or [another color](https://bulma.io/documentation/overview/colors/))!

Example:

```html
<a class="typeform-share button is-success" ...>Contact Me</a>
```

#### 3. Subscribe button

(This isn't completed yet! In the meantime, you can use Typeform forms.)
Add a subscribe button somewhere with classes `subscribe-button button is-primary`:

```html
<a
  class="button subscribe-button is-primary"
  data-target="subscribe-modal"
  href="#subscribe"
>
  Subscribe
</a>
```

#### 4. Syntax highlighting changes

I added syntax highlighting through `highlight.js` for a limited number of languages that I felt I might use (including `[JavaScript, Python, Java, SQL, JSON, Markdown, HTTP, CSS, SCSS, ...]`).

I excluded many common ones, like `[C#, C++, Ruby, Makefiles, Apache]`, and there's tons more that can be added.

If you'd like to replace this library, [build your own package at highlightjs.org](https://highlightjs.org/download/) and replace `assets/lib/highlight.pack.js`.

To change the theme, follow the instructions in `assets/css/highlight.scss`.

#### 5. Host Applause or Commento

You can choose to [host your own server of Applause](https://github.com/ColinEberhardt/applause-button-server) and [Commento](https://docs.commento.io/getting-started/self-hosting/).

#### 6. Hide Commento

To hide comments on any post, use `window.disableCommento` via Code Injection to `{{ghost_foot}}` in the Ghost panel:

```html
<script>
  window.disableCommento = true;
</script>
```

## Resources

#### Documentation

- [Ghost Themes API](https://docs.ghost.org/api/handlebars-themes/)
- [Bulma](https://bulma.io/)
- [SCSS](https://sass-lang.com/guide)
- [Handlebars](https://handlebarsjs.com/)
- [Gulp](https://gulpjs.com/)
- [Highlight.js](https://highlightjs.org)
- [Applause Button](https://applause-button.com/)
- [Commento](https://commento.io/)

#### Templates

- [Ghost-Theme-Template](https://github.com/thoughtbot/ghost-theme-template): Starting templates
- [Gulma](https://github.com/simply-fiete/Gulma): Ghost + Bulma theme
- [Casper](https://github.com/TryGhost/Casper): Default Ghost theme
- [Blog](https://github.com/TryGhost/Blog): Official Ghost blog theme
