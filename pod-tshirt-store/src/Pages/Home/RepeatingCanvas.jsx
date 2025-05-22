// src/components/Home/RepeatingCanvas.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

// Add your actual images to public/images/
const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

export default function RepeatingCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".img-box",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "1rem",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    objectFit: "cover",
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      {images.map((src, index) => (
        <div className="img-box" key={index}>
          <img src={src} style={imgStyle} alt={`img-${index}`} />
        </div>
      ))}
    </div>
  );
}
