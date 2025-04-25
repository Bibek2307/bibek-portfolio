import React, { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = (e) => {
      const hovered = e.target.closest('[class*="hover"]');
      setIsHovering(!!hovered);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleHoverStart);

    document.body.classList.add("cursor-none");

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleHoverStart);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
    mixBlendMode: "difference",
  };

  const blinkKeyframes = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        ${blinkKeyframes}
      `}</style>

      {isVisible && (
        <div style={cursorStyle}>
          {/* Inner Cursor Content */}
          <div
            style={{
              transform: isClicking ? "scale(0.9)" : "scale(1)",
              transition: "transform 150ms ease",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: "24px",
              color: "#10B981", // emerald-500
            }}
          >
            <span
              style={{
                transition: "transform 300ms",
                transform: isHovering ? "translateX(-5px)" : "translateX(0px)",
              }}
            >
              {"{"}
            </span>
            <span
              style={{
                height: isHovering ? "24px" : "20px",
                width: "8px",
                margin: "0 4px",
                backgroundColor: isHovering ? "#6EE7B7" : "#34D399", // lighter emerald
                animation: "blink 1s infinite",
              }}
            />
            <span
              style={{
                transition: "transform 300ms",
                transform: isHovering ? "translateX(5px)" : "translateX(0px)",
              }}
            >
              {"}"}
            </span>

            {/* Outer Ring */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: isHovering ? "48px" : "32px",
                height: isHovering ? "48px" : "32px",
                borderRadius: "50%",
                border: "2px solid #10B981",
                opacity: isHovering ? 0.5 : 0.3,
                transition: "all 300ms",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
