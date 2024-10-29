const groupItemsById = (items) => {
  return items.reduce((acc, item) => {
    const existingItem = acc.find(
      (i) => i.id === item.id && i.selectedUnit === item.selectedUnit
    );
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if the item already exists
    } else {
      acc.push({ ...item, quantity: 1 }); // Add new item with quantity
    }
    return acc;
  }, []);
};
export default groupItemsById;
