import Title from "./Title"
import Description from "./Description"
import Container from "./Container"
import Image from "./Image";
import PropTypes from "prop-types";
import cn from "../../utils/cn"

const CTA = ({ children, className, ...rest }) => {
  return (
    <section className={cn("relative", className)} {...rest}>
      {children}
    </section>
  )
}

CTA.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

//Define the nested components
CTA.Title = Title
CTA.Description = Description
CTA.Container = Container
CTA.Image = Image

export default CTA