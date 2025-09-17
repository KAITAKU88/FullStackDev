 // Theme switcher functionality
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }
  
  init() {
    // Set initial theme
    this.setTheme(this.currentTheme);
    
    // Add event listeners
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const theme = e.target.dataset.themeBtn;
        this.setTheme(theme);
      });
    });
    
    // System theme detection
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (this.currentTheme === 'auto') {
          this.applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
  
  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
    this.updateActiveButton(theme);
  }
  
  applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    
    // Animate theme transition
    document.body.style.setProperty('--transition-duration', '0.3s');
    setTimeout(() => {
      document.body.style.removeProperty('--transition-duration');
    }, 300);
  }
  
  updateActiveButton(theme) {
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.themeBtn === theme);
    });
  }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});

// Custom property utilities
const CSSCustomProperties = {
  // Get custom property value
  get(property, element = document.documentElement) {
    return getComputedStyle(element).getPropertyValue(property).trim();
  },
  
  // Set custom property value
  set(property, value, element = document.documentElement) {
    element.style.setProperty(property, value);
  },
  
  // Remove custom property
  remove(property, element = document.documentElement) {
    element.style.removeProperty(property);
  },
  
  // Animate custom property
  animate(property, fromValue, toValue, duration = 1000, element = document.documentElement) {
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Simple easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      // Interpolate between values (assuming numeric values)
      const from = parseFloat(fromValue);
      const to = parseFloat(toValue);
      const current = from + (to - from) * easeOutCubic;
      
      this.set(property, current + (toValue.match(/[a-z%]+$/i)?.[0] || ''), element);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }
};

// Example usage
// CSSCustomProperties.set('--primary-color', '#ff6b6b');
// CSSCustomProperties.animate('--progress', '0%', '100%', 2000);