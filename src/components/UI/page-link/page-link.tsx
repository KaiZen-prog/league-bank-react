import React from 'react';
import {PageLinkBlock} from './page-link.styled';

interface Props {
  link: string,
  description: string,
  isFooterLogo?: boolean
}

const PageLink: React.FunctionComponent<Props> = (props) => {
  const {link, description, isFooterLogo = false} = props;

  return (
    <PageLinkBlock to={link} $isFooterLogo={isFooterLogo}>
      {description}
    </PageLinkBlock>
  );
};

PageLink.displayName = 'PageLink';

export default PageLink;
