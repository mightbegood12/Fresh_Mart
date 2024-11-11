const cacheImages = (srcArray) => {
  return new Promise((resolve, reject) => {
    const promises = srcArray.map((src) => {
      return new Promise((imgResolve, imgReject) => {
        const img = new Image();
        img.src = src;
        img.onload = imgResolve;
        img.onerror = imgReject;
      });
    });

    Promise.all(promises)
      .then(() => resolve())
      .catch(() => reject());
  });
};

export default cacheImages;
