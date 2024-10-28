import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Items from "./Items";

export default function Categories({ categoryTitle, items }) {
  const ArrowFix = (arrowProps) => {
    const { carouselState, children, rtl, ...restArrowProps } = arrowProps;
    return <span {...restArrowProps}> {children} </span>;
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1800 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1572 },
      items: 7,
    },
    laptop: {
      breakpoint: { max: 1572, min: 1200 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 800, min: 620 },
      items: 3,
    },
    md_mobile: {
      breakpoint: { max: 620, min: 430 },
      items: 2,
    },
    sml_mobile: {
      breakpoint: { max: 430, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="carousel mx-[10%] flex flex-col gap-1 mt-8">
      <div className="text-2xl leading-8 font-semibold text-slate-700">
        {categoryTitle}
      </div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container flex h-[270px] "
        itemClass="max-w-auto"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderButtonGroupOutside={true}
        customLeftArrow={
          <ArrowFix>
            <button className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-black bg-opacity-5 transition-bg-opacity duration-500 rounded-lg hover:bg-opacity-30 text-white p-2">
              &#10094;
            </button>
          </ArrowFix>
        }
        customRightArrow={
          <ArrowFix>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-5 transition-bg-opacity duration-500 text-white p-2 rounded-lg z-20 hover:bg-opacity-30">
              &#10095;
            </button>
          </ArrowFix>
        }
      >
        {items.map((item) => (
          <Items key={item.id} item={item} categoryTitle={categoryTitle} />
        ))}
      </Carousel>
    </div>
  );
}
