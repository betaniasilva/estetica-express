import { useController } from "react-hook-form";
import { useState } from "react";
import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "../../UI/Input";

const InputField = ({ name, label, className, type, ...props }) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const isPassword = type === "password";

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
  });

  const handleTogglePassword = (event) => {
    event.preventDefault();
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <div
        className={`${className} flex text-base items-center rounded-2xl justify-between w-full`}
      >
        <Input
          name={name}
          {...field}
          {...props}
          type={isPassword && isEyeOpen ? "text" : type}
          className={`!bg-transparent w-full  px-4 py-2`}
        />
        {isPassword && (
          <button onClick={handleTogglePassword} className="p-2">
            {isEyeOpen ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
      <label className="text-red-600 text-xs">{error?.message}</label>
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
