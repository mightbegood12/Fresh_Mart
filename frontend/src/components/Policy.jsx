import React from "react";

export default function Policy() {
  return (
    <div className="flex gap-2 my-5 justify-center ">
      <div className="flex flex-col gap-2 ">
        <div className="text-lg md:text-lg text-gray-800 font-bold">
          Why shop from FreshMart?
        </div>
        <div className="flex flex-col gap-3 md:gap-5 pl-2 md:pl-4 w-auto">
          <div className="flex flex-row gap-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
              alt="express delivery"
              loading="lazy"
              className="rounded-lg object-fill aspect-square cursor-pointer h-8 md:h-12"
            ></img>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Superfast Delivery</div>
              <div className="text-sm">
                Get your order delivered to your doorstep at the earliest from
                dark stores near you.
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
              alt="best price"
              loading="lazy"
              className="rounded-lg object-fill aspect-square cursor-pointer h-8 md:h-12"
            ></img>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Best Prices &amp; Offers</div>
              <div className="text-sm">
                Best price destination with offers directly from the
                manufacturers.
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
              alt="genuine products"
              className="rounded-lg object-fill aspect-square cursor-pointer h-8 md:h-12"
              loading="lazy"
            ></img>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Wide Assortment</div>
              <div className="text-sm">
                Choose from 5000+ products across food, personal care, household
                &amp; other categories.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
