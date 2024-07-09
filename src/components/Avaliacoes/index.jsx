import { FaQuoteLeft } from "react-icons/fa";
import PropType from "prop-types";
const Avaliacoes = ({ text, evalueted }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-2xl shadow-black flex flex-col items-center gap-4 max-w-[400px] ">
      <FaQuoteLeft className="" />
      <p className="italic row-start-1 row-end-2">{text}</p>
      <p className="font-bold -row-start-2 row-end-3">{evalueted}</p>
    </div>
  );
};
Avaliacoes.propTypes = {
  text: PropType.string,
  evalueted: PropType.string,
};

export default Avaliacoes;
