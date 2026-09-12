# AGENTS.md

## Project Overview

**PTAP (Pilot Training Arma Project)** is an informational web application and knowledge base platform designed for an Arma 3 flight training community. The application serves flight guides, training articles, an interactive search engine, and a specialized authenticated content editor for authoring and managing articles.

- **Primary Language (UI & Content):** Polish (`pl-PL`)
- **Live Deployment:** [ptap.netlify.app](https://ptap.netlify.app/)
- **Repository Type:** Monorepo SPA (Single Page Application) with Netlify serverless functions and Firebase backend services.

---

## Tech Stack & Architecture

| Layer                    | Technology                             | Key Details                                                          |
| :----------------------- | :------------------------------------- | :------------------------------------------------------------------- |
| **Frontend Core**        | React 19 (`^19.0.0`), React DOM 19     | Functional components with hooks                                     |
| **Build & Bundler**      | Vite 6 (`^6.2.0`)                      | Configured with HMR (port 3000), polling, babel macros               |
| **Routing**              | React Router DOM v7 (`^7.1.1`)         | `createBrowserRouter`, `createRoutesFromElements`, `<Outlet />`      |
| **State Management**     | React Context API + Reducers           | `PageContext`, `SearchContext`, and `EditorContext`                  |
| **Backend & BaaS**       | Google Firebase v11 (`^11.1.0`)        | Firebase Authentication & Firebase Realtime Database (`/articles`)   |
| **Serverless Functions** | Netlify Functions (Node.js 22)         | `nodemailer` SMTP for contact & bug reports                          |
| **Styling**              | CSS Modules + Global CSS + SASS        | Component-scoped CSS modules (`*.module.css`), `src/css/index.css`   |
| **Icons & Media**        | FontAwesome v6 + SVG Sprites           | `@fortawesome/react-fontawesome`, `svgxuse`, WebP assets             |
| **Code Highlighting**    | PrismJS (`^1.29.0`)                    | Used in the article editor code view                                 |
| **Linting & Formatting** | ESLint 8 + Prettier 3                  | Strict rules including `eslint-plugin-jsx-a11y` (`--max-warnings 0`) |
| **Containerization**     | Docker (Node 22 Alpine + Apache HTTPD) | Multi-stage build serving static output via Apache                   |
| **CI/CD**                | GitHub Actions + Netlify               | `.github/workflows/dev_node.js.yml` runs build on `dev` branch       |

---

## Directory Structure

```plaintext
PTAP/
├── .agents/                      # Agent configuration & modular rules
│   └── rules/                    # Scoped agent rule definitions (e.g. a11y.md)
├── .github/
│   └── workflows/
│       └── dev_node.js.yml       # GitHub Actions CI workflow (Node 22)
├── docs/                         # Project documentation and reference material
│   ├── audits/                   # Audit reports (e.g. accessibility.md)
│   └── references/               # Technical specs, flight SOPs, domain knowledge
├── netlify/
│   └── functions/
│       └── contact.js            # Netlify Serverless function (Nodemailer Gmail SMTP)
├── public/                       # Static public assets
├── src/
│   ├── components/
│   │   ├── Editor/               # Rich article editor module
│   │   │   ├── components/       # Card, Menu, and Toolbar components
│   │   │   ├── content/          # Editor content, preview, line numbers
│   │   │   ├── hooks/            # use-article, use-code, use-toolbar-options
│   │   │   └── pages/            # Editor sub-pages (All, Editor, New, Welcome)
│   │   ├── Footer/               # Site footer component and styles
│   │   ├── Nav/                  # Top navbar and responsive mobile drawer
│   │   ├── Search/               # Global search modal indexing articles
│   │   ├── UI/                   # Reusable accessible UI primitives
│   │   │   ├── BackArrow/        # Navigation back button
│   │   │   ├── Button/           # Configurable buttons (solid, outline, danger)
│   │   │   ├── Dropdown/         # Accessible dropdown and nested dropdown menus
│   │   │   ├── Input/            # Form inputs with validation and a11y labels
│   │   │   ├── Modal/            # Modal component backed by HTML5 <dialog>
│   │   │   ├── SkipLink/         # Accessible skip to content navigation link
│   │   │   └── Video.jsx         # Video embed player wrapper
│   │   ├── Wiki/                 # Wiki article display components (Article, Intro)
│   │   └── LoadingScreen.jsx     # Global / contextual loading state spinner
│   ├── css/
│   │   ├── index.css             # Global CSS variables, typography, reset
│   │   └── prism.css             # Syntax highlighting theme
│   ├── data/
│   │   ├── ArticleList.json      # Static / seed list of articles
│   │   └── firebase.js           # Firebase app & Realtime Database initialization
│   ├── hooks/
│   │   ├── use-auth.jsx          # Firebase Auth hook (login, register, reset, google)
│   │   ├── use-db.jsx            # Firebase Realtime Database hook (read/write articles)
│   │   └── use-scroll-lock.jsx   # Scroll locking utility for modals/drawers
│   ├── icons/                    # SVG symbol definitions and sprites
│   ├── img/                      # Application image assets (banners, logos, webp)
│   ├── pages/                    # Top-level route views
│   │   ├── Editor.jsx            # Authenticated editor layout wrapper
│   │   ├── Error403.jsx          # Access denied view ("/zabroniony")
│   │   ├── Error404.jsx          # Not found fallback view
│   │   ├── Feedback.jsx          # Bug reporting and feedback form ("/zglos-blad")
│   │   ├── Home.jsx              # Landing page ("/")
│   │   ├── Login.jsx             # User login page ("/logowanie")
│   │   ├── Logout.jsx            # Logout handler page ("/wylogowanie")
│   │   ├── PrivacyPolicy.jsx     # Privacy policy page ("/polityka-prywatnosci")
│   │   ├── ResetPassword.jsx     # Password reset page ("/resetowanie-hasla")
│   │   ├── Signup.jsx            # Registration page ("/rejestracja")
│   │   ├── Terms.jsx             # Terms of service page ("/regulamin")
│   │   └── Wiki.jsx              # Wiki layout wrapper ("/wiki")
│   ├── scripts/
│   │   └── StringToJSX.jsx       # DOMParser utility converting HTML strings to React JSX
│   ├── store/                    # React Context providers and reducers
│   │   ├── Editor/               # Complex editor state management & actions
│   │   ├── page-context.js       # Active route state tracking
│   │   ├── PageProvider.jsx      # Provider for page context
│   │   ├── search-context.js     # Search modal open/close state
│   │   └── SearchProvider.jsx    # Provider for search modal
│   ├── App.jsx                   # Main routing setup and layout wrapper
│   └── index.jsx                 # Application entry point with providers
├── Dockerfile                    # Multi-stage Docker build with Apache httpd
├── index.html                    # HTML entry template
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite build and dev server configuration
└── .eslintrc.cjs                 # ESLint configuration with JSX a11y rules
```

---

## Development & Build Commands

Always run commands from the repository root:

```bash
# Start local development server (http://localhost:3000)
npm run dev

# Run production build via Vite (outputs to dist/)
npm run build

# Run linter (strictly enforces 0 warnings)
npm run lint

# Auto-fix linting issues
npm run lint-fix

# Format files using Prettier
npm run format

# Preview production build locally
npm run preview
```

### Docker Deployment

```bash
# Build production Docker image
docker build -t ptap-web .

# Run container on port 80
docker run -p 80:80 ptap-web
```

---

## Architecture & Subsystems

### 1. Routing & Route Protection (`src/App.jsx`)

- Built using **React Router DOM v7** data routers (`createBrowserRouter`, `createRoutesFromElements`).
- Root path renders `<DefaultPage />`, which renders `<Nav />` (hidden on `/console/*` routes), the global `<Search />` modal, and `<Outlet />`.
- Polish route conventions:
  - `/` -> Landing page
  - `/wiki` -> Wiki home (`Intro.jsx`)
  - `/wiki/:articleAddress` -> Wiki article reader (`Article.jsx`)
  - `/console/*` -> Protected editor suite (`Editor.jsx`). Protected by `isLoggedIn` check; redirects unauthenticated users to `/zabroniony`.
  - `/logowanie`, `/rejestracja`, `/resetowanie-hasla`, `/wylogowanie` -> Auth flow.
  - `/zglos-blad` -> Bug report form.
  - `/polityka-prywatnosci`, `/regulamin` -> Legal terms.
  - `/zabroniony` (403), `*` (404) -> Error pages.

### 2. Authentication & Authorization (`src/hooks/use-auth.jsx`)

- Uses Firebase Authentication via `getAuth(app)`.
- Supports:
  - Email/Password login (`signInWithEmailAndPassword`)
  - Google OAuth login (`signInWithPopup`, `GoogleAuthProvider`)
  - Registration with displayName update (`createUserWithEmailAndPassword`, `updateProfile`)
  - Password recovery (`sendPasswordResetEmail`)
  - Password updates (`updatePassword`)
- Session persistence uses Firebase's `onAuthStateChanged` combined with `sessionStorage.setItem("uid", ...)` for fast synchronous auth checks.

### 3. Realtime Database & Article Management (`src/hooks/use-db.jsx`)

- Connects to Firebase Realtime Database at path `/articles`.
- `fetchData()` listens for updates with `onValue` and converts Firebase map structures to an array with an added `address` key.
- `pushData(newData, articleExists)` handles both inserting new articles and updating existing articles (concatenating author names if edited by multiple contributors).
- Static fallback/seed data resides in `src/data/ArticleList.json`.

### 4. Article Editor (`src/components/Editor`)

- Specialized authenticated workspace for creating and updating training materials.
- State managed through `EditorContext` (`src/store/Editor/`), handling article headers, content, format options, and mode switches.
- Features:
  - Visual toolbar (`Toolbar.jsx`) for inserting headings, styling, links, lists, and code blocks.
  - Code editor view with PrismJS syntax highlighting (`use-code.jsx`).
  - Real-time preview translating HTML markup into safe React trees using `src/scripts/StringToJSX.jsx` (based on browser `DOMParser`).

### 5. Serverless Contact Function (`netlify/functions/contact.js`)

- Endpoint: `/.netlify/functions/contact`
- Accepts `POST` requests with JSON payload: `{ email, message }`.
- Sends email via `nodemailer` using Gmail SMTP (`smtp.gmail.com:465`).
- Requires environment variables configured in Netlify:
  - `MAIL_USER`: Sender Gmail address.
  - `GOOGLE_APP_PASSWORD`: Gmail App Password.
  - `MAIL_TO`: Destination inbox for messages.

---

## Coding Standards & Conventions

### 1. Accessibility (a11y)

- **High Priority**: The codebase strictly uses `eslint-plugin-jsx-a11y` with `--max-warnings 0` and targets WCAG 2.1 / 2.2 Level AA compliance.
- Complete audit findings, remediations, and verification results reside in `docs/audits/accessibility.md`.
- Ongoing developer constraints and mandatory accessibility checks reside in `.agents/rules/a11y.md`.
- All interactive elements must have accessible names, proper roles, and keyboard navigation support (avoid keyboard traps).
- Modals must use the HTML5 `<dialog>` element (see `src/components/UI/Modal/Modal.jsx`).
- Form controls must have associated `<label>` elements or `aria-label`/`aria-labelledby`.
- SVG icons and decorations must use `aria-hidden="true"` when paired with text, or include accessible labels when acting as standalone buttons.

### 2. Component Structure & Styling

- Functional components exclusively; utilize standard hooks (`useState`, `useEffect`, `useContext`, `useCallback`, `useMemo`).
- **CSS Modules**: Every component requiring dedicated styles must use a co-located `[Component].module.css` file.
  - Import as `import classes from "./Component.module.css";` or `import styles from "...";`.
  - Use `classnames` library where dynamic class combinations are needed.
- Global styles and variables (color palette, spacing, typography) reside in `src/css/index.css`.

### 3. Language & Naming

- **Code & Identifiers**: English for all variable names, component names, function names, file names, git commits, and code comments.
- **User Interface & Copy**: Polish (`pl-PL`) for all user-facing strings, page headings, button labels, validation messages, and route slugs.
- **Git Commits**: Conventional Commits standard (e.g., `feat:`, `fix:`, `fix(a11y):`, `refactor(ui):`, `chore:`).

### 4. Verification Checklist for Agents

Before finishing any task:

1. Run `npm run lint` — must exit with code `0` and `0` warnings.
2. Run `npm run build` — must build without syntax errors, missing imports, or bundling failures.
3. Ensure no secrets or API keys with write permissions are accidentally hardcoded or committed to git.
