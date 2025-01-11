import { useState } from "react";


const Slider = ({children}) => {
  return (
    <>
      <div class="relative">
        {children}

        <picture class="w-full h-full">
          <source
            media="(min-width: 335px)"
            srcset="/images/Desktop/desktop-image-hero-1.jpg"
          />
          <img
            class="w-full h-full"
            src="/images/Mobile/mobile-image-hero-1.jpg"
            alt=""
          />
        </picture>

        <div class="flex bg-black absolute bottom-0 right-0">
          <button class="px-5 py-4 hover:cursor-pointer">
            <img
              class="w-[10px] object-contain"
              src="/icon-angle-left.svg"
              alt=""
            />
          </button>
          <button class="px-5 py-4 hover:cursor-pointer">
            <img
              class="w-[10px] object-contain"
              src="/icon-angle-right.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      <article class="flex flex-col p-8 gap-5">
        <h1 class="font-bold text-3xl">Discover innovative ways to decorate</h1>
        <p class="text-Dark-Gray font-medium text-[14.5px]">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing your
          vision to life. Create a room in your own style with our collection and
          make your property a reflection of you and what you love.
        </p>
        <button
          class="flex items-center gap-3 mt-3 uppercase tracking-[12px] font-bold"
        >
          Shop now
          <img src="/icon-arrow.svg" alt="" />
        </button>
      </article>
    </>
  );
}

export default Slider;