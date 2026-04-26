# Avadhut Lele — Portfolio

Personal portfolio website for Avadhut Lele, Solutions Architect & Middleware Integration Developer.

Styled after [chanmeng.org](https://chanmeng.org) — clean card-based layout, bento grid hero, typewriter animation, light/dark mode.

## Stack
- React 18
- CSS Variables (light/dark theme)
- Google Fonts: Inter + JetBrains Mono
- gh-pages for deployment

## Local Development

```bash
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

## Deploy to GitHub Pages

```bash
npm run deploy
```

Builds and pushes to the `gh-pages` branch automatically.

## File Structure

```
src/
  components/
    Nav.js / Nav.css           — Fixed top nav + mobile drawer
    Hero.js / Hero.css         — Bento grid hero + typewriter
    About.js / About.css       — Two-column about section
    Experience.js / Exp.css    — Accordion timeline
    Skills.js / Skills.css     — Bento grid skill cards
    Education.js / Edu.css     — Education cards
    Blog.js / Blog.css         — Blog post cards
    HireMe.js / HireMe.css     — Offerings + contact form
    Footer.js / Footer.css     — Clean footer
    ScrollProgress.js          — Top scroll progress bar
  hooks/
    useScrollReveal.js         — IntersectionObserver reveal
  App.js / App.css             — Theme, layout, design tokens
  index.js / index.css         — Entry point + reset
```
