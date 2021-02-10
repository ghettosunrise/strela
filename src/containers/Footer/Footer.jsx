// import PropTypes from "prop-types"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Flex from '../../styled/flex';
import * as F from '../../styled/header';
import Social from '../../components/Social';
import Nav from '../Nav';
import * as S from './styles';
import useLanguage from '../../hooks/useLanguage';

const FooterTxt = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #808080;

  span {
    font-family: Neue Machina;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 13px;
    color: black;
    margin-left: 5px;
  }
`;

const FooterBottom = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1037px) {
    flex-direction: column;

    p {
      text-align: center;
    }
  }
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    p {
      text-align: left;
    }
  }
`;

const CopyrightBlock = styled.div`
  /* row maxWidth="820px" justify="space-between" width="100% */
  display: flex;
  max-width: 820px;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer = ({ agency, booking }) => {
  const [documentLoaded, setDocumentLoaded] = useState(null);
  let window;

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  const [[language, setLanguage]] = useLanguage();

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
            <Nav language={language} agency={agency} booking={booking} row />
          </>
        ) : null}

        <Social footer />
        <Flex>
          <S.FooLink href="tel:+380669045724">+380669045724</S.FooLink>
          <S.FooLink href="mailto:info@strela.com">info@strela.com</S.FooLink>
        </Flex>
        <S.FooTxt>Borichev Tok 35B, Киев, Украина</S.FooTxt>
      </Flex>
      <FooterBottom>
        <S.BottomTxt>
          Copyright © 2019 Strela.
          <br /> All rights reserved
        </S.BottomTxt>
        {/* <Arrow direction="R" /> */}
        <CopyrightBlock>
          <FooterTxt>
            Russian words by <span>Dmitry Ignatyev</span>
          </FooterTxt>
          <FooterTxt>
            Adapted and translation by <span>Max Konstantinovsky</span>
          </FooterTxt>
          <FooterTxt>
            Design by <span>Anastasiia Tretiak</span>
          </FooterTxt>
        </CopyrightBlock>
      </FooterBottom>
    </S.Footer>
  );
};
export default Footer;
