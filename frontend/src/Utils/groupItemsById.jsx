const groupItemsById = (items) => {
  return items.reduce((acc, item) => {
    const existingItem = acc.find(
      (i) => i.id === item.id && i.selectedUnit === item.selectedUnit
    );
    if (existingItem) {
      existingItem.quantity += 1;
    }
    // else if (e){

    // }
    else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);
};
export default groupItemsById;
