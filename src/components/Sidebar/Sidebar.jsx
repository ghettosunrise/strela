import React, { useRef, useState, useEffect } from 'react';
import { FacebookProvider, Share } from 'react-facebook';
import * as S from './styles';
import Flex from '../../styled/flex';
import Btn from '../Buttons/ButtonBlue';

export const Sidebar = ({
  isHidden,
  isEnglish,
  setIsEnglish,
  igLink,
  fbLink,
  raLink,
  scLink,
  pressKit,
  googleDriveLink,
}) => {
  const textarea = useRef();

  const [documentLoaded, setDocumentLoaded] = useState(null);
  const [location, setLocation] = useState(null);

  // useEffect(() => {
  //   setDocumentLoaded(true);
  // }, []);

  // if (documentLoaded) {
  //   setLocation(window.location.href);
  // }

  return (
    <S.Sidebar>
      {/* // isHidden={isHidden}> */}
      <textarea
        ref={textarea}
        style={{ position: 'absolute', left: -9999 }}
        value={location}
        readOnly
      />
      <p>Translate to</p>
      <Flex row width="72px" marginBottom="30px" justify="space-between">
        <S.Translate
          onClick={() => {
            setIsEnglish(1);
          }}
        >
          eng
        </S.Translate>
        <S.Translate
          onClick={() => {
            setIsEnglish(0);
          }}
        >
          ua
        </S.Translate>
      </Flex>
      <p>In social media</p>
      <Flex
        width="70%"
        maxWidth="9.5rem"
        marginBottom="30px"
        row
        justify="space-between"
      >
        {fbLink && (
          <S.Link target="_blank" href={fbLink}>
            FB
          </S.Link>
        )}
        {igLink && (
          <S.Link target="_blank" href={igLink}>
            IG
          </S.Link>
        )}
        {raLink && (
          <S.Link target="_blank" href={raLink}>
            RA
          </S.Link>
        )}
        {scLink && (
          <S.Link target="_blank" href={scLink}>
            SOUNDCLOUD
          </S.Link>
        )}
      </Flex>
      {/* <p>share with</p>
      <Flex width="93px" marginBottom="30px" row justify="space-between">
        <S.Copy
          onClick={() => {
            textarea.current.select();
            document.execCommand('copy');
            alert('Done ;)');
          }}
        /> */}
      {/* <FacebookProvider appId="437396483831952">
          <Share href="http://www.facebook.com">
            {({ handleClick, loading }) => (
              <S.Fb disabled={loading} onClick={handleClick} />
            )}
          </Share>
        </FacebookProvider> */}
      {/* </Flex> */}
      {googleDriveLink && (
        <>
          {' '}
          <p>download</p>
          <a target="_blank" rel="noreferrer" href={googleDriveLink}>
            <Btn download />
          </a>
        </>
      )}
    </S.Sidebar>
  );
};

export default Sidebar;
