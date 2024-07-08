import useServices from "../../../hooks/useServices";
import Modal from "../../Modal";
import PropTypes from "prop-types";

const ModalDeleteService = ({ service, isOpen, onClose, setServices }) => {
  const { remove } = useServices();

  const handleDelete = () => {
    const services = remove(service.id);
    onClose();
    setServices(services);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={"bg-gray-600 w-fit"}>
      <div className="bg-gray-600 p-4">
        <h1 className="text-2xl text-white">
          Deseja realmente excluir este serviço?
        </h1>
        <div className="flex w-full gap-4 mt-4">
          <button
            onClick={onClose}
            className="w-full text-lg bg-blue-primary text-white px-4 py-2 rounded-lg"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="w-full text-lg bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Excluir
          </button>
        </div>
      </div>
    </Modal>
  );
};

ModalDeleteService.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
  setServices: PropTypes.func.isRequired,
};

export default ModalDeleteService;
