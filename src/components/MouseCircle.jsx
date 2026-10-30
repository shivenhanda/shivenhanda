
import { useEffect, useState } from "react";

export default function MouseCircle() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-circle"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className="mouse-circle-dot" />
    </div>
  );
}
