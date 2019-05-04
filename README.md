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
- LinkedIn and GitHub links

## Development

TBD with npm commands and stuff.

## Installation

TBD with route setup / .yml stuff

1. [Install Ghost](https://docs.ghost.org/setup/)
2. Under **Design**: add `Projects` to `/tag/projects/` and `Articles` to `/tag/articles`

   If desired, add `LinkedIn` to LinkedIn url, and `GitHub` to GitHub url.

3. Create a post with tag `#home` which is `featured`. This will be shown on the home page.
4. Write posts that are tagged `projects` and `articles`!

## Resources

#### Documentation

- [Ghost Themes API](https://docs.ghost.org/api/handlebars-themes/)
- [Bulma](https://bulma.io/)
- [SCSS](https://sass-lang.com/guide)
- [Handlebars](https://handlebarsjs.com/)

#### Repos

- [Casper](https://github.com/TryGhost/Casper): Default Ghost theme
- [Blog](https://github.com/TryGhost/Blog): Official Ghost blog theme
- [Gulma](https://github.com/simply-fiete/Gulma): Ghost + Bulma theme
- [Ghost Social Casper](https://github.com/gergelyorosz/GhostSocialCasper)
- [Ghost-Theme-Template](https://github.com/thoughtbot/ghost-theme-template)
- [Ghost-Starter-Kit](https://github.com/justinsisley/Ghost-Starter-Kit)
