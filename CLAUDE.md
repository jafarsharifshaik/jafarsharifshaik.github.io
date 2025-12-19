# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jafar Sharif Shaik, deployed via GitHub Pages at jafasharif.github.io. Built using the "MyResume" Bootstrap template from BootstrapMade.

## Development

This is a static HTML/CSS/JS website with no build process. To develop locally:
- Open `index.html` directly in a browser, or
- Use any local server (e.g., `python -m http.server 8000`)

## Architecture

**Main Files:**
- `index.html` - Single-page portfolio with sections: Hero, About, Skills, Resume, Projects (Portfolio), Endorsements (Testimonials), Contact
- `portfolio-details*.html` - Individual project detail pages (8 variants for different projects)
- `assets/css/style.css` - Custom styles extending Bootstrap
- `assets/js/main.js` - Site interactivity (navigation, animations, portfolio filtering, lightbox)

**Key Libraries (loaded via CDN/vendor):**
- Bootstrap 5.3.1 - Layout and components
- AOS - Scroll animations
- Typed.js - Hero typing effect
- Isotope - Portfolio filtering
- GLightbox - Image/project lightbox
- Swiper - Testimonials slider

**Content Assets:**
- `assets/img/` - Profile images, favicons
- `assets/img/portfolio/` - Portfolio thumbnails
- `assets/img/project/` - Project detail images organized by project name

## Portfolio Filtering

Projects in the Portfolio section use CSS class filters:
- `filter-de` - Data Engineering
- `filter-da` - Data Analytics
- `filter-ds` - Data Science and EDA
- `filter-pm` - Project Management

To add a new project, add a portfolio item div in `index.html` with appropriate filter classes and create a corresponding `portfolio-details*.html` page.
