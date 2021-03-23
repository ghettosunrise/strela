import React from 'react';
import Flex from '../../styled/flex';
import { DividerText, DividerArrow } from './styles';

const Divider = ({ text }) => (
  <Flex
    width="100%"
    align="flex-end"
    row
    paddingAll="0px 49px"
    marginBottom="50px"
    tabletPadding="0 30px"
  >
    <DividerText>{text}</DividerText>
    <DividerArrow />
  </Flex>
);

export default Divider;
