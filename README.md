# ✨ Particle Trail Generator

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.javascript.com/) [![GitHub stars](https://img.shields.io/github/stars/yksanjo/particle-trail-generator?style=social)](https://github.com/yksanjo/particle-trail-generator/stargazers) [![GitHub forks](https://img.shields.io/github/forks/yksanjo/particle-trail-generator.svg)](https://github.com/yksanjo/particle-trail-generator/network/members) [![GitHub issues](https://img.shields.io/github/issues/yksanjo/particle-trail-generator.svg)](https://github.com/yksanjo/particle-trail-generator/issues)
[![Last commit](https://img.shields.io/github/last-commit/yksanjo/particle-trail-generator.svg)](https://github.com/yksanjo/particle-trail-generator/commits/main)


An interactive particle trail generator with beautiful visual effects. Move your mouse to create stunning particle trails with multiple styles, colors, and physics effects.

## 🎨 Features

- **8 Different Particle Styles**: Fire, Sparkle, Smoke, Star, Circle, Square, Magnetic, and Orbital
- **Color Gradients**: Custom color gradients with preset themes
- **Physics Effects**: Gravity, friction, and spread controls
- **Real-time Controls**: Adjust all parameters in real-time
- **Interactive**: Mouse and touch support
- **Smooth Animations**: 60fps particle system
- **Responsive Design**: Works on desktop and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd particle-trail-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to http://localhost:3000

5. Move your mouse around to see the particle trails!

## 🎮 Controls

### Particle Styles
- **Fire**: Glowing fire-like particles
- **Sparkle**: Twinkling star particles
- **Smoke**: Soft, expanding smoke particles
- **Star**: Rotating star shapes
- **Circle**: Smooth circular particles
- **Square**: Rotating square particles
- **Magnetic**: Particles attracted to mouse
- **Orbital**: Particles orbit around mouse

### Adjustable Parameters
- **Particle Count**: Number of particles created per frame
- **Particle Size**: Size of individual particles
- **Trail Length**: How long particles persist
- **Speed**: Initial velocity of particles
- **Gravity**: Downward force on particles
- **Friction**: Air resistance effect
- **Spread**: Randomness in particle direction
- **Opacity**: Transparency of particles
- **Life**: How long particles live

### Color Presets
- Fire (Red-Orange)
- Ocean (Cyan-Blue)
- Purple (Purple gradient)
- Green (Green gradient)
- Sunset (Pink-Red)
- Ice (Light Blue)
- Neon (Bright Cyan-Blue)
- Rainbow (Red-Cyan)

## 📁 Project Structure

```
particle-trail-generator/
├── src/
│   ├── components/
│   │   ├── ParticleSystem.jsx    # Main canvas component
│   │   ├── ControlPanel.jsx      # Control panel UI
│   │   └── *.css                 # Component styles
│   ├── utils/
│   │   └── ParticleEngine.js     # Particle system engine
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # Entry point
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **React**: UI framework
- **Vite**: Build tool and dev server
- **Canvas API**: Particle rendering
- **CSS3**: Styling and animations

## 🎯 Usage Tips

1. **Try different styles**: Each style has unique visual characteristics
2. **Experiment with colors**: Use presets or create custom gradients
3. **Adjust physics**: Lower gravity and higher friction for floating effects
4. **Increase trail length**: For longer, more persistent trails
5. **Combine settings**: Try magnetic style with low gravity for interesting effects

## 🚢 Deployment

Build for production:
```bash
npm run build
```

Deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

MIT License - feel free to use this project for learning or as a starting point for your own particle effects!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📧 Support

If you have questions or need help, please open an issue on GitHub.

---

Made with ❤️ for beautiful visual effects

