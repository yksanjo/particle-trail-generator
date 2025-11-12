class Particle {
  constructor(x, y, settings) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * settings.spread;
    this.vy = (Math.random() - 0.5) * settings.spread;
    this.size = settings.particleSize + Math.random() * 2;
    this.life = settings.life;
    this.maxLife = settings.life;
    this.settings = settings;
    this.angle = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.1;
  }

  update(mouseX, mouseY) {
    // Apply physics
    this.vy += this.settings.gravity;
    this.vx *= this.settings.friction;
    this.vy *= this.settings.friction;

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Update angle for rotation effects
    this.angle += this.rotationSpeed;

    // Decrease life
    this.life--;

    // Attract to mouse for some styles
    if (this.settings.style === 'magnetic' || this.settings.style === 'orbital') {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const force = 0.1 / (distance + 1);
      
      if (this.settings.style === 'magnetic') {
        this.vx += dx * force;
        this.vy += dy * force;
      } else if (this.settings.style === 'orbital') {
        this.vx += -dy * force;
        this.vy += dx * force;
      }
    }
  }

  draw(ctx) {
    const alpha = (this.life / this.maxLife) * this.settings.opacity;
    const progress = 1 - (this.life / this.maxLife);

    // Get color based on style
    const color = this.getColor(progress);

    ctx.save();
    ctx.globalAlpha = alpha;

    switch (this.settings.style) {
      case 'fire':
        this.drawFire(ctx, color, progress);
        break;
      case 'sparkle':
        this.drawSparkle(ctx, color, progress);
        break;
      case 'smoke':
        this.drawSmoke(ctx, color, progress);
        break;
      case 'star':
        this.drawStar(ctx, color, progress);
        break;
      case 'circle':
        this.drawCircle(ctx, color, progress);
        break;
      case 'square':
        this.drawSquare(ctx, color, progress);
        break;
      case 'magnetic':
        this.drawMagnetic(ctx, color, progress);
        break;
      case 'orbital':
        this.drawOrbital(ctx, color, progress);
        break;
      default:
        this.drawCircle(ctx, color, progress);
    }

    ctx.restore();
  }

  getColor(progress) {
    const r1 = parseInt(this.settings.color1.slice(1, 3), 16);
    const g1 = parseInt(this.settings.color1.slice(3, 5), 16);
    const b1 = parseInt(this.settings.color1.slice(5, 7), 16);
    
    const r2 = parseInt(this.settings.color2.slice(1, 3), 16);
    const g2 = parseInt(this.settings.color2.slice(3, 5), 16);
    const b2 = parseInt(this.settings.color2.slice(5, 7), 16);

    const r = Math.round(r1 + (r2 - r1) * progress);
    const g = Math.round(g1 + (g2 - g1) * progress);
    const b = Math.round(b1 + (b2 - b1) * progress);

    return `rgb(${r}, ${g}, ${b})`;
  }

  drawFire(ctx, color, progress) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.5, color.replace('rgb', 'rgba').replace(')', ', 0.5)'));
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  drawSparkle(ctx, color, progress) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    const size = this.size * (0.5 + progress * 0.5);
    
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - size);
    ctx.lineTo(this.x, this.y + size);
    ctx.moveTo(this.x - size, this.y);
    ctx.lineTo(this.x + size, this.y);
    ctx.stroke();
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  drawSmoke(ctx, color, progress) {
    const size = this.size * (1 + progress * 2);
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size);
    gradient.addColorStop(0, color.replace('rgb', 'rgba').replace(')', ', 0.3)'));
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  drawStar(ctx, color, progress) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = color;
    
    const spikes = 5;
    const outerRadius = this.size;
    const innerRadius = this.size * 0.5;
    
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / spikes;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawCircle(ctx, color, progress) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, color.replace('rgb', 'rgba').replace(')', ', 0)'));
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  drawSquare(ctx, color, progress) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }

  drawMagnetic(ctx, color, progress) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.5, color.replace('rgb', 'rgba').replace(')', ', 0.3)'));
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  drawOrbital(ctx, color, progress) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  isDead() {
    return this.life <= 0;
  }
}

class ParticleEngine {
  constructor(canvas, ctx, settings) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.settings = settings;
    this.particles = [];
    this.mouseX = canvas.width / 2;
    this.mouseY = canvas.height / 2;
  }

  updateSettings(newSettings) {
    this.settings = newSettings;
  }

  update(mouseX, mouseY) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;

    // Add new particles
    for (let i = 0; i < this.settings.particleCount / 60; i++) {
      this.particles.push(new Particle(mouseX, mouseY, this.settings));
    }

    // Update and remove dead particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update(mouseX, mouseY);
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }

    // Limit particle count
    const maxParticles = this.settings.trailLength * this.settings.particleCount;
    if (this.particles.length > maxParticles) {
      this.particles.splice(0, this.particles.length - maxParticles);
    }
  }

  draw() {
    this.particles.forEach(particle => {
      particle.draw(this.ctx);
    });
  }
}

export default ParticleEngine;

