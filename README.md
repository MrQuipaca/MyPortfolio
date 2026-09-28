# Domingos Quipaca — Portfolio

A responsive personal portfolio site for a Junior Front-End Developer, built with vanilla HTML, CSS and JavaScript. Features a dark, glassmorphism-style UI with animated hero section, scroll reveal effects, and a working contact form.

🔗 **Live demo:** _add your Netlify/Vercel link here_

## Features

- **Animated hero section** — typing effect that cycles through job titles, floating profile circle, and a decorative code snippet card
- **Glassmorphism UI** — frosted-glass cards throughout (about stats, skill cards, project cards, timeline, contact cards)
- **Scroll reveal animations** — sections fade/slide into view using `IntersectionObserver`
- **Animated skill bars** — progress bars for frontend, JS/React, and tools & platforms
- **Animated counters** — stat numbers count up when scrolled into view
- **Project showcase** — cards with hover tilt effect, live preview + GitHub links, and a "View All" toggle to reveal more projects
- **Interactive timeline** — education & experience journey
- **Working contact form** — powered by [EmailJS](https://www.emailjs.com/), no backend required
- **Mobile navigation drawer** — hamburger menu with slide-in panel on tablet/mobile
- **Fully responsive** — tuned breakpoints from desktop down to small phones (1100px, 900px, 768px, 600px, 400px)
- **Extras** — active nav-link highlighting on scroll, cursor glow effect, floating background stars


## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — custom properties, Flexbox, CSS Grid, keyframe animations
- **JavaScript (vanilla)** — no frameworks, DOM APIs + `IntersectionObserver`
- **[EmailJS](https://www.emailjs.com/)** — contact form email delivery
- **[Font Awesome](https://fontawesome.com/)** — icons
- **[Google Fonts](https://fonts.google.com/)** — Inter & Poppins


## 📁 Project Structure
```
├── index.html          # Page markup (nav, hero, about, skills, projects, journey, contact, footer)
├── style.css           # All styling, organized by section, with responsive breakpoints
├── script.js           # Typing effect, scroll reveal, nav highlighting, form handling, etc.
├── image/              # Profile photo, project screenshots
└── assets/favicon/     # Favicon set
```

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/MrQuipaca/your-repo-name.git
   cd your-repo-name
   ```

2. **Add your images**
   Place your profile photo and project screenshots inside the `image/` folder, matching the filenames referenced in `index.html` (or update the `src` paths).

3. **Set up EmailJS**
   The contact form uses EmailJS. Sign up at [emailjs.com](https://www.emailjs.com/) and replace the following in `index.html` / `script.js` with your own credentials:
   ```js
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this);
   ```

4. **Run locally**
   No build step needed — just open `index.html` in a browser, or serve it with a local server (e.g. VS Code's Live Server extension) so relative paths and fonts load correctly.

5. **Deploy**
   Drag-and-drop the folder onto [Netlify](https://www.netlify.com/), or connect the repo for continuous deployment. Vercel and GitHub Pages work equally well for a static site like this.


## 📱 Responsive Breakpoints
| Breakpoint | Target |
|---|---|
| `> 1100px` | Desktop |
| `≤ 1100px` | Small laptops / tablets (hero stacks) |
| `≤ 900px`  | Mobile nav drawer activates |
| `≤ 768px`  | Small tablets |
| `≤ 600px`  | Phones |
| `≤ 400px`  | Small phones |


## 📬 Contact
- **Email:** domikipas@gmail.com
- **WhatsApp:** +91 85230 89576
- **GitHub:** [@MrQuipaca](https://github.com/MrQuipaca)
- **LinkedIn:** [mrquipaca](https://www.linkedin.com/in/mrquipaca/)


## 📄 License
© 2026 Domingos Quipaca. All Rights Reserved.