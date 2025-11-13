# Personal Portfolio Website

This is the source code for my personal portfolio website.
This project showcases a little bit of who I am and what I have done.

*Note:* This portfolio is a living project that will grow as I grow.
I am excited to continue contributing to it!  
Feedback is always welcome!

---

## Project Structure

Overview of repo structure:

```
/
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable UI components following Astro conventions
│   ├── content/                # Content collection
│         ├── projects/         # Projects collection folder for [project].md files!
│   ├── layouts/                # Page layouts
│   ├── pages/                  # Main site pages
│         ├── projects/         # Req routing page
│               ├── [id].astro  # [id].astro statically 'builds' routes
│   ├── styles/                 # CSS
└── astro.config.mjs            # Astro configuration
```

---

## Adding a New Project Page

1. Add a new markdown file:  `src/content/projects/[slug].md`
- Ensure it follows the schema defined in `config.ts`
- Again, ENSURE all the required stuff is present <3
- Add all the content!

---

**Built with <3 using [Astro](https://astro.build/)**
