# Jana Hatasova — Portfolio Website v1

Personal portfolio website showcasing projects, skills, and contact information.

Live site: https://janahatasova-v1.vercel.app/

## Tech Stack
- HTML5
- CSS3 / SCSS (compiled to CSS)
- JavaScript (vanilla)

## Project Structure
- public/
	- index.html
	- main.js
	- main.min.js (generated)
	- css/
		- style.css
		- style.min.css (generated)
		- base.css
		- layout.css
		- nav.css
		- home.css
		- about.css
		- projects.css
		- contact.css
		- components.css
		- animations.css
		- responsive.css
		- assets/

## SEO
- robots.txt and sitemap.xml are located in public/
- Metadata (Open Graph, Twitter, canonical, description) is defined in public/index.html

## Run Locally
Open public/index.html in your browser.

## Minify Assets
1. Install dev dependencies: npm install
2. Build for production: npm run build

This generates a dist/ folder with minified assets and an index.html that points to css/style.min.css and main.min.js.

## Vercel
Vercel is configured to run the build and deploy the dist/ folder (see vercel.json).

## Deployment
This site is static and can be deployed on any static host (Netlify, Vercel, GitHub Pages, etc.).