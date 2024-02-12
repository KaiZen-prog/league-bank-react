import styled, {StyledComponentBase} from 'styled-components';
import {commonText} from '../../../theme/mixins';

const stars = require('../../../img/icon-stars.svg') as string;
const starsActive = require('../../../img/icon-stars-active.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

export const ReviewBlock: StyledComponent = styled.li`
  margin-bottom: 42px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper: StyledComponent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 12px;
`;

export const ReviewText: StyledComponent = styled.p`
  ${commonText()};
`;

export const Info: StyledComponent = styled.span`
  font-size:14px;
  line-height:1.2;
  
  margin-right: 10px;
`;

export const Time: StyledComponent = styled.time`
  font-size:14px;
  line-height:1.2;
`;

export const Stars: StyledComponent = styled.div`
  position:relative;
  display:block;
  margin-bottom:5px;
  font-size:0;
  width:98px;
  height:16px;

  &:before {
    content:"";
    display:inline-block;
    height:100%;
    width:98px;
    background:url(${stars}) transparent no-repeat center;
    background-size:98px 16px;
  }

  span{
    position:absolute;
    top:0;
    left:0;
    display:inline-block;
    height:100%;
    width:0;
    overflow:hidden;

    &:before{
      content:"";
      display:inline-block;
      height:100%;
      width:98px;
      background:url(${starsActive}) transparent no-repeat center;
      background-size:98px 16px
    }
  }
`;

