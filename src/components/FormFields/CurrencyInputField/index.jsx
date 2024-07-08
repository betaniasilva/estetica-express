import { useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";

import PropTypes from "prop-types";
import Input from "../../UI/Input";

const CurrencyInputField = ({ name, label, classNameInput }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name,
    control,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatCurrency(value);
    onChange(formattedValue);
  };

  const formatCurrency = (value) => {
    const number = value.replace(/\D/g, "");
    const formattedNumber = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number / 100);
    return formattedNumber;
  };

  useEffect(() => {
    onChange(formatCurrency(value));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <Input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className={`text-base rounded-2xl w-full px-4 py-2 ${
          classNameInput || "!bg-transparent"
        }`}
      />
    </div>
  );
};

CurrencyInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  classNameInput: PropTypes.string,
};

export default CurrencyInputField;
