import React from "react"
import * as S from "./styles"
import Flex from "../../styled/flex"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Button from "../../components/Buttons/ButtonTransparent"

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  contactLink: Yup.string()
    .url()
    .min(8, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  socialLink: Yup.string()
    .url()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  date: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
})

const MyForm = ({ isClosed, setIsClosed }) => {
  return (
    <S.ContactWrap isClosed={isClosed}>
      <S.Shadow isClosed={isClosed}></S.Shadow>
      <S.BookingWrap>
        <Flex width="100%" align="flex-end" marginBottom="3vh">
          <S.Close onClick={() => setIsClosed(true)}></S.Close>
        </Flex>
        <S.Title>Book an artist</S.Title>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            name: "",
            contactLink: "",
            socialLink: "",
            city: "",
            date: "",
            club: "",
            comment: "",
            lineup: "",
          }}
          validate={values => {
            const errors = {}
            if (!values.socialLink) {
              errors.socialLink = "Required"
            } else if (!values.contactLink) {
              errors.contactLink = "Required"
            } else if (!values.name) {
              errors.name = "Required"
            } else if (!values.city) {
              errors.city = "Required"
            } else if (!values.date) {
              errors.date = "Required"
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
