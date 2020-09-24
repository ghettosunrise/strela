import React from 'react';
import styled from 'styled-components';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as S from './styles';
// import * as S from '../../components/Form/';
import Flex from '../../styled/flex';

// const CustomForm = styled(Form)`
//   width: 100%;
//   max-width: 718px;
//   display: flex;
//   justify-content: space-between;

//   p {
//     font-family: Formular;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 12px;
//     line-height: 15px;
//     letter-spacing: 0.06em;
//     text-transform: uppercase;
//     margin-bottom: 1.4vh;
//     color: #000000;
//   }

//   textarea {
//     resize: none;
//     height: 61px;
//   }

//   textarea,
//   input {
//     border: none;
//     border-bottom: 1px solid black;
//     min-width: 320px;
//     font-family: Formular;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 14px;
//     line-height: 24px;
//     outline: none;
//     letter-spacing: -0.03em;
//     margin-bottom: 3.7vh;
//     color: #000000;
//   }

//   span {
//     font-family: Formular;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 11px;
//     line-height: 24px;
//     letter-spacing: -0.03em;
//     position: relative;
//     bottom: 4vh;
//     color: #ff3939;
//   }
// `;

// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(70, 'Too Long!')
//     .required('Required'),
//   city: Yup.string()
//     .min(2, 'Too Short!')
//     .max(25, 'Too Long!')
//     .required('Required'),
//   contactLink: Yup.string()
//     .url()
//     .min(8, 'Too Short!')
//     .max(70, 'Too Long!')
//     .required('Required'),
//   socialLink: Yup.string()
//     .url()
//     .min(2, 'Too Short!')
//     .max(70, 'Too Long!')
//     .required('Required'),
//   date: Yup.string()
//     .min(2, 'Too Short!')
//     .max(70, 'Too Long!')
//     .required('Required'),
// });

const MyForm = ({ str }) => (
  <Formik
    validationSchema={SignupSchema}
    initialValues={{
      request: '',
      name: '',
      contactLink: '',
      socialLink: '',
      city: '',
      date: '',
      club: '',
      comment: '',
      lineup: '',
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify({ artist: str, ...values }, null, 2));
        setSubmitting(false);
      }, 400);
    }}
    validate={values => {
      const errors = {};
      if (!values.socialLink) {
        errors.socialLink = 'Required';
      } else if (!values.contactLink) {
        errors.contactLink = 'Required';
      } else if (!values.name) {
        errors.name = 'Required';
      } else if (!values.city) {
        errors.city = 'Required';
      } else if (!values.date) {
        errors.date = 'Required';
      }

      return errors;
    }}
  >
    {({ isSubmitting }) => (
      <CustomForm>
        <Flex maxWidth="320px" width="100%">
          <p>Тема запроса</p>
          <Field type="text" name="name" placeholder="Введите текст" />
          <ErrorMessage name="name" component="span" />
          {/* <p>Your name</p> */}
          <p>Имя</p>
          <Field type="text" name="name" placeholder="Nicola Blanc" />
          <ErrorMessage name="name" component="span" />
          <p>Link for contact</p>
          <Field type="text" name="contactLink" />
          <ErrorMessage name="contactLink" component="span" />
          <p>Соц сети</p>
          <Field type="text" name="socialLink" />
          <ErrorMessage name="socialLink" component="span" />
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
      </CustomForm>
    )}
  </Formik>
);

const ContactUs = ({ isClosed, setIsClosed }) => (
  // const [isClosed, setIsClosed] = useState(false)

  <S.ContactWrap isClosed={isClosed}>
    <S.Shadow isClosed={isClosed} />
    <S.Contact>
      <Flex width="100%" align="flex-end" marginBottom="16.7vh">
        <S.Close onClick={() => setIsClosed(true)} />
      </Flex>
      <S.Title>Связаться</S.Title>

      {/* <S.SubTitle>Быстрый способ с нами связаться через :</S.SubTitle>
      <Flex maxWidth="425px" width="100%" row justify="space-between">
        <S.LinkWrap>
          <S.Tg />
          <a href="#">Telegram</a>
        </S.LinkWrap>
        <S.LinkWrap>
          <S.Fb />
          <a href="#">Messenger</a>
        </S.LinkWrap>
        <S.LinkWrap>
          <S.Mail />
          <a href="#">Email</a>
        </S.LinkWrap>
      </Flex>
      <S.Arrow />
      <S.BottomTxtWrap>
        <p>
          32 Avenue of the Americas 19th Floor New York, NY 10013 United States
        </p>
        <Flex>
          <a href="tel:#">+46 8 791 40 10</a>
          <a href="mailto:#">info@strela.com </a>
        </Flex>
      </S.BottomTxtWrap> */}
    </S.Contact>
  </S.ContactWrap>
);
export default ContactUs;
