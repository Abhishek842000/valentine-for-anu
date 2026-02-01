# 💝 Valentine's Day Special Website

A romantic, interactive website to ask that special someone to be your Valentine!

## ✨ Features

- **Interactive Question Page**: "Will you be my Valentine?" with clever button mechanics
- **Escaping "No" Button**: The "No" button moves away when hovered/clicked and shrinks over time
- **Beautiful Animations**: Floating hearts, gradient backgrounds, pulsing effects
- **Celebration Page**: Confetti, falling flower petals, rising hearts, and romantic GIF
- **Fully Responsive**: Works perfectly on desktop and mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks needed

## 🚀 How to Deploy (100% FREE)

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub account** (if you don't have one): [github.com](https://github.com)

2. **Create a new repository**:
   - Click the "+" icon → "New repository"
   - Name it: `valentine-website` (or any name you like)
   - Make it **Public**
   - Click "Create repository"

3. **Upload your files**:
   - Click "uploading an existing file"
   - Drag and drop ALL files from the `v-day` folder
   - Click "Commit changes"

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section (left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"

5. **Get your link**:
   - Wait 1-2 minutes
   - Your site will be live at: `https://yourusername.github.io/valentine-website/`

### Option 2: Netlify (Easiest - Drag & Drop)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up with GitHub/Email (FREE)
3. Click "Add new site" → "Deploy manually"
4. Drag the entire `v-day` folder into the upload area
5. Done! You'll get a link like: `https://random-name-123.netlify.app`
6. (Optional) Click "Site settings" → "Change site name" to customize the URL

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (FREE)
3. Click "Add New" → "Project"
4. Import your GitHub repository (after pushing to GitHub)
5. Click "Deploy"
6. Your site will be live at: `https://your-project.vercel.app`

### Option 4: Surge.sh (Command Line - Super Fast)

```bash
# Install surge globally (one-time)
npm install -g surge

# Navigate to the v-day folder
cd v-day

# Deploy!
surge
```

Follow the prompts and you'll get a URL like: `https://your-custom-name.surge.sh`

## 📱 Sharing the Link

Once deployed, simply send the link to your special someone!

**Pro Tips**:
- Send it via text message with a sweet message
- You can use a URL shortener like [bit.ly](https://bitly.com) to make it prettier
- Test it first before sending!

## 🎨 Customization Ideas

### Change Colors
Edit `css/main.css` and `css/celebration.css`:
- Look for `background: linear-gradient(...)` to change color schemes
- Use her favorite colors!

### Personalize the Message
Edit `celebration.html`:
- Change "Yayyyy!!!!!" to include her name
- Add more personal messages

### Change the GIF
Edit `celebration.html`:
- Replace the Giphy URL with your favorite romantic GIF
- Find GIFs at [giphy.com](https://giphy.com)

### Add Photos
- Add your photos to the `assets/images/` folder
- Update the `celebration.html` to include them

## 📂 Project Structure

```
v-day/
├── index.html              # Main page (The Question)
├── celebration.html        # Success page
├── css/
│   ├── main.css           # Styles for main page
│   └── celebration.css    # Styles for celebration page
├── js/
│   ├── no-button.js       # Escaping button logic
│   └── celebration.js     # Confetti & animations
└── assets/
    └── images/            # Your images (if any)
```

## 💻 Local Testing

Simply open `index.html` in your browser - no server needed!

Or use VS Code Live Server:
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Click "Open with Live Server"

## 🐛 Troubleshooting

**GIF not loading?**
- Check your internet connection
- The GIF is loaded from Giphy CDN
- You can download a GIF and use a local file instead

**Animations laggy on mobile?**
- Reduce the number of particles in `celebration.js`
- Lower the `setInterval` frequency

**Buttons not working?**
- Make sure JavaScript is enabled in the browser
- Check browser console for errors (F12)

## 📝 License

Free to use for personal purposes. Make someone's day special! ❤️

---

Made with 💕 for Valentine's Day
