import ImageSlicer from "../components/ImageSlicer";
import Categories from "../components/Categories";
import { categoriesData } from "../categoriesData";
import EasyAccess from "../components/EasyAccess";

export default function Home() {
  return (
    <div className="min-h-screen mb-12 flex flex-col gap-2">
      <EasyAccess />
      <ImageSlicer />
      {categoriesData.map((category, index) => (
        <Categories
          id={category.title}
          key={index}
          categoryTitle={category.title}
          items={category.items}
        />
      ))}
    </div>
  );
}
