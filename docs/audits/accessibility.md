# Accessibility (a11y) Audit Report

**Project:** PTAP (Pilot Training Arma Project)  
**Audit Date:** 2026-09-12  
**Reference Standards:** WCAG 2.1 / WCAG 2.2 (Levels A and AA)  
**Implementation Status:** Phase 1 Completed (Critical Navigation & Keyboard Fixes)

---

## 1. Executive Summary

The application has an ESLint configuration with `eslint-plugin-jsx-a11y` enabled, which currently passes with 0 errors and 0 warnings. However, static linter analysis only checks basic JSX syntax and attributes. A comprehensive manual and code-level inspection revealed **23 accessibility issues**, including several critical blockers (a keyboard trap in the code editor, lack of a Skip Link, broken browser history navigation, and missing form control labels).

### Summary Table by Subsystem

| Subsystem                         |       Evaluation       | Status & Key Observations                                                                                                                                                       |
| :-------------------------------- | :--------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Keyboard Navigation**           |      ⚠️ Critical       | Keyboard trap in the article code editor (Tab key), missing Skip Link mechanism.                                                                                                |
| **Semantic Structure & Headings** |   ⚠️ Needs Attention   | Missing `<h1>` on multiple views (Wiki, Article, 403, 404, Console), article listings rendered with `<div>` instead of lists.                                                   |
| **Forms & Input Validation**      |   ⚠️ Needs Attention   | Missing inline error messages (`aria-describedby`), missing accessible labels in editor modals (placeholder only), invalid label nesting in `ResetPassword`.                    |
| **Orientation & Context (SPA)**   |   ⚠️ Needs Attention   | Static `document.title` on route changes, no announcement for links opening in a new tab (`target="_blank"`).                                                                   |
| **Contrast & Focus**              | 🟡 Partially Compliant | Non-highlighted button borders fail contrast minimums (1.9:1), editor toolbar focus indicator has insufficient contrast; text zoom blocked by `-webkit-text-size-adjust: none`. |
| **Dialogs & Modals**              |        🟢 Good         | Semantic HTML5 `<dialog>` elements, Escape key cancellation, backdrop click handling, and focus restoration implemented.                                                        |

---

## 2. Detailed Findings

### Group 1: Critical Issues (Level A / Blockers)

#### 1.1. Keyboard Trap in the Code Editor

- **WCAG Criterion:** 2.1.2 No Keyboard Trap (Level A)
- **Location:** `src/components/Editor/hooks/use-code.jsx` (lines 84–107) in `src/components/Editor/content/EditorContent.jsx`
- **Problem:** The `checkTab` handler intercepts the `Tab` key unconditionally (`ev.preventDefault()`) to insert a tab character into `<textarea id="editing">`. A keyboard-only user navigating through the interface gets permanently trapped inside the textarea with no keyboard-only escape mechanism.
- **User Impact:** Complete loss of keyboard navigation for users authoring or editing articles.
- **Recommendation:** Allow users to press `Escape` to release tab interception (or provide an explicit key combination to toggle tab capture) and document the exit method via `aria-describedby`.

#### 1.2. Missing Skip to Main Content Link

- **WCAG Criterion:** 2.4.1 Bypass Blocks (Level A)
- **Location:** `index.html` / `src/App.jsx`
- **Problem:** The application lacks a "Skip to main content" link. Keyboard and screen reader users must tab through all top navigation items on every single page before reaching the main content area.
- **User Impact:** Inefficient, repetitive, and fatiguing navigation for keyboard and screen reader users.
- **Recommendation:** Implement a visually hidden link that appears on focus at the top of the body: `<a href="#main-content" className="skip-link">Przejdź do treści</a>` and add `id="main-content"` (with `tabIndex="-1"` if needed) to the `<main>` element.

#### 1.3. Broken Back Navigation in History Button

- **WCAG Criterion:** 2.4.4 Link Purpose (In Context) (Level A)
- **Location:** `src/components/UI/BackArrow/BackArrow.jsx` (lines 48–65)
- **Problem:** When the `to` prop is omitted, the component renders `<Link to={to ?? -1}>`. In React Router v6/v7, passing a number to `<Link>` does not trigger history delta navigation; instead, it generates `<a href="-1">`. Activating this link (e.g., on `/wiki/*` or 404 error pages) navigates to the non-existent route `/-1`, causing another 404 error.
- **User Impact:** Users cannot navigate back to the previous page.
- **Recommendation:** Replace the link with a semantic `<button type="button">` that invokes `navigate(-1)` from `useNavigate()`.

