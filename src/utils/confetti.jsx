import confetti from 'canvas-confetti';

const throwConfetti = () => {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ['#FFD700', '#FF2D00', '#2D00FF'];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      startVelocity: 30,
      decay: 0.9,
      scalar: 1.2,
      colors: colors,
      origin: { x: Math.random(), y: Math.random() },
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
};

export default throwConfetti;
