import React, { useState, useEffect, useRef } from "react";
import "./slider.scss";

const Slide = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/tw.jpg",
      title: "Movie 1",
    },
    {
      id: 2,
      image: "/house.jpg",
      title: "Movie 2",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <button className="slider-arrow left" onClick={prevSlide}>
        &lt;
      </button>

      <div className="slides" ref={slideRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-arrow right" onClick={nextSlide}>
        &gt;
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
