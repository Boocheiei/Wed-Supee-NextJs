// components/Slider.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Slide {
  source: string;
  title: string;
}

interface SliderProps {
  title?: string;
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ title, slides }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const nextArrow = useRef<HTMLButtonElement | null>(null);

  const navigationHandle = (direction: 'left' | 'right') => {
    let newSlideNumber;
    const totalNoofSlides = sliderRef.current?.children.length! - 1;

    newSlideNumber =
      direction === "left"
        ? slideNumber === 0 ? totalNoofSlides : slideNumber - 1
        : slideNumber === totalNoofSlides ? 0 : slideNumber + 1;

    setSlideNumber(newSlideNumber);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextArrow.current?.click();
    }, 5000);

    if (slides.length > 0) {
      document.body.style.backgroundImage = `url(${slides[slideNumber].source})`;
    }

    return () => {
      clearInterval(interval);
    };
  }, [slideNumber, slides]);

  if (slides.length <= 0) {
    return <div>No slides available..</div>;
  }

  return (
    <div className="sliderWrapper">
      {title && <h3 className="sliderTitle">{title}</h3>}
      <button className="prevArrow" onClick={() => navigationHandle("left")}>
        «
      </button>
      <div className="slider" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div className={`slide${index === slideNumber ? " active" : ""}`} key={index}>
            {slide.source && (
              <img
                src={slide.source}
                alt={slide.title}
                loading="lazy"
                draggable={false}
              />
            )}
            {slide.title && <h3>{slide.title}</h3>}
          </div>
        ))}
      </div>
      <button
        className="nextArrow"
        onClick={() => navigationHandle("right")}
        ref={nextArrow}
      >
        »
      </button>
      <div className="sliderPagination">
        {slideNumber + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Slider;
