export const getProduct = async (count) => {
  const data = await fetch("https://fakestoreapi.com/products/" + count)
    .then((res) => res.json())
    .then((json) => json);
  return data;
};
