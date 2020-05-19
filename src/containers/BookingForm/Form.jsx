import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Flex from '../../styled/flex'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Buttons/ButtonTransparent'
import { useStaticQuery, graphql } from 'gatsby'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  contactLink: Yup.string()
    .url()
    .min(8, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  socialLink: Yup.string()
    .url()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  date: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
})

const MyForm = ({ isClosed, setIsClosed }) => {
  const [artistPickerOpen, setArtistPickerOpen] = useState(false)
  const [artistChosen, setArtistChosen] = useState(false)
  const [addedArtist, setAddedArtist] = useState([])
  const [filteredArtist, setFilteredArtist] = useState([])
  console.log('MyForm -> filteredArtist', filteredArtist)

  // useEffect(() => {
  //   console.log('MyForm -> addedArtist', addedArtist)
  //   const filteredArr = new Set(addedArtist)

  //   setFilteredArtist([...filteredArr])
  //   console.log('MyForm -> filteredArr0000)))0', filteredArr[0] === undefined)
  //   console.log('MyForm -> filteredArr', filteredArr)

  //   // return () => {
  //   //   cleanup
  //   // };
  // }, [addedArtist])

  const artistData = useStaticQuery(graphql`
    query ArtistId {
      allContentfulArtist(sort: { fields: artistName, order: ASC }) {
        nodes {
          id
          artistName
        }
      }
    }
  `)

  const artistPickerData = artistData?.allContentfulArtist?.nodes
  console.log('artistPickerData', artistPickerData)

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
        {artistPickerOpen ? (
          <>
            <S.ArtistPicker artistPickerOpen={artistPickerOpen}>
              {artistPickerData.map(({ artistName, id }) => (
                <li
                  key={id}
                  onClick={() => {
                    if (
                      filteredArtist.length === 0 ||
                      !filteredArtist.find(e => e === artistName)
                    ) {
                      setFilteredArtist(prev => [...prev, artistName])
                    }
                  }}
                >
                  {artistName}
                </li>
              ))}
            </S.ArtistPicker>

            <>
              <S.P>You choosed</S.P>
              <S.YourChoice width="100%" row>
                <ul>
                  {filteredArtist.flatMap((item, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        setFilteredArtist(
                          [filteredArtist.flat().filter((_, e) => e !== index)],
                          '_____'
                        )
                      }
                    >
                      <>
                        {item}
                        <S.Close length={filteredArtist.length} />
                      </>
                    </li>
                  ))}
                </ul>
              </S.YourChoice>
            </>
          </>
        ) : null}
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            name: '',
            artist: '',
            contactLink: '',
            socialLink: '',
            city: '',
            date: '',
            club: '',
            comment: '',
            lineup: '',
          }}
          validate={values => {
            const errors = {}
            if (!values.socialLink) {
              errors.socialLink = 'Required'
            } else if (!values.contactLink) {
              errors.contactLink = 'Required'
            } else if (!values.name) {
              errors.name = 'Required'
            } else if (!values.city) {
              errors.city = 'Required'
            } else if (!values.date) {
              errors.date = 'Required'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <S.CustomForm>
              <Flex maxWidth="320px" width="100%">
                <Flex display="none">
                  <Field value={filteredArtist} type="text" name="artist" />
                </Flex>
                <p>Your name</p>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="span" />
                <p>Link for contact</p>
                <Field type="text" name="contactLink" />
                <ErrorMessage name="contactLink" component="span" />
                <p>Link to social media</p>
                <Field type="text" name="socialLink" />
                <ErrorMessage name="socialLink" component="span" />
                <p>additional info</p>
                <Field
                  placeholder="Text your comments "
                  as="textarea"
                  type="text"
                  name="comment"
                />
                <Button
                  size="small"
                  txt="Book"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Flex>
              <Flex maxWidth="320px" width="100%">
                <p>Your City</p>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="span" />
                <p>Choose the party date</p>
                <Field type="text" name="date" />
                <ErrorMessage name="date" component="span" />
                <p>Club</p>
                <Field type="text" name="club" />
                <p>line-up</p>
                <Field type="text" name="lineup" />
              </Flex>
            </S.CustomForm>
          )}
        </Formik>
      </S.BookingWrap>
    </S.ContactWrap>
  )
}

export default MyForm
