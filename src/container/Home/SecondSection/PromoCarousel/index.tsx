import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";

function PromoCarousel() {
  return (
    <>
      <h3 className="text-heading-3 text-white font-bold font-label pt-14 mb-4">
        Promo Liburan
      </h3>
      <Carousel
        className="py-5"
        containerClass="carousel-container"
        arrows
        centerMode={false}
        draggable
        swipeable
        customLeftArrow={
          <button
            type="button"
            aria-label="Go To Next Slide"
            className="absolute z-50 left-0 opacity-50 hover:opacity-100"
          >
            <Image
              src="../../../../../public/assets/icons/left-arrow-rounded.svg"
              alt="Left"
              width={75}
              height={75}
            />
          </button>
        }
        customRightArrow={
          <button
            type="button"
            aria-label="Go To Previous Slide"
            className="absolute z-50 right-0 opacity-50 hover:opacity-100"
          >
            <Image
              src="../../../../../public/assets/icons/right-arrow-rounded.svg"
              alt="Right"
              width={75}
              height={75}
            />
          </button>
        }
        partialVisible
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 720,
            },
            items: 2,
            partialVisibilityGutter: 100,
          },
        }}
      >
        <article className="bg-white shadow-lg  rounded-xl overflow-hidden w-[500px] h-[312px] flex"></article>
        <article className="bg-white shadow-lg  rounded-xl overflow-hidden w-[500px] h-[312px] flex"></article>
        <article className="bg-white shadow-lg  rounded-xl overflow-hidden w-[500px] h-[312px] flex"></article>
      </Carousel>
    </>
  );
}

export default PromoCarousel;
