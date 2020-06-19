import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'gatsby';

import Flex from '../../styled/flex';
import * as S from './styles';

const Artist = ({
  artist: {
    artistName,
    artistLogo,
    linkId,
    artistText1: { artistText1: desc1 },
    artistText1Ru: { artistText1Ru: desc1Ru },
  },
}) => {
  const [initialised, setInitialised] = useState(false);
  console.log('desc111', desc1);
  const parsed1 = JSON.parse(desc1);
  console.log('desc222', desc1);
  const parsed1Ru = JSON.parse(desc1Ru);

  useEffect(() => {
    setInitialised(true);
  }, []);

  // console.log('title', artist?.linkID);

  return (
    <S.ArtistWrapper
      row
      width="100%"
      justify="space-between"
      marginTop="60px"
      mobileMargin="10px 0 0"
    >
      <Flex marginRight="2.6%">
        <Fade>{initialised && <img src={artistLogo?.fluid?.src}></img>}</Fade>
      </Flex>
      <S.ArtistContent>
        <Flex width="100%">
          <Fade>
            <S.ArtistTitle>
              <Link to={`/booking/${linkId}`}>
                {artistName || 'Artist name'}
              </Link>
            </S.ArtistTitle>
            <S.DecriptionFirts>
              {initialised && documentToReactComponents(parsed1)}
            </S.DecriptionFirts>
          </Fade>
        </Flex>
        {/* <Flex width="100%" >
          {isHidden === 0 ? (
            <>
              {" "}
              <S.Upcoming>Upcoming events</S.Upcoming>
              <Flex width="100%" row justify="space-between">
                <Event
                  date={eventDate}
                  city={eventCity}
                  name={eventName}
                  club={eventClub}
                />
                <Event
                  date="Thu, 31 Oct 2019"
                  city="Vienna(AU)"
                  name="Criminal Practice - Halloween"
                  club="Grelle Forelle"
                />
                <Event
                  date="Thu, 31 Oct 2019"
                  city="Vienna(AU)"
                  name="Criminal Practice - Halloween"
                  club="Grelle Forelle"
                />
                <Event
                  date="Thu, 31 Oct 2019"
                  city="Vienna(AU)"
                  name="Criminal Practice - Halloween"
                  club="Grelle Forelle"
                />
              </Flex>
            </>
          ) : null}
        </Flex> */}
        <S.ArrowWrap row align="center" justify="center" width="auto">
          <S.Arrow />

          <S.CloseTxt>
            <Fade>
              <Link to={`/booking/${linkId}`}>Read more</Link>
            </Fade>
          </S.CloseTxt>
        </S.ArrowWrap>
      </S.ArtistContent>
    </S.ArtistWrapper>
  );
};

// export const Event = ({ date, club, city, name, isHidden }) => {
//   return (
//     <Flex width="23.6%">
//       <S.EventDate>
//         <span>{date}</span>/ <br />
//         <span>{city}</span>
//       </S.EventDate>
//       <S.EventName>
//         <p>{name} at</p>
//         <a href="#">{club}</a>
//       </S.EventName>
//     </Flex>
//   )
// }

export default Artist;
