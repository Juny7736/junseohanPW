import { useEffect, useRef, useState } from "react";
import "../../styles/CustomCursor.css";

interface Trail {
  x: number;
  y: number;
  opacity: number;
  hue: number;
  size: number;
}

const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const trails = useRef<Trail[]>([]);
  const hue = useRef<number>(0);
  const angle = useRef<number>(0);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    if (isTouchDevice || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Add multiple trails for a more dynamic effect
      for (let i = 0; i < 3; i++) {
        trails.current.push({
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          hue: hue.current,
          size: Math.random() * 15 + 5,
        });
      }

      if (trails.current.length > 50) {
        trails.current = trails.current.slice(-50);
      }

      hue.current = (hue.current + 1) % 360;
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleInteractiveHover = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .interactive'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw trails with rainbow effect
      trails.current.forEach((trail, index) => {
        const progress = index / trails.current.length;

        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.size * progress, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${trail.hue}, 100%, 50%, ${progress * 0.5})`;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = `hsla(${trail.hue}, 100%, 50%, ${progress})`;
        ctx.shadowBlur = 15;

        trail.opacity -= 0.02;
        trail.size *= 0.97;
      });

      // Draw orbital particles around the cursor
      if (isHovering) {
        angle.current += 0.1;
        for (let i = 0; i < 8; i++) {
          const orbitRadius = 30;
          const particleAngle = angle.current + (i * Math.PI * 2) / 8;
          const x =
            mousePosition.current.x + Math.cos(particleAngle) * orbitRadius;
          const y =
            mousePosition.current.y + Math.sin(particleAngle) * orbitRadius;

          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue.current + i * 45}, 100%, 50%, 0.8)`;
          ctx.fill();

          // Connect particles with lines
          if (i > 0) {
            const prevAngle = angle.current + ((i - 1) * Math.PI * 2) / 8;
            const prevX =
              mousePosition.current.x + Math.cos(prevAngle) * orbitRadius;
            const prevY =
              mousePosition.current.y + Math.sin(prevAngle) * orbitRadius;

            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = `hsla(${hue.current + i * 45}, 100%, 50%, 0.3)`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }

      // Draw main cursor
      ctx.beginPath();
      ctx.arc(
        mousePosition.current.x,
        mousePosition.current.y,
        isHovering ? 20 : 15,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `hsla(${hue.current}, 100%, 50%, 0.8)`;
      ctx.fill();

      // Add pulsing effect
      const pulseSize = isHovering ? 35 : 25;
      ctx.beginPath();
      ctx.arc(
        mousePosition.current.x,
        mousePosition.current.y,
        pulseSize + Math.sin(angle.current * 2) * 5,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = `hsla(${hue.current}, 100%, 50%, 0.3)`;
      ctx.lineWidth = 3;
      ctx.stroke();

      trails.current = trails.current.filter((trail) => trail.opacity > 0);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    handleInteractiveHover();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice, isHovering]);

  if (isTouchDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`custom-cursor-canvas ${isVisible ? "visible" : "hidden"}`}
    />
  );
};

export default CustomCursor;
