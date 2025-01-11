import React, { useState } from "react";

const Slider = ({ children, images, ArticleContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <React.StrictMode>
      <div className="flex flex-row">
        <div className="relative">
          {children}

          <picture className="w-full h-full">
            <source
              media="(min-width: 768px)"
              srcSet={images[currentIndex].Desktop}
            />
            <img
              className="w-[180rem] h-full"
              src={images[currentIndex].Mobile}
            />
          </picture>

          <div className="flex bg-black absolute bottom-0 right-0">
            <button className="px-5 py-4 hover:cursor-pointer hover:bg-Very-Dark-Gray transition-all" onClick={prevSlide}>
              <img
                className="w-[10px] object-contain"
                src="/icon-angle-left.svg"
                alt=""
              />
            </button>
            <button className="px-5 py-4 hover:cursor-pointer hover:bg-Very-Dark-Gray transition-all" onClick={nextSlide}>
              <img
                className="w-[10px] object-contain"
                src="/icon-angle-right.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        <article className="flex flex-col p-8 gap-5 justify-center pl-36">
          <div className="flex flex-col gap-5 pr-36">
            <h1 className="font-bold text-3xl md:text-[3.5rem] md:leading-[1] md:pr-8">{ArticleContent[currentIndex].Title}</h1>
            <p className="text-Dark-Gray font-medium text-[14.5px] md:text-[18.5px] text-pretty">{ArticleContent[currentIndex].Content}</p>
          </div>
          <button
            className="flex items-center gap-3 mt-5 uppercase tracking-[12px] font-semibold hover:cursor-pointer hover:text-Dark-Gray transition-all md:text-xl md:tracking-[15px]"
          >
            Shop now
            <img src="/icon-arrow.svg" alt="" />
          </button>
        </article>
      </div>
    </React.StrictMode>
  );
}

export default Slider;