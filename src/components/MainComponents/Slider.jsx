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
      <article className="flex flex-col lg:flex-row">
        <section className="relative">
          {children}
          <aside>
            <picture className="lg:block xl:w-[60rem] 2xl:w-[70rem]">
              <source
                media="(min-width: 768px)"
                srcSet={images[currentIndex].Desktop}
              />
              <img
                className="w-full object-cover"
                src={images[currentIndex].Mobile}
              />
            </picture>

            <div className="flex absolute bottom-0 right-0 xl:right-[-7.5rem] 2xl:right-[-12.375rem] bg-black">
              <button 
              className="px-5 py-4 
              hover:cursor-pointer hover:bg-Very-Dark-Gray 
              transition-all md:py-[1.8rem] md:px-[2.56rem] xl:py-[1rem] xl:px-[1.35rem] 2xl:py-[1.8rem] 2xl:px-[2.56rem]"
              onClick={prevSlide}>
                <img
                  className="w-[0.75rem] md:w-[1.0625rem] object-contain"
                  src="/icon-angle-left.svg"
                  alt="Previous Slide"
                />
              </button>
              <button 
              className="px-5 py-4
              hover:cursor-pointer hover:bg-Very-Dark-Gray 
              transition-all md:py-[1.8rem] md:px-[2.56rem] xl:py-[1rem] xl:px-[1.35rem] 2xl:py-[1.8rem] 2xl:px-[2.56rem]"
              onClick={nextSlide}>
                <img
                  className="w-[0.75rem] md:w-[1.0625rem] object-contain"
                  src="/icon-angle-right.svg"
                  alt="Next Slide"
                />
              </button>
            </div>
          </aside>
        </section>

        <section 
          className="flex flex-col p-9 py-14 gap-5 justify-center md:px-[9rem] md:py-24 xl:px-[7.85rem] xl:py-8"
        >

          <div className="flex flex-col gap-5">

            <h1 className="font-bold text-[2.5rem] leading-[2.5rem] text-pretty tracking-tighter md:text-[5rem] md:leading-[.9] xl:text-[2.92rem] xl:leading-[.9] 2xl:text-[3.6rem] 2xl:leading-[.9]">
              {ArticleContent[currentIndex].Title}
            </h1>

            <p className="text-Dark-Gray font-medium text-[0.96875rem] text-pretty md:text-[2rem] xl:text-[1.16rem] 2xl:text-[1.16625rem]">
              {ArticleContent[currentIndex].Content}
            </p>

          </div>

          <button
            className="flex items-center gap-3 uppercase tracking-[12px] font-semibold hover:cursor-pointer hover:text-Dark-Gray transition-all mt-5 mb-5 md:text-3xl md:tracking-[15px] md:mt-10 lg:text-xl lg:tracking-[15px] lg:mt-0 lg:mb-0"
          >
            Shop now
            <img className="object-contain md:w-20 lg:w-16" src="/icon-arrow.svg" alt="Shop Now" />
          </button>

        </section>
      </article>
    </React.StrictMode>
  );
}

export default Slider;