#### 1.4. Missing Accessible Labels on Editor Form Controls

- **WCAG Criterion:** 1.3.1 Info and Relationships, 4.1.2 Name, Role, Value (Level A)
- **Location:**
  - `src/components/Editor/components/Toolbar/Save.jsx` (lines 148–167)
  - `src/components/Editor/components/Toolbar/Open.jsx` (lines 48–69)
- **Problem:** In the Save Article modal, the `address` and `name` inputs lack `<label>` elements or `aria-label`/`aria-labelledby` attributes, relying solely on `placeholder`. In the Open Article modal, the `<select>` element has no associated label, and its `<option>` tags use invalid ARIA attributes (`aria-selected` and `aria-disabled`) for native HTML options.
- **User Impact:** Screen readers announce inputs as unnamed fields or omit their purpose entirely.
- **Recommendation:** Associate explicit `<label htmlFor="...">` elements with all inputs and the select dropdown.

#### 1.5. Broken Registration Link in Footer

- **WCAG Criterion:** 2.4.4 Link Purpose (In Context) (Level A)
- **Location:** `src/components/Footer/Footer.jsx` (line 29)
- **Problem:** The link "Zapisz się do projektu" targets `/sign-up`, whereas the registered route in `src/App.jsx` is `/rejestracja`.
- **User Impact:** Users clicking the registration link land on a 404 Not Found error page.
- **Recommendation:** Update the link target to `/rejestracja`.

---

### Group 2: Semantic Structure, Orientation & Context (Levels A & AA)

#### 2.1. Static Document Title in SPA

- **WCAG Criterion:** 2.4.2 Page Titled (Level A)
- **Location:** `index.html` (line 8), `src/App.jsx`
- **Problem:** The HTML `<title>` tag is statically set to `PTAP` and never updates when navigating between views (`/wiki`, `/logowanie`, `/rejestracja`, `/regulamin`, etc.).
- **User Impact:** Screen reader users do not receive confirmation that page navigation has occurred or which view is currently active.
- **Recommendation:** Dynamically update `document.title` on route transitions (e.g., "Logowanie | PTAP", "Wiki | PTAP").

#### 2.2. Missing `<h1>` Headings & Inconsistent Heading Hierarchy

- **WCAG Criterion:** 1.3.1 Info and Relationships, 2.4.6 Headings and Labels (Level A)
- **Location:**
  - `src/components/Wiki/Intro.jsx` (line 40): uses `<h2>Wiki</h2>` without an `<h1>`.
  - `src/components/Wiki/Article.jsx` (line 22): article title is an `<h2>` instead of an `<h1>`.
  - `src/pages/Error403.jsx` (line 12) & `src/pages/Error404.jsx` (line 12): error headings are `<h2>`.
  - `src/components/Editor/Main.jsx` (line 21): console main heading is `<h2>`.
  - `src/components/Editor/content/Welcome.jsx` (lines 7–8): skips directly to `<h3>` and `<h4>`.
  - `src/pages/Home.jsx` (lines 50–63): instructional video `<section>` lacks any heading or accessible name.
- **User Impact:** Assistive technologies rely on heading hierarchies for outline navigation; absence of `<h1>` obscures the primary topic of each page.
- **Recommendation:** Ensure exactly one meaningful `<h1>` per page, and maintain logical heading sequence (`h1` -> `h2` -> `h3`).

#### 2.3. Misleading 404 Error Content During Logout

- **WCAG Criterion:** 1.3.1 Info and Relationships (Level A)
- **Location:** `src/pages/Logout.jsx` (lines 20–25)
- **Problem:** While the asynchronous `logout()` call is pending, the component displays `<h2>Błąd 404</h2>` and "Nie znaleziono strony."
- **User Impact:** Users and screen readers are misinformed that a page was not found when the application is actually logging out.
- **Recommendation:** Display an appropriate pending status message (e.g., `<p role="status">Trwa wylogowywanie...</p>`).

