import React from 'react';

import {SectionBlock} from './section.styled';

interface Props {
  id?: string
  children: Array<React.ReactElement<any, any>> |React.ReactElement<any, any>
}

const Section: React.FunctionComponent<Props> = (props) => (
  <SectionBlock {...props}>
    {props.children}
  </SectionBlock>
);

export default Section;
