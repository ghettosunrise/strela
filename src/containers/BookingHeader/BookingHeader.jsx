import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Flex from '../../styled/flex';
import * as H from '../../styled/header';
import Social from '../../components/Social';
import * as S from './styles';
import Arrow from '../../components/Icons';
import Button from '../../components/Buttons/ButtonTransparent';
import Ticker from '../../components/Ticker';

import logo from '../../images/bookinglogo.svg';

const BookingHeader = ({ isClosed, setIsClosed, main }) => {
  const window = document.documentElement.clientWidth;

  return (
    <Flex width="100%" z="2">
      <S.HeaderWrap>
        <Flex
          row
          width="100%"
          justify="space-between"
          align="center"
          maxWidth="550px"
          tabletMaxWidth="350px"
        >
          <H.HeaderLogoWrap
            row
            align="center"
            justify="space-between"
            width="274px"
          >
            <Link to="/" />
            <Arrow direction="R" />
          </H.HeaderLogoWrap>
          {window > 1150 ? <Social /> : null}
        </Flex>
        {window > 1150 ? (
          <Button txt="Booking Form" onClick={() => setIsClosed(false)} />
        ) : (
          <Button
            txt="Booking"
            size="mobile"
            onClick={() => setIsClosed(false)}
          />
        )}
      </S.HeaderWrap>
      <Ticker />
      {main && (
        <Flex
          width="100%"
          paddingAll="90px 49px 0"
          tabletPadding="90px 30px 0"
          mobilePadding="70px 20px 0"
          mobileDirection="column"
          mobileAlign="center"
          row
        >
          <Fade>
            <img alt="logo" className="myImg" src={logo} />
            <S.Title>
              We represent a wide range of artists that produce electronic music
            </S.Title>
          </Fade>
        </Flex>
      )}
    </Flex>
  );
};

export default BookingHeader;
