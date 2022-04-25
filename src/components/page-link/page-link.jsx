import React from 'react';
import PropTypes from 'prop-types';
import Block from './page-link.styled';

function PageLink(props) {
  const { link, htmlClass, description } = props;

  return (
    <Block to={link} className={htmlClass}>
      {description}
    </Block>
  );
}

PageLink.propTypes = {
  link: PropTypes.string.isRequired,
  htmlClass: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PageLink.displayName = 'PageLink';

export default PageLink;
