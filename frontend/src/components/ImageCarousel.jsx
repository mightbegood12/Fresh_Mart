import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import cacheImages from "../Utils/imageLoader";

const images = [
  { src: "/assets/img1.jpg", alt: "image#1" },
  { src: "/assets/img2.jpg", alt: "image#2" },
  { src: "/assets/img3.jpg", alt: "image#3" },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    cacheImages(images)
      .then(() => {
        setIsloading(false);
      })
      .catch(() => {
        setIsloading(false);
      });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  const placeholderImage = "https://via.placeholder.com/600x400.png";

  return (
    <section
      aria-label="Grocery Carousel"
      className="flex items-center justify-center drop-shadow-md overflow-hidden"
    >
      {isloading ? (
        <HashLoader
          color="#70ff00"
          size={100}
          cssOverride={{
            height: "24rem",
            width: "24rem",
          }}
          speedMultiplier={4}
        />
      ) : (
        <div className="carousel relative max-h-96 max-w-6xl overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-5 transition-bg-opacity duration-500 text-white p-2 rounded-lg z-20 hover:bg-opacity-30"
          >
            &#10594;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-5 transition-bg-opacity duration-500 text-white p-2 rounded-lg z-20 hover:bg-opacity-30"
          >
            &#10596;
          </button>
          <ul className="relative flex transition-transform ease-in-out">
            {images.map((image, index) => (
              <li
                key={index}
                className={`slide h-full w-full transition-opacity duration-300 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 flex-shrink-0 duration-300 delay-0 z-10"
                    : "opacity-0"
                }`}
              >
                <img
                  className="w-full h-full object-cover object-center"
                  src={image.src}
                  alt={image.alt}
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ImageCarousel;
