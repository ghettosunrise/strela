import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Case from '../../components/Case';
import Flex from '../../styled/flex';
import ButtonBig from '../../components/Buttons/ButtonBig';

const Cases = ({ language }) => {
  const caseData = useStaticQuery(graphql`
    query Case {
      allContentfulCase {
        nodes {
          id
          title
          position
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
            id, // size,
            title,
            position,
            subtitle,
            customId,
            // image: {
            //   file: { url },
            // },
          }) => (
            <Case
              id={id}
              key={id}
              // img={url || ''}
              // size={size}
              position={position}
              label={title}
              sublabel={subtitle}
              content="stretch"
              customId={customId}
            />
          )
        )}
      </Flex>
      <ButtonBig
        width="100%"
        link="/promo/cases"
        txt={language === 'RUS' ? 'Все кейсы' : 'All Cases'}
      />
    </Flex>
  );
};

export default Cases;
