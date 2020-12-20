import React, { useEffect } from "react";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger(window);
  useEffect(() => {
    console.log(trigger);
    return () => {};
  }, [trigger]);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default HideOnScroll;
