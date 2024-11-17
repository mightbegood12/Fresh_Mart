import ImageCarousel from "../components/ImageCarousel";
import Categories from "../components/Categories";
import EasyAccess from "../components/EasyAccess";
// import { useState } from "react";

export default function Home({ productData, availableCategories }) {
  return (
    <div className="min-h-screen mb-8 md:mb-12 flex flex-col gap-2">
      <EasyAccess />
      <ImageCarousel />
      {availableCategories.map((category, index) => (
        <Categories key={index} categoryTitle={category} items={productData} />
      ))}
    </div>
  );
}
