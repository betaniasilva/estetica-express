import PropTypes from "prop-types";

const Button = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} text-black bg-white rounded-lg px-4 py-2`}
    ></button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
