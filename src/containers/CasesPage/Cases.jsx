import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Case from '../../components/Case';
import Flex from '../../styled/flex';
import ButtonBig from '../../components/Buttons/ButtonBig';

const Cases = () => {
  const caseData = useStaticQuery(graphql`
    query CasePage {
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
          childContentfulCaseBannerDescriptionEngTextNode {
            bannerDescriptionEng
          }
          childContentfulCaseBannerDescriptionTextNode {
            bannerDescription
          }
          childContentfulCaseCaseDescriptionEngTextNode {
            caseDescriptionEng
          }
          childContentfulCaseCaseDescriptionTextNode {
            caseDescription
          }
          childContentfulCaseWhatWeDoEngTextNode {
            whatWeDoENG
          }
          childContentfulCaseWhatWeDoTextTextNode {
            whatWeDoText
          }
        }
      }
    }
  `);

  console.log(caseData, 'REALCASEDATA');

  return (
    <Flex width="100%" paddingAll="30px 49px 0" tabletPadding="0 30px">
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
            subtitle,
            customId,
            image: {
              file: { url },
            },
            position,
            // childContentfulCaseBannerDescriptionEngTextNode: {
            //   bannerDescriptionEng,
            // },
            // childContentfulCaseBannerDescriptionTextNode: { bannerDescription },
            // childContentfulCaseCaseDescriptionEngTextNode: {
            //   caseDescriptionEng,
            // },
            // childContentfulCaseCaseDescriptionTextNode: { caseDescription },
            // childContentfulCaseWhatWeDoEngTextNode: { whatWeDoENG },
            // childContentfulCaseWhatWeDoTextTextNode: { whatWeDoText },
          }) => (
            <Case
              id={id}
              key={id}
              img={url}
              // size={size}
              label={title}
              // bannerDescriptionEng={bannerDescriptionEng}
              // bannerDescription={bannerDescription}
              // caseDescriptionEng={caseDescriptionEng}
              // caseDescription={caseDescription}
              // whatWeDoENG={whatWeDoENG}
              // whatWeDoText={whatWeDoText}
              position={position}
              sublabel={subtitle}
              content="stretch"
              customId={customId}
            />
          )
        )}
      </Flex>
    </Flex>
  );
};

export default Cases;
