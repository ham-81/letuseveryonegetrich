import React, { useEffect } from "react";
import "./ZoomOnScroll.css";

const ZoomOnScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".image");
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate distance from the center of the viewport
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);

        // Calculate scale based on the distance
        const scale = 1 + Math.max(0, 1 - distanceFromCenter / windowHeight);

        // Apply zoom effect
        image.style.transform = `scale(${scale})`;
      });
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="image"
        style={{ backgroundImage: "url('https://via.placeholder.com/800')" }}
      ></div>
      <div
        className="image"
        style={{ backgroundImage: "url('https://via.placeholder.com/900')" }}
      ></div>
      <div
        className="image"
        style={{ backgroundImage: "url('https://via.placeholder.com/1000')" }}
      ></div>
    </div>
  );
};

export default ZoomOnScroll;
