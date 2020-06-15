import React, { useState } from 'react';
import * as S from './styles';
import Flex from '../../styled/flex';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/Buttons/ButtonTransparent';
import Form from '../../components/Form';
import { useStaticQuery, graphql } from 'gatsby';

const BookingForm = ({ isClosed, setIsClosed }) => {
  const [artistPickerOpen, setArtistPickerOpen] = useState(false);
  const [filteredArtist, setFilteredArtist] = useState([]);
  const [artistChosen, setArtistChosen] = useState(null);

  const str = filteredArtist.join(' ,');

  const artistData = useStaticQuery(graphql`
    query ArtistId {
      allContentfulArtist(sort: { fields: artistName, order: ASC }) {
        nodes {
          id
          artistName
        }
      }
    }
  `);

  const artistPickerData = artistData?.allContentfulArtist?.nodes;

  return (
    <S.ContactWrap isClosed={isClosed}>
      <S.Shadow
        onClick={() => setIsClosed(true)}
        isClosed={isClosed}
      ></S.Shadow>
      <S.BookingWrap>
        <Flex width="100%" align="flex-end" marginBottom="3vh">
          <S.Close onClick={() => setIsClosed(true)}></S.Close>
        </Flex>
        <S.Title>Book an artist</S.Title>
        <S.ChooseArtist
          artistPickerOpen={artistPickerOpen}
          onClick={() =>
            artistPickerOpen
              ? setArtistPickerOpen(false)
              : setArtistPickerOpen(true)
          }
        >
          {' '}
          Choose an artist <span>^</span>
        </S.ChooseArtist>
        {artistPickerOpen && (
          <>
            <S.ArtistPicker column artistPickerOpen={artistPickerOpen}>
              {artistPickerData.map(({ artistName, id }) => (
                <li
                  key={id}
                  onClick={() => {
                    if (
                      filteredArtist.length === 0 ||
                      !filteredArtist.find(e => e === artistName)
                    ) {
                      setFilteredArtist(prev => [...prev, artistName]);
                      setArtistChosen(true);
                    }
                  }}
                >
                  {artistName}
                </li>
              ))}
            </S.ArtistPicker>

            <>
              {artistChosen && <S.P>You choosed</S.P>}
              <S.YourChoice width="100%" row>
                <ul>
                  {filteredArtist.map((item, index) => (
                    <li key={index}>
                      <>
                        {item}
                        <S.DeleteArtist
                          onClick={() => {
                            setFilteredArtist(prev =>
                              prev.filter((_, i) => i !== index)
                            );
                            filteredArtist.length === 1
                              ? setArtistChosen(false)
                              : null;
                          }}
                        />
                      </>
                    </li>
                  ))}
                </ul>
              </S.YourChoice>
            </>
          </>
        )}
        <Form str={str} />
      </S.BookingWrap>
    </S.ContactWrap>
  );
};

export default BookingForm;
