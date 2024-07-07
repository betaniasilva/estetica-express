import cn from "../../../utils/cn"
import PropTypes from "prop-types";

const Image = ({ src, alt, className, ...rest }) => {

  return (
    <img  src={src} alt={alt} className={cn("max-w-full h-auto min-w-80", className)} {...rest} />
  )
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image