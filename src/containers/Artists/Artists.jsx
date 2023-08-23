import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Artist from '../../components/Artist';
import Flex from '../../styled/flex';
import * as S from './styles';

const Artists = () => {
  const artistData = useStaticQuery(graphql`
    query Artist {
      allContentfulArtist(
        sort: { fields: [isExResident, artistName], order: [DESC, ASC] }
      ) {
        nodes {
          id
          isExResident
          artistName
          artistPicture {
            fluid {
              src
            }
          }
          artistText1 {
            artistText1
          }
          artistText1Ru {
            artistText1Ru
          }
          linkId
          artistLogo {
            fluid {
              src
            }
          }
        }
      }
    }
  `);
  const data = artistData.allContentfulArtist.nodes;

  return (
    <Flex
      width="100%"
      paddingAll=" 0 49px"
      tabletPadding="0 30px"
      mobilePadding="0 20px"
    >
      <Flex width="100%" z="2">
        <S.Title id="artists">Artists</S.Title>
        {data.map(artist => (
          <Artist
            artistName={artist.artistName}
            key={artist.id}
            artist={artist}
            data={data}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Artists;
