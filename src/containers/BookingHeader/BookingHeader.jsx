import React, { useState, useEffect } from 'react';
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
import {Img} from '../AgencyHeader/styles'

const BookingHeader = ({ isClosed, setIsClosed, main }) => {
  const [documentLoaded, setDocumentLoaded] = useState(null);
  let window;

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  documentLoaded === true && (window = document?.documentElement?.clientWidth);

  return (
    <Flex width="100%" z="2">
      <S.HeaderWrap>
        <Flex
          width="100%"
          row
          width="93px"
          justify="space-between"
          align="center"
        >
          <H.HeaderLogoWrap row align="center" justify="space-between">
            <Link to="/" />
          </H.HeaderLogoWrap>
          {/* {window > 1150 ? : null} */}
        </Flex>
        {window > 1150 ? (
          <Flex row align="center" width="100%" maxWidth="317px">
            <Social />
            <Button txt="Booking Form" onClick={() => setIsClosed(false)} />
          </Flex>
        ) : (
          <Button
            txt="Booking"
            size="mobile"
            onClick={() => setIsClosed(false)}
          />
        )}
      </S.HeaderWrap>
      <Ticker booking />
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
            <Link to="/promo">
            <Img style={{margin: 0, width: '250px'}} alt="logo" className="myImg" src={logo} />
            </Link>
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
