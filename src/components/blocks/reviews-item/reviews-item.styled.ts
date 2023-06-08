import styled, {StyledComponentBase} from 'styled-components';

const stars = require('../../../img/icon-stars.svg') as string;
const starsActive = require('../../../img/icon-stars-active.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

export const ReviewBlock: StyledComponent = styled.li`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:start;
  -ms-flex-align:start;
  align-items:flex-start;

  margin-bottom:22px
`;

export const User: StyledComponent = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  max-width:54px;
  margin-right:22px
`;

export const UserName: StyledComponent = styled.span`
  font-size:14px;
  line-height:1.2143;
  color:#000;
  word-break:break-word;
  word-wrap:break-word;
  overflow-wrap:break-word
`;

export const Rating: StyledComponent = styled.div`
  margin-bottom:7px
`;

export const Stars: StyledComponent = styled.div`
  position:relative;
  display:block;
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

