import { FaTrash } from "react-icons/fa";
import cn from "../../utils/cn";
import transformCurrency from "../../utils/transformCurrency";
import Modal from "../Modal";
import PropTypes from "prop-types";

const Checkout = ({ items, setItems, modalOpen, setModalOpen }) => {
  const sumTotalValue = () => {
    return items.reduce((acc, item) => acc + Number(item.valor), 0);
  };

  const handleRemoveItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Modal
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
      className="max-w-fit min-w-[600px] min-h-[600px] bg-slate-700 flex flex-col"
    >
      <div
        className={cn("flex flex-col flex-1 h-full ", {
          "justify-end": items.length === 0,
        })}
      >
        <div className="flex-1 overflow-auto ">
          {items.map((item, i) => (
            <div
              key={item.i}
              className="py-2 border-b border-solid flex justify-between items-center"
            >
              <div>
                <p>{item.nome}</p>
                <p>{transformCurrency(item.valor)}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(i)}
                className="flex items-center justify-center hover:bg-slate-400 hover:text-red-700 w-8 h-8 rounded-full text-red-600"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full pt-10 mt-10 flex justify-between">
          <p>Total de itens: {items?.length}</p>
          <p>Valor Total: {transformCurrency(sumTotalValue())}</p>
        </div>
      </div>
    </Modal>
  );
};

Checkout.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default Checkout;
