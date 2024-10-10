import ImageSlicer from "../components/ImageSlicer";
import Categories from "../components/Categories";

const categoriesData = [
  {
    title: "Dairy & Other Perishables",
    items: [
      {
        id: 1,
        name: "Milk",
        price: 2.99,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 2,
        name: "Cheese",
        price: 4.99,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 3,
        name: "Yogurt",
        price: 1.99,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 4,
        name: "Butter",
        price: 3.49,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 5,
        name: "Eggs",
        price: 2.5,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 6,
        name: "Cream",
        price: 2.79,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 7,
        name: "Sour Cream",
        price: 3.29,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 8,
        name: "Cottage Cheese",
        price: 2.89,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 9,
        name: "Ice Cream",
        price: 5.99,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 10,
        name: "Whipped Cream",
        price: 3.59,
        image: "https://via.placeholder.com/120x120.png",
      },
    ],
  },
  {
    title: "Snacks & Beverages",
    items: [
      {
        id: 11,
        name: "Chips",
        price: 1.99,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 12,
        name: "Soda",
        price: 1.5,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 13,
        name: "Cookies",
        price: 2.99,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 14,
        name: "Juice",
        price: 2.0,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 15,
        name: "Candy",
        price: 0.99,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 16,
        name: "Nuts",
        price: 3.49,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 17,
        name: "Granola Bars",
        price: 1.79,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 18,
        name: "Energy Drink",
        price: 2.49,
        image: "https://via.placeholder.com/120x120.png",
      },
    ],
  },
  {
    title: "Spices or Ingredients",
    items: [
      {
        id: 19,
        name: "Salt",
        price: 0.99,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 20,
        name: "Pepper",
        price: 1.49,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 21,
        name: "Oregano",
        price: 1.29,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 22,
        name: "Basil",
        price: 1.19,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 23,
        name: "Cumin",
        price: 1.39,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 24,
        name: "Paprika",
        price: 1.49,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 25,
        name: "Garlic Powder",
        price: 1.29,
        image: "https://via.placeholder.com/120x120.png",
      },
      {
        id: 26,
        name: "Onion Powder",
        price: 1.29,
        image: "https://via.placeholder.com/120x120.png",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="scrollbar min-h-screen scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex flex-col gap-5 mb-8">
      <ImageSlicer />
      {categoriesData.map((category, index) => (
        <Categories key={index} title={category.title} items={category.items} />
      ))}
    </div>
  );
}

export { categoriesData };
