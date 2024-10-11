import React from "react";

export default function ProductDetails() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Product Details</h1>
      <p className="text-lg mb-6">Fresh Tomatoes</p>

      <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
      <p className="text-base mb-4">Boosts Skin Health</p>
      <p className="text-base mb-4">Supports Heart Health</p>

      <h3 className="text-xl font-semibold mb-2">Country of Origin</h3>
      <p className="text-base mb-4">India</p>

      <h3 className="text-xl font-semibold mb-2">Description</h3>
      <p className="text-base mb-4">
        Tomato is a staple in India and is commonly chopped and used as an
        ingredient in various hearty warm dishes. They are versatile and can be
        baked, boiled, braised, grilled, fried, roasted, sautéed, or eaten raw
        in salads.
      </p>
    </div>
  );
}
