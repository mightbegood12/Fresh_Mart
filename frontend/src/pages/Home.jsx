import ImageSlicer from "../components/ImageSlicer";
import Categories from "../components/Categories";
import { categoriesData } from "../categoriesData";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-3">
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
