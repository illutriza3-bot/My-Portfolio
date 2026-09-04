# Riza O. Illut — Portfolio

A single-page portfolio site built with plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies to install. It's designed to be easy to host on GitHub Pages and easy to update without touching design code.

## File structure

```
├── index.html          Page structure (sections, headings, layout)
├── css/
│   └── style.css       All visual styling
├── js/
│   ├── data.js          ← EDIT THIS FILE to update your content
│   └── app.js           Renders data.js into the page (no editing needed)
├── assets/
│   ├── riza-profile.jpg Profile photo
│   └── favicon.svg      Browser tab icon
└── README.md
```

## Editing your content

Almost everything on the site — your headline, experience, tools, projects, testimonials, contact info — lives in **`js/data.js`**. Open that file in any text editor, change the text between the quotes, save, and reload the page.

You do **not** need to touch `index.html`, `style.css`, or `app.js` for normal updates.

### Common edits

**Replace a sample case study with a real one:**
In `js/data.js`, find the `projects` array and edit an entry (set `sample: false` once it's a real project):
```js
{
  sample: false,
  category: "Technical Support",
  title: "Resolved a recurring MT5 platform sync issue",
  problem: "What was actually going wrong.",
  approach: "What you did to investigate and fix it.",
  outcome: "What changed as a result."
}
```

**Add a real testimonial:**
In the `testimonials` array:
```js
{ placeholder: false, name: "Jane Doe", position: "Operations Manager, Acme Co.", quote: "Riza kept our ticket queue under control..." }
```

**Update contact info, LinkedIn, or GitHub:**
Edit the `person` object at the top of `data.js` — set `linkedin` and `github` to your profile URLs and they'll automatically appear as active links in the Contact section.

**Make the "Leave feedback" form actually email you (do this once):**
The site has a form where former colleagues can leave feedback. Out of the box it just opens an email draft on their device — which only works if they have an email app set up, and doesn't work reliably from a browser-only Gmail account. To make it send straight to your inbox automatically:

1. Go to [formspree.io](https://formspree.io) and sign up free with your email — no credit card needed.
2. Click **New Form**, give it any name (e.g. "Portfolio Feedback").
3. Formspree gives you an endpoint URL that looks like `https://formspree.io/f/abcdwxyz`. Copy it.
4. Open `js/data.js`, find `feedbackFormEndpoint: ""` inside the `person` object, and paste the URL between the quotes:
   ```js
   feedbackFormEndpoint: "https://formspree.io/f/abcdwxyz"
   ```
5. Save, redeploy, and submit the form once yourself as a test. Formspree emails you a one-time confirmation link the first time a submission comes in — click it to activate the form.
6. After that, every submission arrives in your inbox automatically, and the person filling it out sees a "Thank you — your feedback was sent" message with no email app required on their end.

Formspree's free plan includes 50 submissions a month, which is far more than a feedback form like this will realistically need.

**Add a new job or tool:**
Copy an existing object in the `experience` or `tools` array and edit the fields — no other file needs to change.

## Running it locally

No installation needed. Either:

1. Open `index.html` directly in a browser, or
2. Run a simple local server from the project folder for the most accurate preview:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository (see naming suggestion below).
2. Push these files to the repository's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. In your repository on GitHub, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub will publish your site at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO/
   ```
   It can take a minute or two to go live after the first push.

### Suggested repository name
`riza-illut-portfolio`

### Suggested domain ideas (optional, if you want a custom domain later)
- rizaillut.com
- rizaillut.dev
- hireriza.com

## SEO

The `<title>` and meta description in `index.html` are already set:

- **Title:** Riza O. Illut — Technical & Administrative Virtual Assistant
- **Description:** Riza O. Illut is a Technical & Administrative Virtual Assistant with 8+ years across customer support, technical support, software engineering, and business operations. Available for remote work.

If you change your positioning later, update these two lines near the top of `index.html`.

## Accessibility notes

- All interactive elements (nav, timeline entries, tool cards) are real `<button>`/`<a>` elements reachable and operable by keyboard.
- Focus states are visible (amber outline) for keyboard navigation.
- Animations respect the operating system's "reduce motion" setting.
- Images include descriptive alt text.

## Design rationale

The visual language borrows from the ticket/case-management systems you work in every day (ServiceNow, Jira) rather than a generic template: the experience section is framed as a "case log" with status markers, and small data points (dates, ticket-style labels) use a monospace type to echo system-generated text, while headlines and body copy use a warmer, human sans-serif. The palette pairs a dark ink-navy with a neutral paper background and two accent colors — teal for "resolved" and amber for "active" — mirroring status colors in the support tools you already use. Nothing is decorative for its own sake: every visual device is tied back to the kind of work you actually do.

No statistics, testimonials, or projects have been invented. Placeholders are clearly marked in `data.js` so you can tell at a glance what's real and what's waiting for you to fill in.
