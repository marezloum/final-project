# eTube - Video Blog Website

A modern, responsive video blog website template inspired by YouTube-style platforms. This project features a clean interface for displaying and organizing video content with categories, comments, and user interaction features.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Features in Detail](#features-in-detail)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [License](#license)

## 🎯 Overview

eTube is a static HTML/CSS/JavaScript website template designed for video content sharing. It includes multiple page layouts for videos, blog posts, and contact forms, with a fully responsive design that works on desktop and mobile devices.

## ✨ Features

### Core Functionality
- **Video Gallery**: Featured videos with thumbnails and duration indicators
- **Video Player**: HTML5 video player with custom controls
- **Video Categories**: Organized content sections (Trending, Appetizers, Animal Planet, Wild & Nature)
- **Blog Posts**: Full blog post pages with rich content
- **Comment System**: Interactive comment section with reply functionality
- **User Modals**: Login and video upload modal dialogs
- **Responsive Navigation**: Mega menu with mobile-friendly toggle menu
- **Search Functionality**: Video search feature
- **Contributor Section**: Top contributors display
- **Social Media Integration**: Share buttons for Twitter, Facebook, and YouTube
- **Contact Form**: Contact page with Google Maps integration

### UI/UX Features
- Fully responsive design
- Modern, clean interface
- Smooth modal animations
- Interactive video thumbnails
- Video statistics (views, likes, dislikes)
- Breadcrumb navigation
- Footer with multiple sections

## 📁 Project Structure

```
final-project-master/
├── index.html              # Home page
├── single-blog.html        # Blog post page
├── single-video.html       # Single video page (Version 1)
├── single-video-2.html     # Single video page (Version 2)
├── contact-page.html       # Contact page
├── css/
│   ├── style.css          # Main stylesheet
│   ├── style.scss         # SCSS source file
│   └── font-awesome.min.css # Font Awesome icons
├── js/
│   └── index.js           # Main JavaScript file
├── img/                    # Image assets
├── vid/                    # Video assets
├── font/                   # Custom fonts (Poppins)
└── webfonts/              # Font Awesome webfonts
```

## 📄 Pages

### 1. Home Page (`index.html`)
- Featured video section with large hero video
- Trending videos section
- Categorized video sections (Appetizers Recipe, Animal Planet, Wild And Nature)
- Top contributors sidebar
- Newsletter subscription
- Banner advertisements

### 2. Single Blog Page (`single-blog.html`)
- Full blog post content
- Post tags and social sharing
- Comment section with nested replies
- Comment form
- Sidebar with popular videos and search

### 3. Single Video Pages
- **Version 1** (`single-video.html`): Video player with description, tags, and comments
- **Version 2** (`single-video-2.html`): Alternative video page layout

### 4. Contact Page (`contact-page.html`)
- Contact form (name, email, phone, website, message)
- Google Maps integration
- Related videos section

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **SCSS**: CSS preprocessor (source file included)
- **JavaScript (Vanilla)**: No frameworks, pure JavaScript

### Libraries & APIs
- **Font Awesome**: Icon library
- **Google Fonts**: Roboto and Poppins fonts
- **Google Maps API**: For contact page map

### Fonts
- **Poppins**: Primary font family (multiple weights included)
- **Roboto**: Secondary font from Google Fonts

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd final-project-master
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

### Google Maps Setup (Optional)

If you want to use the Google Maps feature on the contact page:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Replace the API key in `contact-page.html`:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
   ```

## 📂 File Structure Details

### HTML Files
- `index.html` - Main homepage with video gallery
- `single-blog.html` - Individual blog post page
- `single-video.html` - Video page version 1
- `single-video-2.html` - Video page version 2
- `contact-page.html` - Contact form and map

### CSS Files
- `css/style.css` - Compiled CSS (main stylesheet)
- `css/style.scss` - SCSS source file
- `css/font-awesome.min.css` - Font Awesome icon styles

### JavaScript
- `js/index.js` - All interactive functionality:
  - Modal controls (login, upload)
  - Mobile menu toggle
  - Video player controls
  - Comment submission
  - Navigation interactions

### Assets
- `img/` - All image assets (logos, thumbnails, icons)
- `vid/` - Video files (currently contains `tort.mp4`)
- `font/poppins/` - Poppins font family files
- `webfonts/` - Font Awesome webfont files

## 🎨 Features in Detail

### Modal System
- **Upload Modal**: Form for uploading videos (title, description, file upload)
- **Login Modal**: User authentication form
- Click outside modal or close button to dismiss

### Navigation
- **Desktop**: Horizontal menu with mega menu dropdown
- **Mobile**: Hamburger menu with collapsible sections
- Smooth transitions and animations

### Video Features
- Video duration display
- View count, like/dislike counters
- Video categories and tags
- Related videos sidebar
- Video player with custom controls

### Comment System
- Display existing comments
- Submit new comments via form
- Reply functionality (UI ready)
- Comment timestamps and user info

## 🎨 Customization

### Changing Colors
Edit `css/style.css` or `css/style.scss` to modify color schemes.

### Adding Videos
1. Add video files to `vid/` directory
2. Update HTML with new video paths:
   ```html
   <video src="vid/your-video.mp4" controls></video>
   ```

### Modifying Content
- Edit HTML files directly to change text content
- Update images in `img/` directory
- Modify video thumbnails and metadata

### Styling
- Edit `css/style.css` for quick changes
- Or modify `css/style.scss` and recompile (requires SCSS compiler)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- This is a **static website template** - no backend functionality
- Forms are for display purposes only (no form processing)
- Video upload and login modals are UI-only (no actual functionality)
- Google Maps requires an API key to function
- All data is hardcoded in HTML (no database)

## 🔧 Future Enhancements

Potential improvements for a production version:
- Backend integration for video uploads
- User authentication system
- Database for videos and comments
- Video streaming capabilities
- User profiles and channels
- Video search with filtering
- Playlist functionality
- Analytics integration

## 📄 License

This project appears to be a template. Please check with the original creator (Themeix) for licensing information. The copyright notice in the footer indicates: "Etube © 2022 - All rights reserved. - Proudly made with Themeix"

## 👥 Credits

- **Themeix**: Template creator
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Poppins Font**: Custom font family

## 📞 Support

For issues or questions:
- Email: info@themeix.com (as shown in the template)
- Check the contact page for more information

---

**Note**: This is a frontend template. For a fully functional video platform, you would need to integrate with a backend service, database, and video hosting solution.

