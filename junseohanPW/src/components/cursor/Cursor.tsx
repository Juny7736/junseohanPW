import { useEffect, useRef, useState } from "react";
import "../../styles/cursor.css";

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    if (isTouchDevice) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice]);

  useEffect(() => {
    if (!cursorRef.current) return;
    cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
  }, [position]);

  if (isTouchDevice) return null;

  return (
    <div ref={cursorRef} className={`cursor ${isVisible ? "visible" : ""}`} />
  );
};

const AmongUs: React.FC = () => {
  const characterRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    if (isTouchDevice) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .interactive'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    const animate = () => {
      const ease = 0.06;
      const dx = targetPosition.current.x - position.x;
      const dy = targetPosition.current.y - position.y;

      setPosition({
        x: position.x + dx * ease,
        y: position.y + dy * ease,
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    handleInteractiveElements();

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [isTouchDevice, position]);

  useEffect(() => {
    if (!characterRef.current) return;
    characterRef.current.style.transform = `translate(${position.x - 15}px, ${
      position.y - 15
    }px)`;
  }, [position]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={characterRef}
      className={`among-us ${isVisible ? "visible" : ""} ${
        isHovering ? "hovering" : ""
      }`}
    >
      <div className="among-us-character">
        <div className="among-us-body"></div>
        <div className="among-us-backpack"></div>
        <div className="among-us-visor"></div>
        <div className="among-us-legs"></div>
      </div>
    </div>
  );
};

export { Cursor, AmongUs };
