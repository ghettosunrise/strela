import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Case from '../../components/Case';
import Flex from '../../styled/flex';
import ButtonBig from '../../components/Buttons/ButtonBig';

const Cases = () => {
  const caseData = useStaticQuery(graphql`
    query Case {
      allContentfulCase {
        nodes {
          id
          size
          title
          customId
          subtitle
          image {
            file {
              url
            }
          }
        }
      }
    }
  `);
  return (
    <Flex
      width="100%"
      paddingAll="0px 49px 140px"
      tabletPadding="0 30px 140px"
      mobilePadding="0 20px 99px"
    >
      <Flex
        row
        width="100%"
        justify="space-between"
        align="stretch"
        wrap="wrap"
      >
        {caseData.allContentfulCase.nodes.map(
          ({
            id,
            size,
            title,
            subtitle,
            customId,
            image: {
              file: { url },
            },
          }) => (
            <Case
              id={id}
              key={id}
              img={url}
              size={size}
              label={title}
              sublabel={subtitle}
              content="stretch"
              customId={customId}
            />
          )
        )}
      </Flex>
      <ButtonBig width="100%" link="/agency/cases" txt="Все кейсы" />
    </Flex>
  );
};

export default Cases;
