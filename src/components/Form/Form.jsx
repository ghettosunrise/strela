import React from 'react';
import styled from 'styled-components';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Flex } from '../../styled';
import Button from '../Buttons/ButtonTransparent';

const ErrorFlex = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 24px;
  letter-spacing: -0.03em;
  bottom: 0vh;
  color: #ff3939;
`;

const CustomForm = styled(Form)`
  width: 100%;
  max-width: 718px;
  display: flex;
  justify-content: space-between;

  p {
    font-family: Formular;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 1.4vh;
    color: #000000;
  }

  textarea {
    resize: none;
    height: 61px;
  }

  textarea,
  input {
    border: none;
    border-bottom: 1px solid black;
    min-width: 320px;
    font-family: Formular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    outline: none;
    letter-spacing: -0.03em;
    /* margin-bottom: ; */
    margin-bottom: 1.25rem;

    color: #000000;
  }
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  promoName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(5, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  venue: Yup.string()
    .min(1, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  date: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  lineup: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  fee: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const MyForm = ({ str }) => (
  <Formik
    validationSchema={SignupSchema}
    initialValues={{
      name: '',
      email: '',
      city: '',
      date: '',
      venue: '',
      comment: '',
      lineup: '',
      promoName: '',
      fee: '',
    }}
    onSubmit={(values, actions) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(() => {
          alert('Success');
          actions.resetForm();
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false));
    }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!values.name) {
        errors.name = 'Required';
      } else if (!values.city) {
        errors.city = 'Required';
      } else if (!values.date) {
        errors.date = 'Required';
      } else if (!values.lineup) {
        errors.lineup = 'Required';
      } else if (!values.promoName) {
        errors.promoName = 'Required';
      } else if (!values.fee) {
        errors.fee = 'Required';
      } else if (!values.venue) {
        errors.venue = 'Required';
      }

      return errors;
    }}
  >
    {({ isSubmitting }) => (
      <CustomForm data-netlify name="contact" method="post" action="/">
        {/* <input type="hidden" name="form-name" value="contact" /> */}
        <Flex maxWidth="320px" width="100%">
          <Flex>
            <p>Your name</p>
            <Field type="text" name="name" />
            <ErrorFlex name="name" component="span" />
          </Flex>
          <Flex>
            <p>E-Mail Address </p>
            <Field type="email" name="email" />
            <ErrorFlex name="name" component="span" />
          </Flex>
          <Flex>
            <p>Event Date </p>
            <Field
              type="text"
              name="date"
              placeholder="9 Dec 2020 or 9 - 10 Dec 2020"
            />
            <ErrorFlex name="date" component="span" />
          </Flex>
          <Flex>
            <p>Proposed Line Up </p>
            <Field type="text" name="lineup" />
            <ErrorFlex name="lineup" component="span" />
          </Flex>
          <p>additional info</p>
          <Field
            placeholder="Text your comments "
            as="textarea"
            type="text"
            name="comment"
          />
          <Button size="small" txt="Book" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Flex>
        <Flex maxWidth="320px" width="100%">
          <Flex>
            <p>Promoter Name</p>
            <Field type="text" name="promoName" />
            <ErrorFlex name="promoName" component="span" />
          </Flex>
          <Flex>
            <p>Your City</p>
            <Field type="text" name="city" />
            <ErrorFlex name="city" component="span" />
          </Flex>
          <Flex>
            <p>Artist Fee Offer</p>
            <Field type="text" name="fee" />
            <ErrorFlex name="fee" component="span" />
          </Flex>
          <Flex>
            <p>Venue Name and capacity</p>
            <Field type="text" name="venue" />
            <ErrorFlex name="venue" component="span" />
          </Flex>
        </Flex>
      </CustomForm>
    )}
  </Formik>
);

export default MyForm;
