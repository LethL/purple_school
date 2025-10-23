const uniqueById = (objArray) => {
  const set = new Set();
  return objArray.filter((item) => {
    if (set.has(item.id)) {
      return false;
    }
    set.add(item.id);
    return true;
  });
}