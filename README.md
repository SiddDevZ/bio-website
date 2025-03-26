# Modern Bio Website

A sleek, visually appealing bio website with glass-morphism design and interactive elements.

## Features

- Clean black and white design with glass card UI
- Animated typing effect with customizable text
- Discord profile integration
- Interactive music player with autoplay
- Social media links and project showcases
- Responsive design for all devices

## Getting Started

1. Clone this repository
```bash
git clone <repository-url>
cd bio-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Music Player

To add your own music:
1. Place MP3 files in the `public/audio` directory
2. The player will automatically display the filename without the extension
3. Music will autoplay when a user first clicks anywhere on the page (for browser autoplay policies)

### Profile Information

The main profile is located in `app/page.js`:
- Change the avatar by replacing `/images/discord-green.png`
- Modify the typing animation text by editing the strings array
- Update social media links

### Discord Profile

The Discord profile in `app/components/DiscordProfile.jsx` can be customized:
- Change the username and status
- Update the activity status

### Styling

Edit the colors and effects in `app/globals.css`:
- Modify the root variables to change the color scheme
- Adjust animation speeds and effects

## Technologies

- Next.js 15+ / React 19+
- Tailwind CSS
- Framer Motion for animations
- React Typed for typing animations
- Howler.js for audio playback
