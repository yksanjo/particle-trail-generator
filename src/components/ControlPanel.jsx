import React from 'react';
import './ControlPanel.css';

const STYLE_PRESETS = [
  { name: 'Fire', value: 'fire' },
  { name: 'Sparkle', value: 'sparkle' },
  { name: 'Smoke', value: 'smoke' },
  { name: 'Star', value: 'star' },
  { name: 'Circle', value: 'circle' },
  { name: 'Square', value: 'square' },
  { name: 'Magnetic', value: 'magnetic' },
  { name: 'Orbital', value: 'orbital' }
];

const COLOR_PRESETS = [
  { name: 'Fire', color1: '#ff6b6b', color2: '#ffa500' },
  { name: 'Ocean', color1: '#4ecdc4', color2: '#44a3c4' },
  { name: 'Purple', color1: '#667eea', color2: '#764ba2' },
  { name: 'Green', color1: '#56ab2f', color2: '#a8e063' },
  { name: 'Sunset', color1: '#f093fb', color2: '#f5576c' },
  { name: 'Ice', color1: '#89f7fe', color2: '#66a6ff' },
  { name: 'Neon', color1: '#00f2fe', color2: '#4facfe' },
  { name: 'Rainbow', color1: '#ff6b6b', color2: '#4ecdc4' }
];

function ControlPanel({ settings, updateSetting, isPlaying, setIsPlaying }) {
  const handlePreset = (preset) => {
    updateSetting('color1', preset.color1);
    updateSetting('color2', preset.color2);
  };

  return (
    <div className="control-panel">
      <div className="panel-header">
        <h3>⚙️ Controls</h3>
        <button 
          className="play-pause-btn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      <div className="control-section">
        <label>Style</label>
        <div className="style-buttons">
          {STYLE_PRESETS.map(preset => (
            <button
              key={preset.value}
              className={`style-btn ${settings.style === preset.value ? 'active' : ''}`}
              onClick={() => updateSetting('style', preset.value)}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="control-section">
        <label>Color Presets</label>
        <div className="color-presets">
          {COLOR_PRESETS.map(preset => (
            <button
              key={preset.name}
              className="color-preset-btn"
              onClick={() => handlePreset(preset)}
              style={{
                background: `linear-gradient(135deg, ${preset.color1} 0%, ${preset.color2} 100%)`
              }}
              title={preset.name}
            />
          ))}
        </div>
      </div>

      <div className="control-section">
        <label>Custom Colors</label>
        <div className="color-inputs">
          <div className="color-input-group">
            <label>Color 1</label>
            <input
              type="color"
              value={settings.color1}
              onChange={(e) => updateSetting('color1', e.target.value)}
            />
          </div>
          <div className="color-input-group">
            <label>Color 2</label>
            <input
              type="color"
              value={settings.color2}
              onChange={(e) => updateSetting('color2', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="control-section">
        <label>
          Particle Count: {settings.particleCount}
        </label>
        <input
          type="range"
          min="10"
          max="200"
          value={settings.particleCount}
          onChange={(e) => updateSetting('particleCount', parseInt(e.target.value))}
        />
      </div>

      <div className="control-section">
        <label>
          Particle Size: {settings.particleSize}
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={settings.particleSize}
          onChange={(e) => updateSetting('particleSize', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-section">
        <label>
          Trail Length: {settings.trailLength}
        </label>
        <input
          type="range"
          min="5"
          max="50"
          value={settings.trailLength}
          onChange={(e) => updateSetting('trailLength', parseInt(e.target.value))}
        />
      </div>

      <div className="control-section">
        <label>
          Speed: {settings.speed}
        </label>
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.1"
          value={settings.speed}
          onChange={(e) => updateSetting('speed', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-section">
        <label>
          Gravity: {settings.gravity.toFixed(2)}
        </label>
        <input
          type="range"
          min="0"
          max="0.5"
          step="0.01"
          value={settings.gravity}
          onChange={(e) => updateSetting('gravity', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-section">
        <label>
          Friction: {settings.friction.toFixed(2)}
        </label>
        <input
          type="range"
          min="0.8"
          max="1"
          step="0.01"
          value={settings.friction}
          onChange={(e) => updateSetting('friction', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-section">
        <label>
          Spread: {settings.spread}
        </label>
        <input
          type="range"
          min="1"
          max="20"
          value={settings.spread}
          onChange={(e) => updateSetting('spread', parseInt(e.target.value))}
        />
      </div>

      <div className="control-section">
        <label>
          Opacity: {settings.opacity.toFixed(2)}
        </label>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          value={settings.opacity}
          onChange={(e) => updateSetting('opacity', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-section">
        <label>
          Life: {settings.life}
        </label>
        <input
          type="range"
          min="20"
          max="120"
          value={settings.life}
          onChange={(e) => updateSetting('life', parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}

export default ControlPanel;

