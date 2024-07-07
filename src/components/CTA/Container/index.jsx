import cn from "../../../utils/cn";
import PropTypes from "prop-types";

const Container = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn(
        "max-w-[1400px] mx-auto h-full px-4 py-10 flex justify-center items-center flex-wrap",
        "lg:justify-between lg:flex-nowrap",
        className
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
