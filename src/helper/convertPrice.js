export const convertPrice = (price) => {
  const options = {
    style: "currency",
    currency: "UZS",
  };

  return new Intl.NumberFormat("uz-UZ", options).format(price);
};
