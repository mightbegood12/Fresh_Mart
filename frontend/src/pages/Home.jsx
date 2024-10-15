import ImageSlicer from "../components/ImageSlicer";
import Categories from "../components/Categories";
import EasyAccess from "../components/EasyAccess";
import { categoriesData } from "../categoriesData";

export default function Home() {
  return (
    <div className="min-h-screen mb-12 flex flex-col gap-2">
      <EasyAccess />
      <ImageSlicer />
      {categoriesData.map((category, index) => (
        <Categories
          key={index}
          categoryTitle={category.title}
          items={category.items}
        />
      ))}
    </div>
  );
}
