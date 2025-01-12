import ImageCarousel from "../components/ImageCarousel";
import Categories from "../components/Categories";
import EasyAccess from "../components/EasyAccess";
import { Suspense } from "react";
import ItemsLoader from "../components/ItemsLoader";
// import { useState } from "react";

export default function Home({ productData, availableCategories }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen mb-8 md:mb-12 flex flex-col gap-2">
          <EasyAccess />
          <ImageCarousel />
          <ItemsLoader />
        </div>
      }
    >
      <div className="min-h-screen mb-8 md:mb-12 flex flex-col gap-2">
        <EasyAccess categories={availableCategories} />
        <ImageCarousel />
        {availableCategories.map((category, index) => (
          <Categories
            key={index}
            categoryTitle={category}
            items={productData}
          />
        ))}
      </div>
    </Suspense>
  );
}
