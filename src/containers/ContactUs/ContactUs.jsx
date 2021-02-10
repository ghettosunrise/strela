import React, { useRef } from 'react';
import styled from 'styled-components';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as S from './styles';
import Button from '../../components/Buttons/ButtonBlack';
// import * as S from '../../components/Form/';
import Flex from '../../styled/flex';
import { useLanguage } from '../../hooks';

const CustomForm = styled(Form)`
  width: 100%;
  max-width: 718px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.7vh;

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
    min-width: 263px;
    font-family: Formular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    outline: none;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
    /* margin-bottom: 3.7vh; */
    color: #000000;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ErrorFlex = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 24px;
  letter-spacing: -0.03em;
  bottom: -3vh;
  color: #ff3939;
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  request: Yup.string()
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
});

const MyForm = ({ str }) => {
  const [language, setLanguage] = useLanguage();

  const isRus = language === 'RUS';

  function encode(data) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  return (
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
      onSubmit={(values, actions) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact1', ...values }),
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
        if (!values.socialLink) {
          errors.socialLink = 'Required';
        } else if (!values.contactLink) {
          errors.contactLink = 'Required';
        } else if (!values.name) {
          errors.name = 'Required';
        } else if (!values.theme) {
          errors.theme = 'Required';
        } else if (!values.contacts) {
          errors.contacts = 'Required';
        }

        return errors;
      }}
    >
      {({ isSubmitting }) => (
        <>
          <CustomForm data-netlify name="contact1" method="post" action="/">
            <Flex maxWidth="320px" width="100%">
              <Flex marginBottom="3.7vh">
                <p>{isRus ? 'Имя' : 'Name'}</p>
                <Field type="text" name="name" />
                <ErrorFlex name="name" component="span" />
              </Flex>
              <Flex marginBottom="3.7vh">
                <p>{isRus ? 'Тема запроса' : 'Subject of Request'}</p>
                <Field type="text" name="theme" />
                <ErrorFlex name="theme" component="span" />
              </Flex>
              <Flex>
                <p>{isRus ? 'Запрос' : 'Request'}</p>
                <Field
                  placeholder={isRus ? 'Расскажите нам больше' : 'Tell us more'}
                  as="textarea"
                  type="text"
                  name="comment"
                />
                <ErrorFlex name="comment" component="span" />
              </Flex>
            </Flex>
            <Flex maxWidth="320px" width="100%">
              {/* <Flex marginBottom="3.7vh">
            <p>название ресурса</p>
            <Field type="text" name="city" placeholder="Soundcloud, " />
            <ErrorFlex name="city" component="span" />
          </Flex> */}
              {/* <Flex>
            <p>Choose the party date</p>
            <Field type="text" name="date" />
            <ErrorFlex name="date" component="span" />
          </Flex> */}
              <Flex marginBottom="3.7vh">
                <p>{isRus ? 'Контакт' : 'Contact'}</p>
                <Field
                  type="text"
                  name="contacts"
                  placeholder="Messenger / Telegram / E-mail"
                />
                <ErrorFlex name="contacts" component="span" />
              </Flex>
              <Flex marginBottom="3.7vh">
                <p>{isRus ? 'Соц сети' : 'Social Media'}</p>
                <Field
                  type="text"
                  name="socialLink"
                  placeholder="Facebook / Instagram / ..."
                />
                <ErrorFlex name="socialLink" component="span" />
              </Flex>
              <Flex>
                <p>{isRus ? 'ресурс' : 'resource'}</p>
                <Field
                  type="text"
                  name="resource"
                  placeholder="Mixmag / RA / SoundCloud / ..."
                />
                <ErrorFlex name="resource" component="span" />
              </Flex>
            </Flex>
          </CustomForm>
          <Button
            txt={isRus ? 'Отправить' : 'Send'}
            size="small"
            type="submit"
            disabled={isSubmitting}
          >
            Отправить
          </Button>
        </>
      )}
    </Formik>
  );
};

const ContactUs = ({ isClosed, setIsClosed }) => {
  const mailRef = useRef();

  return (
    // const [isClosed, setIsClosed] = useState(false)

    <S.ContactWrap isClosed={isClosed}>
      <S.Shadow isClosed={isClosed} />
      <S.Contact>
        <Flex width="100%" align="flex-end" marginBottom="5.5vh">
          <S.Close onClick={() => setIsClosed(true)} />
        </Flex>
        <S.Title>Связаться</S.Title>
        <MyForm />
        <S.Line />
        <S.BottomTxt>
          Связаться с нами для обсуждения сотрудничества можно по имейлу:
        </S.BottomTxt>
        <Flex row align="center">
          <S.Mail />
          <S.MailLink
            onClick={() => {
              mailRef.current.select();
              document.execCommand('copy');
              console.log(mailRef.current, 'wtd');
            }}
            ref={mailRef}
          >
            strela.agency@gmail.com
          </S.MailLink>
          {/* <textarea
            ref={mailRef}
            style={{ display: 'none' }}
            value="strela.agency@gmail.com"
            readOnly
          /> */}
        </Flex>

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
};

export default ContactUs;
