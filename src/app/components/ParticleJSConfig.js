// ParticleJSConfig.js

import { useEffect } from 'react';

export default function ParticleJSConfig() {
  useEffect(() => {
    particlesJS("particles-js", {
      // Your particles.js configuration here
    });

    // Additional particles.js initialization code
    var count_particles, stats, update;
    // Stats initialization code
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, []);

  return null; // Return null as this component doesn't render any UI
}
