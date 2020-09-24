/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import CaseInfo from '../containers/CaseInfo';
import News from '../containers/NewsContainer';
import Divider from '../components/Divider';
import useLanguage from '../hooks/useLanguage';

const Case = ({ data, pageContext, ...rest }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [isClosedMobile, setIsClosedMobile] = useState(true);

  const [[language, setLanguage]] = useLanguage();

  const {
    title,
    dividerText,
    bannerDescription,
    bannerDescriptionEng,
    bannerImage,
    hashtags,
    selectedText,
    caseDescription,
    firstImageDescription,
    secondImageDescription,
    caseAdditionalImages,
    caseDescriptionEng,
  } = data.contentfulCase;

  const { allContentfulNews } = data;
  const isRussian = language === 'RUS';

  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
      page="cases"
    >
      <SEO title="Case" />
      {/* <Mobile /> */}
      <Banner
        cases
        title={title}
        description={
          isRussian
            ? bannerDescription.bannerDescription
            : bannerDescriptionEng.bannerDescriptionEng
        }
        image={bannerImage ? bannerImage.file.url : null}
        hashtags={hashtags}
        language={language}
        page="cases"
      />
      <CaseInfo
        titleFirst={selectedText}
        textFirst={caseDescription.caseDescription}
        // textSecond={whatWeDoText.whatWeDoText}
        titleSecond="Что мы сделали"
        imgDesc1={firstImageDescription}
        imgDesc2={secondImageDescription}
        imgSrc1={
          caseAdditionalImages && caseAdditionalImages[0]
            ? caseAdditionalImages[0].fluid.src
            : null
        }
        imgSrc2={
          caseAdditionalImages && caseAdditionalImages[1]
            ? caseAdditionalImages[1].fluid.src
            : null
        }
      />
      <Divider text={dividerText} />
      <News caseNews data={allContentfulNews.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query CaseAndNews($id: String, $customId: String, $hashtagRegex: String) {
    contentfulCase(id: { eq: $id }, customId: { eq: $customId }) {
      id
      title
      customId
      subtitle
      selectedText
      dividerText
      secondImageDescription
      firstImageDescription
      bannerImage {
        file {
          url
        }
      }
      hashtags {
        id
        name
        value
      }
      caseAdditionalImages {
        fluid {
          src
        }
      }
      caseDescription {
        caseDescription
      }
      bannerDescription {
        bannerDescription
      }
      bannerDescriptionEng {
        bannerDescriptionEng
      }
      childContentfulCaseCaseDescriptionEngTextNode {
        caseDescriptionEng
      }
      whatWeDoText {
        whatWeDoText
      }
      childContentfulCaseWhatWeDoEngTextNode {
        whatWeDoENG
      }
    }

    allContentfulNews(
      limit: 4
      filter: { hashtags: { elemMatch: { value: { regex: $hashtagRegex } } } }
    ) {
      nodes {
        id
        title
        link
        image {
          file {
            url
          }
        }
        hashtags {
          id
          name
          value
        }
        date
        size
      }
      totalCount
    }
  }
`;

export default Case;
