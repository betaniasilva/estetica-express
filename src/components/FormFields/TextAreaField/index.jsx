import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const TextAreaField = ({ name, label, className, ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
  });

  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <textarea
        name={name}
        {...field}
        {...props}
        className={`w-full px-4 py-2 text-base rounded-2xl outline-none ${
          className || "!bg-transparent"
        }`}
      />
      <label className="text-red-600 text-xs">{error?.message}</label>
    </div>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default TextAreaField;
