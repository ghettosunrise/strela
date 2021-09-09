import styled, { css } from 'styled-components';
import Flex from '../../../styled/flex';
import arrow from '../../../images/arrowblue.svg';
import copy from '../../../images/copylink.svg';
import fb from '../../../images/exportfb.svg';

export const CloseTxt = styled.p`
  margin-bottom: 0;
  transition: 0.3s ease all;

  a {
    font-family: Neue Machina;
    font-size: 18px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    cursor: pointer;
    color: #2403a6;
    margin-bottom: 0;
  }
`;

export const ArrowWrap = styled(Flex)`
  transition: 0.3s ease all;
  opacity: 1;

  &:hover {
    ${CloseTxt} {
      margin-left: 10px;
    }
  }
`;

const hoverStyle = css`
  img {
    opacity: 0;
    transition: 0.3s ease all;
  }

  ${ArrowWrap} {
    opacity: 0;
  }

  &:hover {
    img {
      opacity: 1;
      transition: 0.3s ease all;
    }

    ${ArrowWrap} {
      opacity: 1;
    }
  }
`;

export const ArtistWrapper = styled(Flex)`
  transition: 0.3s ease all;
  width: 100%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    opacity: 0;
  }

  ${props => (props.isHidden === 1 ? hoverStyle : null)}
`;

export const ArtistContent = styled(Flex)`
  width: 100%;
  flex-shrink: 1;
  justify-content: space-between;
`;

export const ArtistWrap = styled(Flex)`
  width: 100%;
  border-bottom: 1px solid #000000;
  padding-bottom: 20px;
`;

export const ArtistName = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.07em;
  text-align: center;
  color: #000000;
  width: 100%;
  margin: 0 0 60px;
  font-size: 76px;
  line-height: 76px;
  margin-bottom: 40px;

  @media only screen and (max-width: 1150px) {
    font-size: 76px;
    line-height: 76px;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 52px;
    line-height: 52px;
    margin-bottom: 30px;
  }
`;

export const ArtistTitle = styled.div`
  font-family: Neue Machina;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    margin: 20px 0;
  }
`;

export const DecriptionFirts = styled.div`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */
  letter-spacing: -0.03em;
  color: #000000;
  opacity: 0.7;
  margin: 0 0 20px 0;

  p {
    margin: 0;
  }

  @media only screen and (max-width: 1150px) {
  }
`;

export const DescriptionSecond = styled.div`
  font-family: Formular;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.03em;
  margin-bottom: 30px;
  color: #000000;
`;

export const DescriptionThird = styled.div`
  font-family: Formular;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.03em;
  color: #000000;
  margin-bottom: 50px;
  opacity: 0.7;
`;

export const EventDate = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 30px;
`;
export const EventName = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: #000000;

  p {
    margin-bottom: 0;
  }

  a {
    color: #2403a6;
  }
`;

export const Upcoming = styled.h3`
  font-family: Neue Machina;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 50px;
  letter-spacing: -0.07em;
  font-weight: normal;
  color: #000000;
`;

export const Arrow = styled.div`
  width: 12px;
  height: 24px;
  background-image: url(${arrow});
  margin-right: 12px;

  transform: rotate(90deg);
`;

export const Sidebar = styled(Flex)`
  width: 23.5%;

  @media only screen and (max-width: 810px) {
    width: 26.5%;
  }

  p {
    font-family: Formular;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.5;
    margin-bottom: 15px;
  }
`;

export const Translate = styled.div`
  font-family: Neue Machina;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
`;
export const Link = styled.a`
  font-family: Neue Machina;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #000000;
  font-weight: bold;
`;

export const Copy = styled.div`
  width: 37px;
  height: 34px;
  background-image: url(${copy});
  cursor: pointer;
`;

export const Fb = styled.div`
  width: 37px;
  height: 34px;
  background-image: url(${fb});
  cursor: pointer;
`;

export const Title = styled.h2`
  font-family: Neue Machina;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 50px;
  letter-spacing: -0.07em;
  font-weight: normal;
  color: #000000;
`;

export const ImgWrap = styled(Flex)`
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
