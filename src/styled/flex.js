import styled, { css } from 'styled-components';

import { getProp, fromProp } from './utils';

const flex = css`
  display: flex;
  position: relative;
  background: ${getProp('background', 'transparent')};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: ${getProp('align', 'flex-start')};
  height: ${getProp('height', 'auto')};
  /* box-sizing: ${getProp('box-sizing', 'auto')}; */
  width: ${getProp('width', 'auto')};
  justify-content: ${getProp('justify', 'flex-start')};
  flex-grow: ${getProp('grow', 0)};
  flex-shrink: ${getProp('shrink', 0)};
  flex-wrap: ${getProp('wrap', 'no-wrap')};
  ${fromProp('marginLeft', { make: 'margin-left' })};
  ${fromProp('marginRight', { make: 'margin-right' })};
  ${fromProp('marginTop', { make: 'margin-top' })};
  ${fromProp('marginBottom', { make: 'margin-bottom' })};
  ${fromProp('marginAll', { make: 'margin' })};
  ${fromProp('shadow', { make: 'box-shadow' })};
  ${fromProp('paddingAll', { make: 'padding' })};
  ${fromProp('paddingTop', { make: 'padding-top' })};
  ${fromProp('paddingBottom', { make: 'padding-bottom' })};
  ${fromProp('paddingLeft', { make: 'padding-left' })};
  ${fromProp('paddingRight', { make: 'padding-right' })};
  ${fromProp('hPadding', { make: 'padding-horizontal' })};
  ${fromProp('vPadding', { make: 'padding-vertical' })};
  ${fromProp('border', { make: 'border' })};
  ${fromProp('order', { make: 'order' })};
  ${fromProp('filter', { make: 'filter' })};
  ${fromProp('borderTop', { make: 'border-top' })};
  ${fromProp('top', { make: 'top' })};
  ${fromProp('borderBottom', { make: 'border-bottom' })};
  ${fromProp('radius', { make: 'border-radius' })};
  ${fromProp('overflow', { make: 'overflow' })};
  ${fromProp('overflowX', { make: 'overflow-X' })};
  ${fromProp('overflowY', { make: 'overflow-Y' })};
  ${fromProp('textTransform', { make: 'text-transform' })};
  ${fromProp('z', { make: 'z-index' })};
  ${fromProp('maxWidth', { make: 'max-width' })};
  ${fromProp('fontSize', { make: 'font-size' })};
  ${fromProp('content', { make: 'align-content' })};
  ${fromProp('alignSelf', { make: 'align-self' })};
  ${fromProp('display', { make: 'display' })};
  ${fromProp('opacity', { make: 'opacity' })};

  @media (max-width: 1150px) {
    padding: ${getProp('tabletPadding', '')};
    flex-direction: ${getProp('tabletDirection', '')};
    width: ${getProp('tabletWidth', '')};
    margin: ${getProp('tabletMargin', '')};
    ${fromProp('tabletMaxWidth', { make: 'max-width' })};
  }

  @media (max-width: 768px) {
    padding: ${getProp('mobilePadding', '')};
    flex-direction: ${getProp('mobileDirection', '')};
    width: ${getProp('mobileWidth', '')};
    justify-content: ${getProp('mobileJustify', '')};
    align-items: ${getProp('mobileAlign', '')};
    margin: ${getProp('mobileMargin', '')};
    ${fromProp('mobileMaxWidth', { make: 'max-width' })};
  }
`;

const Flex = styled.div`
  ${flex}

  .ticker {
    width: 100%;
  }
`;

// export const MainPageWrap = styled(Flex)`
//   background-image: url(${mainBg});
//   background-position: 50% 50%;
//   background-size: 100%;
//   background-repeat: no-repeat;
//   font-family: Neue Machina;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 48px;
//   line-height: 48px;

//   @media only screen and (max-width: 1268px) {
//     background-size: cover;
//   }

//   button {
//     background: transparent;
//     border: none;
//     cursor: pointer;
//     outline: none;
//   }

//   img {
//     max-width: 940px;
//     margin-bottom: 124px;

//     @media only screen and (max-width: 1150px) {
//       max-width: 620px;
//     }

//     @media only screen and (max-width: 768px) {
//       max-width: 290px;
//     }
//   }

//   @media only screen and (max-width: 768px) {
//     a {
//       font-size: 24px;
//       line-height: 28px;
//     }
//   }

//   .arrow_left {
//     width: 48px;
//     height: 23px;
//     margin-right: 24px;
//     background-image: url(${arrL});
//   }

//   .arrow_right {
//     width: 48px;
//     height: 23px;
//     margin-left: 24px;
//     background-image: url(${arrR});
//   }
// `;

Flex.Absolute = styled(Flex)`
  position: absolute;
  ${fromProp('top', { make: 'top' })};
  ${fromProp('left', { make: 'left' })};
  ${fromProp('bottom', { make: 'bottom' })};
  ${fromProp('right', { make: 'right' })};
`;

export default Flex;
