# NBV Developer Portfolio

A responsive, frontend-only personal portfolio for Neil Bein Vargas. No build step, custom server or database is required.

## Run locally
1. Extract the ZIP. Open the `nbv-portfolio` folder in VS Code.
2. Install the **Live Server** extension, then right-click `index.html` → Open with Live Server. Alternatively, from this folder run `python -m http.server 8000`, then open `http://localhost:8000`.
3. Internet access enables Google Fonts, Three.js, GSAP/ScrollTrigger, Font Awesome, Devicon and EmailJS. Local CSS/JS, text, navigation and the 2D particle fallback are independent of the CDNs. Use a web server rather than `file://` when previewing/downloading a configured CV.

## Customize
- `js/config.js`: profile photo, CV PDF, contact details, social links, birthday/phone visibility, EmailJS configuration.
- `js/data.js`: project details, education, certificates, skills, biography and other text.
- `css/style.css`: color tokens in `:root` and `[data-theme=light]`, responsive layout and animation.
- `index.html`: section structure, hero wording, and headings.
- Place actual files in `assets/profile/`, `assets/projects/`, `assets/certificates/`, or `assets/resume/`. File paths are relative to `index.html` and case-sensitive on most hosting services. Set the appropriate fields in config/data (example `profileImage: 'assets/profile/neil.jpg'`, `cv: 'assets/resume/neil-vargas-cv.pdf'`). For projects set `thumbnail`, `screenshots: ['assets/projects/rentique-1.webp']`, `video: 'assets/projects/rentique-demo.mp4'`, and `source` only if a real repository URL exists. For credentials set `image` to the real image path. Empty strings/arrays deliberately display placeholders or unavailable notices. No actual private media or fabricated certificate images are included.

## Configure direct contact email (optional)
1. Create/sign into an EmailJS account (https://www.emailjs.com/), connect your own email service, then create an email template.
2. In the template, set the recipient address to the portfolio owner's intended email (prefer a fixed recipient, not visitor input). Configure subject `{{subject}}`, reply-to `{{reply_to}}`, and message fields `{{from_name}}`, `{{message}}`; `{{to_email}}` is supplied but a fixed destination is safer.
3. Copy your service ID, template ID and public key (never private credentials) to `emailjs` in `js/config.js`; set `destination` to the same public email in the portfolio config. Enable origin restrictions and rate limits in EmailJS if available. The client-side honeypot and cooldown are not server-side anti-spam security.
4. Test actual delivery from the deployed site to your own mailbox. The app reports an accepted request only when EmailJS returns a successful response, not guaranteed inbox delivery. Until configured it displays a clear error, and a direct mailto link remains available. No emails were sent during development.

## Deploy
Upload the entire extracted folder contents (including `index.html`, `css`, `js`, `assets`) to a static host, such as Netlify via its manual deployment interface, or commit the contents to a GitHub repository and enable GitHub Pages for the appropriate branch. No build command or environment secrets are necessary for the static files. Check all media and links on the deployed domain, and re-test the contact integration if configured.

## Privacy and launch checklist
Review whether your full birthday, phone number and email should be public. Toggle `showBirthday` and `showPhone` in config as desired (remove the birthday from `data.js` and phone fields from `config.js` entirely if they must not appear in publicly downloadable source). Publicly hosted source is readable by visitors. Replace missing assets with originals you have rights to use. Verify project descriptions, link availability, credential details and CV before publication. No supplied external project URLs or qualifications were independently verified. Sound starts off, themes cycle Auto → Dark → Light → Auto, with manual choice saved locally. Reduced-motion settings stop decorative motion.

## Development verification
JavaScript syntax checks passed. A headless Chromium test with inline local HTML/CSS/JS and external CDNs omitted passed at 1440×900 and 390×844: layout without horizontal overflow, four project filter states, project/credential dialogs, Escape/focus restoration, mobile navigation, missing CV notices, theme cycling, unconfigured contact form and back-to-top. The canvas fallback, reduced motion and sound toggle state were also checked. Browser navigation to local URLs was blocked by the environment; normal hosted loading, persistence across page reload, actual audio output, external CDN/WebGL/GSAP behavior, external project links, real asset files and EmailJS delivery remain untested. The website has not been deployed.
