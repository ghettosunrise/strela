import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Flex from '../../styled/flex';

import * as S from '../../components/Artist/styles';
// import cpbig from '../../images/cpbig.png';
import Sidebar from '../../components/Sidebar';
import Iframe from '../../components/Iframe';

const ArtistPage = data => {
  const [isEnglish, setIsEnglish] = useState(1);
  const [parsedText1, setParsedText1] = useState(null);
  const [parsedText1Ru, setParsedText1Ru] = useState(null);
  const [parsedText2, setParsedText2] = useState(null);
  const [parsedText2Ru, setParsedText2Ru] = useState(null);
  const [parsedText3, setParsedText3] = useState(null);
  const [parsedText3Ru, setParsedText3Ru] = useState(null);
  const [parsedSoundCloud, setParsedSoundCloud] = useState('');

  // const [myData, setMyData] = useState(null);

  // useEffect(() => {
  //   setMyData();
  // }, []);

  const { contentfulArtist: myData } = data?.data;

  // useEffect(() => {
  //   setParsedText1(JSON.parse(myData?.artistText1?.artistText1));
  //   setParsedText2(JSON.parse(myData?.artistText2?.artistText2));
  //   setParsedText3(JSON.parse(myData?.artistText3?.artistText3));
  //   setParsedText1Ru(JSON.parse(myData?.artistText1Ru?.artistText1Ru));
  //   setParsedText2Ru(JSON.parse(myData?.artistText2Ru?.artistText2Ru));
  //   setParsedText3Ru(JSON.parse(myData?.artistText3Ru?.artistText3Ru));
  //   setParsedSoundCloud(
  //     JSON.parse(myData?.soundCloudTrackLinks?.soundCloudTrackLinks)
  //   );
  // }, []);

  // const iframeSrc = documentToReactComponents(parsedSoundCloud);

  // const parsedText1 = JSON.parse(myData?.artistText1?.artistText1);
  // const parsedText1Ru = JSON.parse(myData?.artistText1Ru?.artistText1Ru);
  // const parsedText2 = JSON.parse(myData?.artistText2?.artistText2);
  // const parsedText2Ru = JSON.parse(myData?.artistText2Ru?.artistText2Ru);
  // const parsedText3 = JSON.parse(myData?.artistText3?.artistText3);
  // const parsedText3Ru = JSON.parse(myData?.artistText3Ru.artistText3Ru);
  // const parsedSoundCloud = JSON.parse(
  //   myData?.soundCloudTrackLinks?.soundCloudTrackLinks
  // );

  const { igLink, fbLink, scLink, raLink } = myData;

  const pressKit = myData?.pressKit?.file?.url || '';
  const { src } = myData?.artistPicture?.fluid || '';

  return (
    <S.ArtistWrapper>
      <Flex
        paddingAll=" 60px 49px 0"
        tabletPadding="0px 30px"
        mobilePadding="0px 20px"
        z="2"
        width="100%"
        justify="center"
      >
        <S.ArtistName>{myData?.artistName}</S.ArtistName>
        <Fade>
          <img src={src} />
        </Fade>
        <S.ArtistContent>
          <Flex
            width="100%"
            row
            justify="flex-end"
            paddingTop="60px"
            mobileDirection="column"
          >
            <Flex width="53%" mobileWidth="100%">
              <Fade cascade>
                <S.DecriptionFirts>
                  {isEnglish
                    ? documentToReactComponents(parsedText1)
                    : documentToReactComponents(parsedText1Ru)}
                </S.DecriptionFirts>
                <S.DescriptionSecond>
                  {isEnglish
                    ? documentToReactComponents(parsedText2)
                    : documentToReactComponents(parsedText2Ru)}
                </S.DescriptionSecond>
                <S.DescriptionThird>
                  {isEnglish
                    ? documentToReactComponents(parsedText3)
                    : documentToReactComponents(parsedText3Ru)}
                </S.DescriptionThird>
              </Fade>
              <Flex width="100%">
                {/* <Iframe src={parsedSoundCloud} /> */}
              </Flex>
            </Flex>
            {/* <Sidebar
              fbLink={fbLink}
              igLink={igLink}
              raLink={raLink}
              scLink={scLink}
              pressKit={pressKit}
              setIsEnglish={setIsEnglish}
            /> */}
          </Flex>
        </S.ArtistContent>
      </Flex>
    </S.ArtistWrapper>
  );
};

export default ArtistPage;
