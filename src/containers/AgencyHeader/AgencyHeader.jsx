import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Dropdown from '../../components/LangDropdown';

import Flex from '../../styled/flex';
import * as H from '../../styled/header';
import Nav from '../Nav';
import Social from '../../components/Social';
import * as S from './styles';
import Arrow from '../../components/Icons';
import ButtonBlack from '../../components/Buttons/ButtonBlack';
import Burger from '../../components/Buttons/Burger';
import { useLanguage } from '../../hooks/';
import logo from '../../images/bookinglogo.svg';

const MainTitle = ({ txt }) => {
  return <S.MyMainTitle>{txt}</S.MyMainTitle>;
};

const AgencyHeader = ({ setIsClosed, setIsClosedMobile, isClosedMobile }) => {
  const [documentLoaded, setDocumentLoaded] = useState(null);
  let window;

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  documentLoaded === true
    ? (window = document.documentElement.clientWidth)
    : null;
  const scrollContainer = useRef();
  const [[language, setLanguage]] = useLanguage();

  const [isMoved, setIsMoved] = useState(false);

  useEffect(() => {
    const handleScroll = e => {
      document?.scrollingElement?.scrollTop > 0
        ? setIsMoved(true)
        : document?.scrollingElement?.scrollTop === 0
        ? setIsMoved(false)
        : null;
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {' '}
      <Flex
        width="100%"
        paddingAll="30px 49px 0"
        tabletPadding="46px 30px 0"
        mobilePadding="46px 20px 0"
        z="12"
        ref={scrollContainer}
      >
        <S.Header isMoved={isMoved}>
          <H.HeaderLogoWrap
            maxWidth="236px"
            row
            align="center"
            justify="space-between"
            width="100%"
          >
            <Link to="/"></Link>
            {/* <Arrow direction="R" />
             */}
            <Dropdown language={language} setLanguage={setLanguage} />
          </H.HeaderLogoWrap>

          {window > 1150 ? (
            <>
              <Nav
                language={language}
                isMoved={isMoved}
                isTop={true}
                agency
                row
              />
              <Flex
                row
                justify="flex-end"
                align="center"
                maxWidth="323px"
                width="100%"
              >
                {/* <Dropdown language={language} setLanguage={setLanguage} /> */}
                <Social isMoved={isMoved} isTop={true} />
                <ButtonBlack
                  txt={language === 'UA' ? 'Связаться' : 'Contact'}
                  onClick={() => setIsClosed(false)}
                />
              </Flex>
            </>
          ) : (
            <Burger
              onClick={() => {
                isClosedMobile === true
                  ? setIsClosedMobile(false)
                  : setIsClosedMobile(true);
              }}
              isClosedMobile={isClosedMobile}
              setIsClosedMobile={setIsClosedMobile}
            />
          )}
        </S.Header>
      </Flex>
      <Flex
        width="100%"
        justify="space-between"
        row
        paddingAll="146px 49px 0"
        tabletPadding="96px 30px 0"
        mobilePadding="65px 20px 0"
      >
        {window > 1150 ? (
          <Flex>
            <Nav
              isMoved={isMoved}
              isBottom={true}
              agency
              language={language}
              column
              space="20px"
            ></Nav>
            <Social isMoved={isMoved} isBottom={true}></Social>
            <Link to="/booking">
              <S.Img
                isMoved={isMoved}
                alt="logo"
                className="myImg"
                src={logo}
              />
            </Link>
          </Flex>
        ) : null}

        <Fade>
          <MainTitle
            isClosedMobile={isClosedMobile}
            txt={
              language === 'UA'
                ? 'Грамотный PR для проектов, связанных с электронной сценой.'
                : 'Qualified PR for projects in the electronic music scene.'
            }
          />
        </Fade>
      </Flex>
    </>
  );
};

export default AgencyHeader;
