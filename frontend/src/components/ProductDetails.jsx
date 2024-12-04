export default function ProductDetails({ productDescription, itemName }) {
  return (
    <div className="w-[90%] mt-8">
      <h1 className="text-3xl font-semibold mb-4">Product Details</h1>
      <p className="text-lg pl-2 mb-6">{itemName}</p>

      <h3 className="text-xl font-semibold mb-2">Country of Origin</h3>
      <p className="text-base pl-2 mb-4">India</p>

      <h3 className="text-xl font-semibold mb-2">Description</h3>
      <p className="text-base pl-2 mb-4">{productDescription}</p>
    </div>
  );
}
