import React from "react";
import DynamicButton from "./DynamicButton";
import ImageCarousel from "./ImageCarousel";
import EasyAccess from "./EasyAccess";

export default function ItemsLoader() {
  return (
    <div className="min-h-screen mb-8 md:mb-12 flex flex-col gap-2">
      <EasyAccess />
      <ImageCarousel />
      <div className="carousel mx-[10%] flex flex-col gap-1 mt-6 md:mt-8">
        <div className="text-xl md:text-2xl font-semibold text-slate-700">
          Categories
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <div>
              <div className="itemWrapper flex flex-col drop-shadow-sm md:hover:scale-110  ease-in-out duration-300 max-w-40 flex-shrink-0 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-center">
                <div className="img object-cover animate-pulse">
                  <div className="bg-slate-200 h-[120px] w-[120px]"></div>
                </div>
                <div className="info flex flex-col gap-1 items-start justify-start w-[120px]">
                  <div className="font-semibold my-2 animate-pulse bg-slate-200 h-4 w-[60px] rounded-lg"></div>
                  <div className="price-add-btn w-[100%] flex flex-row items-center justify-between gap-3">
                    <div className="text-green-600 text-sm md:text-md lg:text-lg">
                      $$$
                    </div>
                    <div className="dynamic-button">
                      <DynamicButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="itemWrapper flex flex-col drop-shadow-sm md:hover:scale-110  ease-in-out duration-300 max-w-40 flex-shrink-0 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-center">
                <div className="img object-cover animate-pulse">
                  <div className="bg-slate-200 h-[120px] w-[120px]"></div>
                </div>
                <div className="info flex flex-col gap-1 items-start justify-start w-[120px]">
                  <div className="font-semibold my-2 animate-pulse bg-slate-200 h-4 w-[60px] rounded-lg"></div>
                  <div className="price-add-btn w-[100%] flex flex-row items-center justify-between gap-3">
                    <div className="text-green-600 text-sm md:text-md lg:text-lg">
                      $$$
                    </div>
                    <div className="dynamic-button">
                      <DynamicButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="itemWrapper flex flex-col drop-shadow-sm md:hover:scale-110  ease-in-out duration-300 max-w-40 flex-shrink-0 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-center">
                <div className="img object-cover animate-pulse">
                  <div className="bg-slate-200 h-[120px] w-[120px]"></div>
                </div>
                <div className="info flex flex-col gap-1 items-start justify-start w-[120px]">
                  <div className="font-semibold my-2 animate-pulse bg-slate-200 h-4 w-[60px] rounded-lg"></div>
                  <div className="price-add-btn w-[100%] flex flex-row items-center justify-between gap-3">
                    <div className="text-green-600 text-sm md:text-md lg:text-lg">
                      $$$
                    </div>
                    <div className="dynamic-button">
                      <DynamicButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="itemWrapper flex flex-col drop-shadow-sm md:hover:scale-110  ease-in-out duration-300 max-w-40 flex-shrink-0 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-center">
                <div className="img object-cover animate-pulse">
                  <div className="bg-slate-200 h-[120px] w-[120px]"></div>
                </div>
                <div className="info flex flex-col gap-1 items-start justify-start w-[120px]">
                  <div className="font-semibold my-2 animate-pulse bg-slate-200 h-4 w-[60px] rounded-lg"></div>
                  <div className="price-add-btn w-[100%] flex flex-row items-center justify-between gap-3">
                    <div className="text-green-600 text-sm md:text-md lg:text-lg">
                      $$$
                    </div>
                    <div className="dynamic-button">
                      <DynamicButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="itemWrapper flex flex-col drop-shadow-sm md:hover:scale-110  ease-in-out duration-300 max-w-40 flex-shrink-0 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-center">
                <div className="img object-cover animate-pulse">
                  <div className="bg-slate-200 h-[120px] w-[120px]"></div>
                </div>
                <div className="info flex flex-col gap-1 items-start justify-start w-[120px]">
                  <div className="font-semibold my-2 animate-pulse bg-slate-200 h-4 w-[60px] rounded-lg"></div>
                  <div className="price-add-btn w-[100%] flex flex-row items-center justify-between gap-3">
                    <div className="text-green-600 text-sm md:text-md lg:text-lg">
                      $$$
                    </div>
                    <div className="dynamic-button">
                      <DynamicButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
