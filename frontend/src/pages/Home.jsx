import ImageCarousel from "../components/ImageCarousel";
import Categories from "../components/Categories";
import EasyAccess from "../components/EasyAccess";

export default function Home({ categoriesData }) {
  return (
    <div className="min-h-screen mb-8 md:mb-12 flex flex-col gap-2">
      <EasyAccess />
      <ImageCarousel />
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
