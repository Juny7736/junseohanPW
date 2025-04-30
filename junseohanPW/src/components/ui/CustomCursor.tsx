import { useEffect, useRef, useState } from "react";
import soccerBallImage from "../../images/soccerball.png";
import "../../styles/CustomCursor.css";

interface Trail {
  x: number;
  y: number;
  opacity: number;
}

const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const ballPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocity = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationAngle = useRef<number>(0);
  const trails = useRef<Trail[]>([]);
  const soccerBall = useRef<HTMLImageElement | null>(null);

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

    // Load soccer ball image
    const img = new Image();
    img.src = soccerBallImage;
    img.onload = () => {
      soccerBall.current = img;
    };

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize ball position
    ballPosition.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      if (isDragging) {
        // While dragging, the ball follows the mouse
        ballPosition.current = { x: e.clientX, y: e.clientY };
      }

      // Add trail
      const dx =
        ballPosition.current.x -
        (trails.current[trails.current.length - 1]?.x ||
          ballPosition.current.x);
      const dy =
        ballPosition.current.y -
        (trails.current[trails.current.length - 1]?.y ||
          ballPosition.current.y);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > 2) {
        trails.current.push({
          x: ballPosition.current.x,
          y: ballPosition.current.y,
          opacity: 0.5,
        });
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      velocity.current = { x: 0, y: 0 }; // Stop movement while dragging
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
        // Calculate velocity based on drag direction and distance
        const dx = e.clientX - dragStart.current.x;
        const dy = e.clientY - dragStart.current.y;
        velocity.current = {
          x: dx * 0.1, // Scale down for more realistic speed
          y: dy * 0.1,
        };
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleInteractiveHover = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .interactive'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !soccerBall.current) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update ball position if not dragging
      if (!isDragging) {
        ballPosition.current.x += velocity.current.x;
        ballPosition.current.y += velocity.current.y;

        // Bounce off edges
        const ballSize = 32; // Soccer ball size
        if (ballPosition.current.x + ballSize / 2 > canvas.width) {
          ballPosition.current.x = canvas.width - ballSize / 2;
          velocity.current.x *= -0.8; // Reverse direction with some energy loss
        }
        if (ballPosition.current.x - ballSize / 2 < 0) {
          ballPosition.current.x = ballSize / 2;
          velocity.current.x *= -0.8;
        }
        if (ballPosition.current.y + ballSize / 2 > canvas.height) {
          ballPosition.current.y = canvas.height - ballSize / 2;
          velocity.current.y *= -0.8;
        }
        if (ballPosition.current.y - ballSize / 2 < 0) {
          ballPosition.current.y = ballSize / 2;
          velocity.current.y *= -0.8;
        }

        // Apply friction to slow down
        velocity.current.x *= 0.98;
        velocity.current.y *= 0.98;

        // Rotate based on velocity
        const speed = Math.sqrt(
          velocity.current.x * velocity.current.x +
            velocity.current.y * velocity.current.y
        );
        rotationAngle.current += speed * 0.1 * (isHovering ? 2 : 1);
      }

      // Draw trails
      trails.current = trails.current.filter((trail) => trail.opacity > 0);
      trails.current.forEach((trail) => {
        trail.opacity -= 0.05;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${trail.opacity})`;
        ctx.fill();
        ctx.closePath();
      });

      // Draw soccer ball
      const x = ballPosition.current.x;
      const y = ballPosition.current.y;
      const size = 32; // Soccer ball size

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotationAngle.current);
      ctx.globalAlpha = isHovering ? 1 : 0.8;
      if (isHovering) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 255, 0, 0.5)";
      }
      ctx.drawImage(soccerBall.current, -size / 2, -size / 2, size, size);
      ctx.restore();

      requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    handleInteractiveHover();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice, isHovering, isDragging]);

  if (isTouchDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`custom-cursor-canvas ${isVisible ? "visible" : "hidden"}`}
    />
  );
};

export default CustomCursor;
