import styled from 'styled-components';
import pic from '../../../images/Element_2.png';

export const Title = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  max-width: 45.1%;
  color: #000000;

  @media only screen and (max-width: 1150px) {
    max-width: 100%;
    order: 2;

    &#about {
      order: 1;
    }
  }
`;

export const Txt = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  max-width: 32.4%;
  letter-spacing: -0.07em;
  color: #000000;

  @media only screen and (max-width: 1150px) {
    max-width: 100%;
    order: 3;
  }
`;
export const Block = styled.div`
  width: 203px;
  height: 235px;
  background-image: url(${pic});
  background-size: 100%;

  @media only screen and (max-width: 1150px) {
    order: 1;
    width: 335px;
    height: 373px;
    align-self: center;
    margin-bottom: 60px;
  }
`;
