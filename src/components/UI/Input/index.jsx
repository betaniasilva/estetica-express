import PropTypes from "prop-types";

const Input = ({ mode = "primary", className, ...props }) => {
  return <input className={`input-${mode} ${className}`} {...props} />;
};

Input.propTypes = {
  mode: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
};

export default Input;
