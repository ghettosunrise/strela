import React from 'react';
import { Link, Image } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import { Flex } from '../styled';

import logo from '../images/logowhite.svg';
import arrow from '../images/arrwhitebig.svg';

const Title = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  letter-spacing: -0.07em;
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.07em;
  color: #ffffff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background-image: url(${arrow});
    right: -50px;
    top: 3px;
    width: 38px;
    height: 19px;
  }
`;

const NotFoundPage = () => (
  <Flex
    width="100%"
    background="#000"
    height="100vh"
    align="center"
    justify="center"
  >
    <Flex.Absolute paddingAll="46px 49px" width="100%" left="0" top="0">
      <Link to="/">
        <img alt="logo" src={logo} />
      </Link>
    </Flex.Absolute>
    <SEO title="404: Not found" />
    <Flex>
      <Title>
        Упс, кажется тут <br />
        пусто/{' '}
      </Title>
      <StyledLink to="/"> На главную</StyledLink>
    </Flex>
  </Flex>
);

export default NotFoundPage;
