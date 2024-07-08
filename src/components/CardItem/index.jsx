import PropTypes from "prop-types";
import { FaTrash, FaEdit } from "react-icons/fa";
import transformCurrency from "../../utils/transformCurrency";
import ModalUpdateService from "../ModalForms/ModalUpdateService";
import ModalDeleteService from "../ModalForms/ModalDeleteService";

const CardItem = ({
  item,
  isEditable,
  isOpen,
  modalType,
  onOpen,
  onClose,
  setServices,
}) => {
  return (
    <>
      <div className="bg-blue-primary p-4 rounded-lg relative">
        {isEditable && (
          <div className="w-fit absolute top-4 right-4 flex items-center">
            <button
              onClick={() => onOpen("edit")}
              className="text-lg flex items-center justify-center hover:bg-slate-400 hover:text-gray-100 w-8 h-8 rounded-full text-white"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onOpen("delete")}
              className="flex items-center justify-center hover:bg-slate-400 hover:text-red-700 w-8 h-8 rounded-full text-red-600"
            >
              <FaTrash />
            </button>
          </div>
        )}
        <div className="flex rounded-lg gap-4 my-4">
          <img
            src={item.image}
            alt="New Alt"
            className="w-[200px] h-[200px] rounded-lg"
          />
          <div className="text-left w-[300px] flex flex-col justify-between">
            <div>
              <h3 className="font-bold">{item.nome}</h3>
              <p className="break-words line-clamp-6">{item.descricao}</p>
            </div>
            <p className="font-bold">{transformCurrency(item.valor)}</p>
          </div>
        </div>
      </div>
      {isEditable && isOpen && modalType === "edit" && (
        <ModalUpdateService
          isOpen={isOpen}
          onClose={onClose}
          className="bg-gray-600 w-fit"
          service={item}
          setServices={setServices}
        />
      )}
      {isEditable && isOpen && modalType === "delete" && (
        <ModalDeleteService
          isOpen={isOpen}
          onClose={onClose}
          className="bg-gray-600 w-fit"
          service={item}
          setServices={setServices}
        />
      )}
    </>
  );
};

CardItem.propTypes = {
  item: PropTypes.object,
  isEditable: PropTypes.bool,
  isOpen: PropTypes.bool,
  modalType: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  setServices: PropTypes.func,
};

export default CardItem;
