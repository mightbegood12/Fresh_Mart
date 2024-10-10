export default function ItemView() {
  return (
    <div className=" flex h-auto justify-center min-h-screen">
      <div className="wrapper flex m-3 p-2 flex-row gap-4">
        <div className="item-img-cont bg-slate-100 h-[464px] w-[464px] p-8 flex flex-col gap-5 justify-center items-center">
          <div className="big-img">
            <img src="https://via.placeholder.com/320x320.png" alt="" />
          </div>
          <div className="sml-imgs flex flex-row gap-3 items-start justify-start">
            <img
              className="w-12"
              src="https://via.placeholder.com/320x320.png"
              alt=""
            />
            <img
              className="w-12"
              src="https://via.placeholder.com/320x320.png"
              alt=""
            />
            <img
              className="w-12"
              src="https://via.placeholder.com/320x320.png"
              alt=""
            />
            <img
              className="w-12"
              src="https://via.placeholder.com/320x320.png"
              alt=""
            />
          </div>
        </div>
        <div className="item-info bg-slate-100 w-[464px]  p-8">
          <div className="category text-gray-500 text-sm">Milk</div>
          <div className="title text-xl font-semibold">Icecream</div>
          <div className="price">399</div>
        </div>
      </div>
    </div>
  );
}
