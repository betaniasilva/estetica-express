import PropTypes from "prop-types";
import cn from "../../utils/cn";

const Modal = ({ isOpen, onClose, children, title, className }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div
            className={cn(
              "relative rounded-lg shadow-lg max-w-128 w-full p-6 z-10",
              className
            )}
          >
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-2xl"
              >
                X
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Modal;
