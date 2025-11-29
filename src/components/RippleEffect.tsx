import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

const RippleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const animationFrameRef = useRef<number>();

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

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Add new ripple occasionally
      if (Math.random() > 0.92) {
        ripplesRef.current.push({
          x,
          y,
          radius: 0,
          maxRadius: Math.random() * 80 + 60,
          opacity: 0.6,
          speed: Math.random() * 1.5 + 1,
        });
      }
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += ripple.speed;
        ripple.opacity -= 0.01;

        if (ripple.opacity > 0 && ripple.radius < ripple.maxRadius) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(185, 84%, 55%, ${ripple.opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          return true;
        }
        return false;
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
      style={{ opacity: 0.5 }}
    />
  );
};

export default RippleEffect;
