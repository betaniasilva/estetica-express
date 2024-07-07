import cn from "../../../utils/cn"
import PropTypes from "prop-types";

const Description = ({ children, className, isHero, ...rest }) => {

  return (
    <p className={cn(
      "text-center lg:text-left p-0 m-0",
      className,
      {
        "text-2xl": isHero,
        "text-xl": !isHero
      }
    )} {...rest}>
      {children}
    </p>
  )
}

Description.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isHero: PropTypes.bool,
}

export default Description