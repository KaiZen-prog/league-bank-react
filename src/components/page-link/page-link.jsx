import React from 'react';
import PropTypes from 'prop-types';
import Block from './page-link.styled';

function PageLink(props) {
  const { link, description, isFooterLogo=false } = props;

  return (
    <Block to={link} $isFooterLogo={isFooterLogo}>
      {description}
    </Block>
  );
}

PageLink.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFooterLogo: PropTypes.bool,
};

PageLink.displayName = 'PageLink';

export default PageLink;
