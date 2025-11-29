import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

const MagneticEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const trailRef = useRef<{ x: number; y: number; alpha: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      hue: Math.random() * 60 + 160,
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      // Add to trail
      trailRef.current.push({ ...mouseRef.current, alpha: 1 });
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
      }
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw mouse trail
      trailRef.current.forEach((point, index) => {
        point.alpha *= 0.9;
        const size = (index / trailRef.current.length) * 8;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(200, 100%, 60%, ${point.alpha * 0.3})`;
        ctx.fill();
      });
      trailRef.current = trailRef.current.filter((p) => p.alpha > 0.01);

      particlesRef.current.forEach((particle) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance && distance > 0) {
          // Attract to mouse
          const force = (1 - distance / maxDistance) * 0.5;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
        }

        // Apply friction
        particle.vx *= 0.96;
        particle.vy *= 0.96;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        const distanceOpacity = distance < maxDistance ? 1 : 0.5;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 55%, ${particle.opacity * distanceOpacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default MagneticEffect;
