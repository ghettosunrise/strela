// import PropTypes from "prop-types"
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Flex from '../../styled/flex';
import * as F from '../../styled/header';
import Arrow from '../../components/Icons';
import Social from '../../components/Social';
import Nav from '../Nav';
import * as S from './styles';

const Footer = ({ agency, booking }) => {
  const [documentLoaded, setDocumentLoaded] = useState(null);
  let window;

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  documentLoaded === true
    ? (window = document.documentElement.clientWidth)
    : null;

  return (
    <S.Footer>
      <Flex
        row
        justify="space-between"
        align="center"
        width="100%"
        marginBottom="97px"
        mobileDirection="column"
        mobileAlign="flex-start"
      >
        <F.HeaderLogoWrap maxWidth="94px">
          <Link to="/" />
        </F.HeaderLogoWrap>
        {window > 1150 ? (
          <>
            <Nav agency={agency} booking={booking} row />
          </>
        ) : null}

        <Social footer />
        <Flex top="7px">
          <S.FooLink href="tel:+380669045724">+380669045724</S.FooLink>
          <S.FooLink href="mailto:info@strela.com">info@strela.com</S.FooLink>
        </Flex>
        <S.FooTxt>
          32 Avenue of the Americas 19th Floor New York, NY 10013 United States
        </S.FooTxt>
      </Flex>
      <Flex row align="center" justify="space-between">
        <S.BottomTxt>
          Copyright © 2019 Strela.
          <br /> All rights reserved
        </S.BottomTxt>
        <Arrow direction="R" />
      </Flex>
    </S.Footer>
  );
};
export default Footer;
