import propTypes from "prop-types";

const FormDelete = ({ id, onSubmit, setIsOpen }) => {
  console.log("id", id);

  return (
    <div className="form-container">
      <button
        className="delete-confirmar"
        onClick={() => {
          onSubmit(id);
          setIsOpen({
            [`deletar${id}`]: false,
          });
        }}
      >
        Confirmar
      </button>
      <button
        className="delete-cancelar"
        onClick={() =>
          setIsOpen({
            [`deletar${id}`]: false,
          })
        }
      >
        Cancelar
      </button>
    </div>
  );
};

FormDelete.propTypes = {
  onSubmit: propTypes.func,
  setIsOpen: propTypes.func,
  id: propTypes.number,
};

export default FormDelete;