#### 2.4. Non-Semantic Lists for Article Directory

- **WCAG Criterion:** 1.3.1 Info and Relationships (Level A)
- **Location:** `src/components/Wiki/Intro.jsx` (lines 22–34)
- **Problem:** The latest and all-article listings are rendered as sequences of `<div>` tags rather than semantic unordered lists (`<ul>`/`<li>`).
- **User Impact:** Screen readers cannot announce the total number of articles or the index of the current item in the directory.
- **Recommendation:** Wrap article link collections in `<ul>` and `<li>` elements.

#### 2.5. Links Opening in New Tabs Without Screen Reader Notice

- **WCAG Criterion:** 3.2.5 Change on Request (Level AAA) / WCAG Best Practice (Technique G200)
- **Location:** `src/pages/Signup.jsx` (lines 180–199)
- **Problem:** Links to Terms of Service and Privacy Policy contain `target="_blank"`, but lack textual notice for assistive technologies indicating that a new tab/window will be opened.
- **User Impact:** Disorientation caused by an unexpected window/tab switch.
- **Recommendation:** Add visually hidden helper text: `<span className="sr-only"> (otwiera się w nowej karcie)</span>`.

---

### Group 3: Forms, Validation & Error Handling (Levels A & AA)

#### 3.1. Lack of Accessible Inline Error Feedback

- **WCAG Criterion:** 3.3.1 Error Identification, 3.3.2 Labels or Instructions (Level A)
- **Location:** `src/components/UI/Input/Input.jsx`, `src/pages/Feedback.jsx`, `src/pages/Login.jsx`, `src/pages/Signup.jsx`
- **Problem:** Invalid fields are only visually highlighted with a red border (`classes.invalid`), and validation relies on browser `setCustomValidity` which does not render persistent inline text. On failed submit, a generic alert modal is shown.
- **User Impact:** Users with visual or cognitive impairments cannot determine which specific input failed and what correction is needed.
- **Recommendation:** Render visible inline error messages connected to the inputs via `aria-describedby` or `aria-errormessage`.

#### 3.2. Invalid Label Semantics in Password Reset Form

- **WCAG Criterion:** 1.3.1 Info and Relationships (Level A)
- **Location:** `src/pages/ResetPassword.jsx` (lines 80–94)
- **Problem:** A block `<p>` element is nested inside an inline `<label>`, which both has `htmlFor="email"` and simultaneously wraps the `<Input>` component. The email input also lacks `autoComplete="email"`.
- **User Impact:** HTML specification violation that causes erratic label announcement in screen readers.
- **Recommendation:** Separate `<label>` and `<Input>` into sibling elements within a container and add `autoComplete="email"`.

#### 3.3. Required Field Asterisks Read Literally

- **WCAG Criterion:** 1.3.1 Info and Relationships (Level A)
- **Location:** All forms in `src/pages/` (`Feedback.jsx`, `Login.jsx`, `Signup.jsx`, `ResetPassword.jsx`)
- **Problem:** The visual asterisk `<span className={classes.asterisk}>*</span>` is read aloud by Polish speech synthesizers as "gwiazdka". The inputs already carry native `required` and `aria-required="true"`.
- **User Impact:** Redundant verbal clutter in form field labels.
- **Recommendation:** Add `aria-hidden="true"` to the asterisk `<span>`.

---

### Group 4: Visuals, Contrast & Styling (Level AA)

#### 4.1. Mobile Text Resizing Prevented in Global CSS

- **WCAG Criterion:** 1.4.4 Resize Text (Level AA)
- **Location:** `src/css/index.css` (lines 16–17)
- **Problem:** The universal reset selector `*` specifies `-webkit-text-size-adjust: none;`. In WebKit-based mobile browsers (e.g., iOS Safari), this prevents users from resizing text via system accessibility settings.
- **User Impact:** Low-vision mobile users are unable to enlarge text.
- **Recommendation:** Remove the property or set `text-size-adjust: 100%;`.

#### 4.2. Low Contrast on Non-Highlighted Button Borders

