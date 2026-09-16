# Personal Portfolio

A single-page portfolio site for an AI/ML and software engineer, built with React and Vite. The page is one continuous scroll with animated section reveals, a custom cursor, smooth inertial scrolling, and scroll-linked parallax.

## Tech stack

| Purpose | Library |
| --- | --- |
| UI framework | React 19 |
| Build tool | Vite 8 |
| Animation | Framer Motion |
| Smooth scrolling | Lenis |
| 3D rendering | Three.js (installed, currently unused) |
| Icons | lucide-react |
| Linting | ESLint 10 |

The project is plain JavaScript with JSX. There is no TypeScript, no router, and no backend. Every page section is a component with a matching stylesheet next to it, and all written content lives in a single data file.

## Getting started

You need Node.js 20 or newer, since Vite 8 will not run on older releases. Check your version with `node -v`.

```bash
npm install
npm run dev
```

The dev server prints a local URL, normally `http://localhost:5173`. Edits to any file reload in the browser immediately.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Produce a production bundle in `dist/` |
| `npm run preview` | Serve the built bundle locally to test it |
| `npm run lint` | Run ESLint across the project |

## Project structure

```
index.html              Page shell, tab title, and favicon
src/
  main.jsx              React entry point and scroll-restoration reset
  App.jsx               Section order and page layout
  index.css             Design tokens and global base styles
  KnightScene.jsx       Three.js scene for the rotating card
  data/
    portfolioData.js    All experience, project, and skills content
  components/           One .jsx and one .css per section
  hooks/
    useSmoothScroll.js  Lenis smooth-scroll setup
public/
  ahmad-photograph.png  Portrait shown in the About section
  favicon.svg           Unused leftover icon
```

Some files exist on disk but are deliberately not committed (see `.gitignore`):
the retired 3D scene and its ~12 MB of art, plus two disabled sections whose
content belongs to the project this was copied from. Nothing in `src/` imports
them, so a fresh clone builds without them.

## Page sections

The order is set in [App.jsx](src/App.jsx). Each section has an anchor id that the header nav links to.

1. **Hero** at `#top`, the name, title, and intro line
2. **About** at `#about`, a paragraph that fades in word by word as you scroll, alongside the portrait
3. **Experience** at `#experience`, a timeline of roles with achievement bullets
4. **Projects** at `#projects`, titled Selected Works, with a detail modal per project
5. **Skills** at `#skills`, titled Core Competencies, grouped by category
6. **Contact** at `#contact`, titled Let's Connect, with email, phone, LinkedIn, and GitHub links

Two further sections, a leadership carousel and testimonials, are built but currently commented out in both [App.jsx](src/App.jsx) and [Header.jsx](src/components/Header.jsx). Their component and stylesheet files are still in the repo. Remove the comment markers in those two files to bring them back.

## Editing content

Most text changes happen in one file. [portfolioData.js](src/data/portfolioData.js) exports three things:

- `experience`, an array of roles with company, role, period, location, and bullets
- `projects`, an array with title, description, tech tags, and highlights
- `skills`, an object whose keys become category headings

Entries render in array order, so reordering the array reorders the page. Commenting out an object removes that entry.

Text that is not in the data file sits directly in its component. The name and intro are in [Hero.jsx](src/components/Hero.jsx), the nav links and brand name are in [Header.jsx](src/components/Header.jsx), the About paragraph is a word array at the top of [About.jsx](src/components/About.jsx), and the contact details are constants at the top of [Contact.jsx](src/components/Contact.jsx). The browser tab title and the emoji favicon are in [index.html](index.html).

When editing JSX, type text directly rather than wrapping it in angle brackets. A capitalized word in angle brackets is read as a React component and will crash the page.

## Styling

Colors, shadows, radii, and the type scale are defined as CSS custom properties at the top of [index.css](src/index.css). Change a value there and it propagates across the site. Section-specific rules live in the stylesheet beside each component, for example [About.css](src/components/About.css). Headings are sized with `clamp()` so they scale with the viewport without needing media queries.

The site is light-theme only and uses Inter, loaded from Google Fonts.

## The About portrait

The portrait sits in a rounded frame over an offset gradient plate, and both
drift at slightly different rates as the section scrolls, which gives the pair
a sense of depth.

The source headshot has a solid white background. Left alone that would read as
a white rectangle on an almost-white section, so the image is composited into a
softly tinted frame with `mix-blend-mode: multiply`. White multiplied against
the frame leaves the frame untouched, so the background disappears and only the
subject remains. The frame sets `isolation: isolate` to keep that blend from
reaching the rest of the page.

Two things to know before editing it:

- The frame's `aspect-ratio` matches the image at 413 by 531. Swapping in a
  photo of different proportions means updating that ratio in
  [About.css](src/components/About.css), or the image will crop.
- The plate's rotation and offset are set by Framer Motion in
  [About.jsx](src/components/About.jsx), not in CSS. Framer writes an inline
  `transform`, which overrides any `transform` in the stylesheet, so the two
  must never both declare it.

An earlier version of this section rendered a rotating 3D card with Three.js.
[KnightScene.jsx](src/KnightScene.jsx) is still in the repo but is no longer
imported. Dropping it took the JavaScript bundle from about 950 kB to about
370 kB.

## Building for deployment

```bash
npm run build
```

Output goes to `dist/` as static files, deployable to any static host. No
server or environment variables are required.

### Deploying to Vercel

`vercel.json` in the repo root already pins the framework, build command and
output directory, and sets a one-year immutable cache on `/assets/*`, which is
safe because Vite fingerprints those filenames.

The CLI route, run from the project root:

```bash
npm i -g vercel
vercel login      # opens a browser; must be run in a real terminal
vercel            # preview deployment
vercel --prod     # production deployment
```

The Git route is usually better, since it redeploys on every push: import the
repository at vercel.com/new and accept the detected Vite settings.

Note that `origin` currently points at `github.com/fahadqaseem/myportfoliosite2`,
which is the account this project was originally copied from. Before using the
Git route, repoint the remote at your own repository:

```bash
git remote set-url origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```

### Uptime

A Vercel deployment of this project is static files on a CDN. There is no
server process that can crash, and past deployments stay reachable, so a bad
build can be rolled back from the dashboard rather than taken offline. Uptime
therefore depends on the platform rather than on anything in this repo. If you
want to be told when the site is unreachable, point an external monitor such as
UptimeRobot or Better Stack at the production URL.

## Attribution

Third-party asset licenses are listed in [ATTRIBUTIONS.md](ATTRIBUTIONS.md). The chess model is CC-BY 4.0 and requires attribution wherever the site is published.
