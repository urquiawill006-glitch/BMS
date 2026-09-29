"use client";

import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/images/hero-season-03.jpg",
  "/images/hero-season-03-2.jpg",
  "/images/hero-season-03-3.jpg",
  "/images/hero-season-03-4.jpg",
  "/images/hero-season-03-5.jpg",
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.8s ease",
          }}
        />
      ))}
    </div>
  );
}