- **WCAG Criterion:** 1.4.11 Non-text Contrast (Level AA)
- **Location:** `src/components/UI/Button/Button.module.css` (line 5)
- **Problem:** Buttons rendered with `highlighted={false}` (such as the "Cancel" action in modals) have a border color of `#115ab2` on a dark `#333333` body background. The resulting contrast ratio is **1.9:1**, failing the **3.0:1** minimum required for user interface component boundaries.
- **User Impact:** Secondary action buttons are difficult to distinguish for users with low contrast sensitivity.
- **Recommendation:** Lighten the border color (e.g., to `#43acf7` or `#3b9add`).

#### 4.3. Invisible Focus Indicator in Editor Toolbar

- **WCAG Criterion:** 2.4.7 Focus Visible (Level AA)
- **Location:** `src/components/Editor/components/Toolbar/Toolbar.module.css` (lines 87–89)
- **Problem:** The `.option:focus-visible` rule only changes the button background from transparent to `#343434` over a `#282828` toolbar bar. The contrast difference is ~1.2:1 and lacks any `outline`.
- **User Impact:** Keyboard users cannot clearly discern which toolbar control is currently focused.
- **Recommendation:** Add a high-contrast focus ring: `outline: 2px solid #43acf7; outline-offset: 2px;`.

#### 4.4. Undefined Background and Text Color on Form Inputs

- **WCAG Criterion:** 1.4.3 Contrast (Minimum) (Level AA)
- **Location:** `src/components/UI/Input/Input.module.css` (lines 1–13)
- **Problem:** `.input` does not explicitly set `background-color` or `color`, inheriting browser defaults. Under dark-mode user-agent styles or high-contrast OS themes, this can lead to white text on a white background or an illegible placeholder (`#6f6f6f` on dark background is only 2.5:1).
- **User Impact:** Unpredictable contrast issues depending on user OS and browser configuration.
- **Recommendation:** Explicitly define `background-color: #ffffff;` and `color: #333333;` (matching the implementation in `Search.module.css`).

#### 4.5. Content Obscured by Fixed Mobile Navigation Menu

- **WCAG Criterion:** 1.4.10 Reflow (Level AA)
- **Location:** `src/pages/PrivacyPolicy.jsx`, `src/pages/Terms.jsx`, `src/components/Nav/MobileMenu.module.css`
- **Problem:** On mobile viewports, the bottom navigation bar is fixed to the bottom of the viewport (`position: fixed; bottom: 0`). Unlike other pages, `PrivacyPolicy` and `Terms` do not render the `<Footer>` component, which normally provides bottom clearance. As a result, the final paragraphs of legal text are covered by the mobile menu.
- **User Impact:** Mobile users cannot view or read the end of legal documents.
- **Recommendation:** Add bottom spacing or render `<Footer />` on legal views.

#### 4.6. Missing Active State Indication in Desktop Navigation

- **WCAG Criterion:** 1.4.1 Use of Color (Level A)
- **Location:** `src/components/Nav/Nav.jsx`, `src/components/Nav/Nav.module.css`
- **Problem:** Top navigation links use `NavLink`, but `Nav.module.css` does not declare styles for the `.active` class.
- **User Impact:** Sighted users receive no visual indication of which page is currently active.
- **Recommendation:** Add distinctive styling for active navigation links.

---

### Group 5: ARIA, Semantics & Component States (Levels A & AA)

#### 5.1. Non-Descriptive Logo Alternative Text

- **WCAG Criterion:** 1.1.1 Non-text Content (Level A)
- **Location:** `src/components/Nav/Nav.jsx` (lines 19–22)
- **Problem:** The navbar image uses `alt="logo"`. On viewport widths `<= 1044px`, the adjacent `<h2>` text is empty, causing screen readers to announce the home link simply as "logo, link".
- **User Impact:** Screen reader users are not informed of the website/brand name when navigating to the homepage.
- **Recommendation:** Set `alt="PTAP - Pilot Training Arma Project"`.

#### 5.2. Missing `aria-expanded` on Console Menu Toggle

- **WCAG Criterion:** 4.1.2 Name, Role, Value (Level A)
- **Location:** `src/components/Editor/components/Menu/Menu.jsx` (lines 52–59)
- **Problem:** The button toggling the console drawer between expanded and collapsed states does not provide `aria-expanded`.
- **User Impact:** Screen reader users are not aware of whether the navigation menu is open or collapsed.
- **Recommendation:** Bind `aria-expanded={expandMenu}` to the trigger button.

