/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { navigate } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { Flex } from '../styled';

import mainBg from '../images/mainbg1440.png';
import arrL from '../images/arrowl.svg';
import arrR from '../images/arrowr.svg';
import logo from '../images/logo.png';
import '../assets/layout.css';
import Arrow from '../components/Icons';
import SEO from '../components/seo';

const MainPageWrap = styled(Flex)`
  background-image: url(${mainBg});
  background-position: 50% 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  height: 100vh;

  @media only screen and (max-width: 1268px) {
    background-size: cover;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  img {
    max-width: 940px;
    margin-bottom: 124px;

    @media only screen and (max-width: 1150px) {
      max-width: 620px;
    }

    @media only screen and (max-width: 768px) {
      max-width: 290px;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .arrow_left {
    width: 48px;
    height: 23px;
    margin-right: 24px;
    background-image: url(${arrL});
  }

  .arrow_right {
    width: 48px;
    height: 23px;
    margin-left: 24px;
    background-image: url(${arrR});
  }
`;

const animateIn = keyframes`
 0% { left: -100% }
 60% { left: 0 }
 100% { left: 0% }
`;

// const animateOut;

const Txt = styled.p`
  font-family: 'Formular';
  text-align: center;
  font-style: normal;
  font-weight: normal;
`;

const Desc = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.02em;
`;

const AnimatedBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -100%;
  background: ${props => (props.navigateTo === 'promo' ? 'black' : '#2403a6')};
  animation-name: ${animateIn};
  animation-duration: 1s;
  animation-play-state: ${props =>
    props.navigateTo !== null ? 'running' : 'paused'};
  z-index: 5;
`;

const IndexPage = () => {
  const [navigateTo, setNavigateTo] = useState(null);
  const agency = 'promo';
  const booking = 'booking';

  const handleClick = direction => {
    setNavigateTo(direction);

    setTimeout(() => {
      navigate(`/${direction}`, {
        state: { fromFirstPage: true },
      });
    }, 600);
  };

  return (
    <MainPageWrap
      justify="center"
      align="center"
      width="100%"
      height="100vh !important"
    >
      <SEO title="Home" />
      <img src={logo} alt="strela_logo" />
      <Flex
        row
        maxWidth="940px"
        justify="space-between"
        width="100%"
        tabletMaxWidth="620px"
        mobileMaxWidth="290px"
      >
        {/* <Flex row align="center">
          <Arrow margin="24px" direction="L" />
          <button type="button" onClick={() => handleClick(agency)}>
            Promo
          </button>
        </Flex>
        <Flex row align="center">
          <button type="button" onClick={() => handleClick(booking)}>
            Booking
          </button>
          <Arrow margin="24px" direction="R" />
        </Flex> */}
        <Flex align="center" justify="center" width="100%">
          <Txt>Promo and Booking agency</Txt>
          <Desc>Вебсайт в разработке и появится совсем скоро</Desc>
        </Flex>
      </Flex>
      <AnimatedBlock navigateTo={navigateTo} />
    </MainPageWrap>
  );
};

export default IndexPage;
