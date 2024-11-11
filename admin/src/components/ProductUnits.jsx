import React from "react";

const ProductUnits = ({ units, onUnitsChange }) => {
  const handleAddUnit = () => {
    onUnitsChange([...units, ""]);
  };

  const handleRemoveUnit = (index) => {
    onUnitsChange(units.filter((_, i) => i !== index));
  };

  const handleUnitChange = (index, event) => {
    const newUnits = [...units];
    newUnits[index] = event.target.value;
    onUnitsChange(newUnits);
  };

  return (
    <div className="quantity-container flex flex-col gap-2">
      {units.map((unit, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            value={unit}
            onChange={(e) => handleUnitChange(index, e)}
            placeholder="Enter unit"
          />
          <button
            type="button"
            className="bg-red-500 text-white px-2 py-1 rounded-lg"
            onClick={() => handleRemoveUnit(index)}
            disabled={units.length === 1} // Disable remove button if only one unit exists
          >
            &#10006;
          </button>
        </div>
      ))}

      <button
        type="button"
        className="bg-green-500 w-64 text-white px-2 py-1 rounded-lg mt-2"
        onClick={handleAddUnit}
      >
        Add Unit
      </button>
    </div>
  );
};

export default ProductUnits;
