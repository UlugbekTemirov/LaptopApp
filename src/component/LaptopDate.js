import { convertDate } from "../helper/convertDate";

const LaptopDate = (props) => {
  const { date } = props;
  return <h3>{convertDate(date)}</h3>;
};

export default LaptopDate;