#### 5.3. English Accessible Name in Polish UI

- **WCAG Criterion:** 3.1.2 Language of Parts (Level AA) / Repository Rules (`AGENTS.md`)
- **Location:** `src/components/Editor/content/EditorContent.jsx` (line 40)
- **Problem:** The article code textarea specifies `aria-label="Code Editor"` in English within an otherwise Polish-language interface.
- **User Impact:** Polish text-to-speech engines mispronounce the label; violates project requirement for Polish copy.
- **Recommendation:** Change label to `aria-label="Edytor kodu artykułu"`.

#### 5.4. Decorative Icons and Line Numbers Lacking `aria-hidden`

- **WCAG Criterion:** 1.1.1 Non-text Content (Level A)
- **Location:**
  - `src/components/Editor/Main.jsx` (line 26)
  - `src/components/Editor/components/Toolbar/ToolbarOptions.jsx` (line 35)
  - `src/components/Editor/content/LineNumbers.jsx` (line 8)
- **Problem:** Purely decorative FontAwesome icons and the line numbers container (which renders empty `<span>` tags for every line of code) are missing `aria-hidden="true"`.
- **User Impact:** Assistive technologies encounter redundant, empty elements in the accessibility tree.
- **Recommendation:** Add `aria-hidden="true"` to all decorative icon instances and the line numbers wrapper.

---

## 3. Recommended Implementation Roadmap

Remediation can be structured into 4 sequential phases ordered by priority:

```
[Phase 1: Critical (P1)] ──> [Phase 2: Structure (P2)] ──> [Phase 3: Forms (P3)] ──> [Phase 4: Visuals (P4)]
  - Editor Keyboard Trap       - <h1> Heading Structure     - Labels & Inline Errors     - Button Contrasts
  - Skip Link                  - Dynamic <title>            - Fix ResetPassword HTML     - Remove text-size-adjust
  - BackArrow with navigate()  - <ul> Lists in Wiki         - Hide Asterisks (*)         - Toolbar Focus Rings
  - Footer Broken Link         - Fix Logout 404 View        - target="_blank" Notices    - Mobile Spacing & Active Nav
```

1. **Phase 1: Critical Navigation & Keyboard Fixes (P1)** - ✅ **Completed**

   - [x] Eliminate the code editor keyboard trap in `use-code.jsx` (Escape key toggles tab capture, polite live region status announcement, Polish label).
   - [x] Implement the Skip Link component targeting `#main-content` (`SkipLink.jsx`, `#main-content` on all views).
   - [x] Fix history back navigation in `BackArrow.jsx` using `navigate(-1)`.
   - [x] Fix the footer link target (`/sign-up` -> `/rejestracja`).

2. **Phase 2: Semantic Structure & Document Context (P2)**

   - Audit and standardize `<h1>` headings across all views (`Wiki`, `Article`, `Editor`, error pages).
   - Implement dynamic `document.title` updates on route navigation.
   - Convert `Intro.jsx` article directory to semantic `<ul>`/`<li>` lists.
   - Replace the fake 404 message in `Logout.jsx` with a valid loading/logout status indicator.

3. **Phase 3: Form Accessibility & Instructions (P3)**

   - Add explicit `<label>` elements to editor dialog inputs in `Save.jsx` and `Open.jsx`.
   - Introduce accessible inline error messages connected via `aria-describedby`.
   - Refactor `ResetPassword.jsx` to correct invalid `<label>` nesting.
   - Mark required field asterisks with `aria-hidden="true"` and describe `target="_blank"` links.

4. **Phase 4: Visuals, Contrast & Focus Enhancements (P4)**
   - Increase border contrast for secondary buttons in `Button.module.css`.
   - Remove `-webkit-text-size-adjust: none;` from `index.css`.
   - Provide a prominent `:focus-visible` outline for toolbar options in `Toolbar.module.css`.
   - Add explicit background and text color to `Input.module.css`.
   - Add bottom clearance to legal pages on mobile devices.
   - Implement visible active link styling in desktop navigation (`Nav.module.css`).
