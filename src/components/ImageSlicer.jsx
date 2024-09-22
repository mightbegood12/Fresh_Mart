const ImageSlicer = () => {
  return (
    <section
      aria-label="Grocery-Carousel "
      className="flex  items-center justify-center"
    >
      <div className="carousel relative">
        <button className="bg-none opacity-50 text-white cursor-pointer rounded-lg p-2 bg-black/[0.2] absolute border-none text-xl top-2/4 prev z-10 -translate-y-1/2 hover:focus:bg-black/0.4 focus:outline left-4">
          &#10594;
        </button>
        <button className="bg-none opacity-50 text-white cursor-pointer rounded-lg p-2 bg-black/[0.2] absolute border-none text-xl top-2/4 next z-10 -translate-y-1/2  hover:focus:bg-black/0.4 focus:outline right-4">
          &#10596;
        </button>
        <ul className="m-0 p-0 ">
          <li
            className="slide absolute inset-0 opacity-0 object-center"
            data-active
          >
            <img
              className="block object-cover object-center"
              src="https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645896.jpg?t=st=1727002283~exp=1727005883~hmac=17fc084a00e909ebbb1d67528d83c9cb5f30bf52e1f8dcf59f06ef95fae61bd3&w=1380"
              alt="image#1"
            />
          </li>
          <li className="slide absolute inset-0 opacity-0">
            <img
              className="block object-cover object-center"
              src="https://images.unsplash.com/photo-1726855500757-658894d298eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image#2"
            />
          </li>

          <li className="slide absolute inset-0 opacity-0 object-center">
            <img
              className="block object-cover object-center"
              src="https://images.unsplash.com/photo-1726344603918-156e119eb6d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image#3"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ImageSlicer;
