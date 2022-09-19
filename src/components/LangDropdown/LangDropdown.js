/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Flex from '../../styled/flex';
import arrd from '../../images/arrd.svg';

const Dropdown = styled.div`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  height: 30px;
  transition: all 0.4s ease;

  /* identical to box height, or 122% */

  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -0.07em;

  &::after {
    position: absolute;
    max-width: 10px;
    width: 100%;
    height: 8px;
    right: -20px;
    top: 5px;
    background-repeat: no-repeat;
    background-image: url(${arrd});
    /* background: red; */
    content: '';
  }

  p {
    cursor: pointer;
    margin-bottom: 4px;
    opacity: ${props => props.opacity};
    transition: all 0.4s ease;
    position: relative;
  }
`;

const Stp = styled.p`
  opacity: ${props => props.opacity};
  height: ${props => props.height};
  transition: all 0.4s ease;
`;

const LangDropdown = ({ language, setLanguage }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  return (
    <Flex height="18px">
      <Dropdown
        onClick={() => {
          if (dropdownIsOpen) {
            return null;
          }
          setDropdownIsOpen(true);
        }}
      >
        <Flex
          onClick={() => {
            setLanguage('UA');
            setDropdownIsOpen(false);
          }}
          order={language === 'UA' ? 1 : 2}
          opacity={dropdownIsOpen || language === 'UA' ? 1 : 0}
        >
          <Stp
            height={dropdownIsOpen || language === 'UA' ? 'auto' : 0}
            opacity={dropdownIsOpen || language === 'UA' ? 1 : 0}
          >
            Рус
          </Stp>
        </Flex>
        <Flex
          onClick={() => {
            setLanguage('ENG');
            setDropdownIsOpen(false);
          }}
          opacity={dropdownIsOpen || language === 'ENG' ? 1 : 0}
          order={language === 'ENG' ? 1 : 2}
        >
          <Stp
            height={dropdownIsOpen || language === 'ENG' ? 'auto' : 0}
            opacity={dropdownIsOpen || language === 'ENG' ? 1 : 0}
          >
            Eng
          </Stp>
        </Flex>
      </Dropdown>
    </Flex>
  );
};

export default LangDropdown;
