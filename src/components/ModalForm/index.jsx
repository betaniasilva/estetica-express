import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FormCreate from "./FormCreate";
import PropTypes from "prop-types";
import FormUpdate from "./FormUpdate";
import FormDelete from "./FormDelete";
import FormAvaliacao from "./FormAvaliacao";

const ModalForm = ({
  buttonText,
  isOpen,
  setIsOpen,
  onCloseModal,
  type = "create",
  onSubmit,
  defaultValues = {},
}) => {
  const formType = {
    create: <FormCreate onSubmit={onSubmit} setIsOpen={setIsOpen} />,
    update: (
      <FormUpdate
        onSubmit={onSubmit}
        setIsOpen={setIsOpen}
        defaultValues={defaultValues}
      />
    ),
    delete: (
      <FormDelete
        onSubmit={onSubmit}
        id={defaultValues?.id}
        setIsOpen={setIsOpen}
      />
    ),
    avaliar: (
      <FormAvaliacao
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        setIsOpen={setIsOpen}
      />
    ),
  };

  return (
    <div className="modalForm">
      <button onClick={setIsOpen}>{buttonText}</button>
      <Modal open={isOpen} onClose={onCloseModal} center>
        {formType[type]}
      </Modal>
    </div>
  );
};

ModalForm.propTypes = {
  buttonText: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  onCloseModal: PropTypes.func,
  type: PropTypes.string,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
};

export default ModalForm;
