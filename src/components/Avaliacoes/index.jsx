import { FaQuoteLeft } from "react-icons/fa";
import PropType from "prop-types";
const Avaliacoes = ({ text, evalueted }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-2xl shadow-black flex flex-col items-center gap-4 max-w-[500px]">
      <FaQuoteLeft className="" />
      <p className="italic ">{text}</p>
      <p className="font-bold">{evalueted}</p>
    </div>
  );
};
Avaliacoes.propTypes = {
  text: PropType.string,
  evalueted: PropType.string,
};

export default Avaliacoes;
