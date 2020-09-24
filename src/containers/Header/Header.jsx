import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Dropdown from '../../components/LangDropdown';
import Nav from '../Nav';
import Flex from '../../styled/flex';
import Social from '../../components/Social';
import * as H from '../../styled/header';
import * as S from './styles';
import ButtonBlack from '../../components/Buttons/ButtonBlack';
import Burger from '../../components/Buttons/Burger';
import useLanguage from '../../hooks/useLanguage';

const Header = ({
  siteTitle,
  setIsClosed,
  setIsClosedMobile,
  isClosedMobile,
  page,
}) => {
  const [documentLoaded, setDocumentLoaded] = useState(null);
  let window;

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  const [[language, setLanguage]] = useLanguage();

  // const [activeLang, setActiveLang] = useState('RUS');
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  documentLoaded === true
    ? (window = document.documentElement.clientWidth)
    : null;

  return (
    <S.Header page={page}>
      <Flex
        row
        justify="space-between"
        align="center"
        width="100%"
        // filter={page === 'news' || page === 'cases' ? 'invert(1)' : 'none'}
      >
        <H.HeaderLogoWrap
          maxWidth="219px"
          row
          align="center"
          justify="space-between"
          width="100%"
        >
          <Link to="/" />
          {/* <Arrow direction="R" />
           */}
          <Dropdown language={language} setLanguage={setLanguage} />
        </H.HeaderLogoWrap>
        {/* <Nav agency row></Nav>
        <Flex row align="center" maxWidth="323px" width="100%">
          <Social />
          <ButtonBlack txt="Связаться" onClick={() => setIsClosed(false)} />
        </Flex> */}
        {window > 1150 ? (
          <>
            <Nav language={language} agency row page={page} />
            <Flex row align="center" maxWidth="323px" width="100%">
              <Social />
              <ButtonBlack
                txt={language === 'RUS' ? 'Связаться' : 'Contact'}
                onClick={() => setIsClosed(false)}
              />
            </Flex>
          </>
        ) : (
          <Burger
            onClick={() => {
              setDropdownIsOpen(true);

              return isClosedMobile === true
                ? setIsClosedMobile(false)
                : setIsClosedMobile(true);
            }}
            isClosedMobile={isClosedMobile}
            setIsClosedMobile={setIsClosedMobile}
          />
        )}
      </Flex>
    </S.Header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
