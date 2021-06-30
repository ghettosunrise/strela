import React, { useState, useEffect } from 'react';
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
  const [formSent, setFormSent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setFormSent(false);
      setIsClosed(true)
    }, 1500);
  }, [formSent]);

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
       {!formSent && ( <>
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

            
          </>
        )}
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
        <Form formSent={formSent} setFormSent={setFormSent} str={str} />
        </>)}
        {formSent && (
        <div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{fontFamily: 'Neue Machina', fontSize: '2rem'}}>Thanks for your request!</p>
        </div>)
        }
      </S.BookingWrap>
    </S.ContactWrap>
  );
};

export default BookingForm;
