import styled from 'styled-components';

export const Title = styled.h2`
  font-family: Neue Machina;
  font-size: 48px;
  line-height: 48px;
  /* identical to box height, or 100% */
  font-weight: normal;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
