import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PageLink = (props) => {
  const {
    link,
    htmlClass,
    description
  } = props;

  return (
    <Link to={link} className={htmlClass}>
      {description}
    </Link>
  );
};

PageLink.propTypes = {
  link: PropTypes.string.isRequired,
  htmlClass: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

PageLink.displayName = `PageLink`;

export default PageLink;
