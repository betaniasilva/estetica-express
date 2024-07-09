import PropTypes from "prop-types";
import cn from "../../../utils/cn";

const Title = ({ children, isHero, className, ...rest }) => {
  return (
    <>
      {isHero ? (
        <h1
          className={cn(
            "text-4xl font-bold lg:text-7xl text-center  lg:text-left  lg:!leading-[90px] -tracking-[1.8px] p-0 m-0",
            className
          )}
          {...rest}
        >
          {children}
        </h1>
      ) : (
        <h2
          className={cn(
            "font-bold text-3xl lg:text-[40px] text-center lg:text-left p-0 m-0 leading-[48px]",
            className
          )}
          {...rest}
        >
          {children}
        </h2>
      )}
    </>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isHero: PropTypes.bool,
};

export default Title;
