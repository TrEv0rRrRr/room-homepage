import { useState } from "react";

const Slider = ({ children, images, ArticleContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative">
        {children}

        <picture className="w-full h-full">
          <source
            media="(min-width: 335px)"
            srcSet={images[currentIndex].Desktop}
          />
          <img
            className="w-full h-full"
            src={images[currentIndex].Mobile}
          />
        </picture>

        <div className="flex bg-black absolute bottom-0 right-0">
          <button className="px-5 py-4 hover:cursor-pointer" onClick={prevSlide}>
            <img
              className="w-[10px] object-contain"
              src="/icon-angle-left.svg"
              alt=""
            />
          </button>
          <button className="px-5 py-4 hover:cursor-pointer" onClick={nextSlide}>
            <img
              className="w-[10px] object-contain"
              src="/icon-angle-right.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      <article className="flex flex-col p-8 gap-5">
        <h1 className="font-bold text-3xl">{ArticleContent[currentIndex].Title}</h1>
        <p className="text-Dark-Gray font-medium text-[14.5px]">{ArticleContent[currentIndex].Content}</p>
        <button
          className="flex items-center gap-3 mt-5 uppercase tracking-[12px] font-bold"
        >
          Shop now
          <img src="/icon-arrow.svg" alt="" />
        </button>
      </article>
    </>
  );
}

export default Slider;