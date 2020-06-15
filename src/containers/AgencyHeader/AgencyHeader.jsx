import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Flex from '../../styled/flex';
import * as H from '../../styled/header';
import Nav from '../Nav';
import Social from '../../components/Social';
import * as S from './styles';
import Arrow from '../../components/Icons';
import ButtonBlack from '../../components/Buttons/ButtonBlack';
import Burger from '../../components/Buttons/Burger';

const MainTitle = ({ txt }) => {
  return <S.MyMainTitle>{txt}</S.MyMainTitle>;
};

const AgencyHeader = ({ setIsClosed, setIsClosedMobile, isClosedMobile }) => {
  const window = document.documentElement.clientWidth;
  const scrollContainer = useRef();

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
        paddingAll="46px 49px 0"
        tabletPadding="46px 30px 0"
        mobilePadding="46px 20px 0"
        z="12"
        ref={scrollContainer}
      >
        <S.Header isMoved={isMoved}>
          <H.HeaderLogoWrap
            maxWidth="219px"
            row
            align="center"
            justify="space-between"
            width="100%"
          >
            <Link to="/"></Link>
            <Arrow direction="R" />
          </H.HeaderLogoWrap>

          {window > 1150 ? (
            <>
              <Nav isMoved={isMoved} isTop={true} agency row />
              <Flex row align="center" maxWidth="323px" width="100%">
                <Social isMoved={isMoved} isTop={true} />
                <ButtonBlack
                  txt="Связаться"
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
              column
              space="20px"
            ></Nav>
            <Social isMoved={isMoved} isBottom={true}></Social>
          </Flex>
        ) : null}

        <Fade>
          <MainTitle
            isClosedMobile={isClosedMobile}
            txt="Грамотный PR для проектов, связанных с электронной сценой."
          />
        </Fade>
      </Flex>
    </>
  );
};

export default AgencyHeader;
