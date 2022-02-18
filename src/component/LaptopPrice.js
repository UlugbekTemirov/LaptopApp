import { convertPrice } from "../helper/convertPrice";

const LaptopPrice = (props) => {
  const { price } = props;
  const answer = convertPrice(price).slice(0, convertPrice(price).length - 3);
  return <h3>{answer}</h3>;
};

export default LaptopPrice;
