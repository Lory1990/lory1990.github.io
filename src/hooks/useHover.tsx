import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);
  useEffect(
    () => {
      const node = hoverRef.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [hoverRef.current] // Recall only if ref changes
  );
  return { hoverRef, isHovered };
}