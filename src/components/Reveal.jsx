import { useState, useEffect } from "react";

export const Reveal = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return "translate-y-0 translate-x-0 scale-100 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-12 scale-95 opacity-0";
      case "left":
        return "-translate-x-12 opacity-0";
      case "right":
        return "translate-x-12 opacity-0";
      default:
        return "translate-y-12 opacity-0";
    }
  };

  return (
    <div
      className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};
