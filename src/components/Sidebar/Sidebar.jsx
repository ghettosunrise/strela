import React, { useRef } from "react"
import * as S from "./styles"
import Flex from "../../styled/flex"
import Btn from "../../components/Buttons/ButtonBlue"
import { FacebookProvider, Share } from "react-facebook"

export const Sidebar = ({
  isHidden,
  isEnglish,
  setIsEnglish,
  igLink,
  fbLink,
  raLink,
  scLink,
  pressKit,
}) => {
  const textarea = useRef()

  return (
    <S.Sidebar>
      {/* // isHidden={isHidden}> */}
      <textarea
        ref={textarea}
        style={{ position: "absolute", left: -9999 }}
        value={window.location.href}
      />
      <p>Translate to</p>
      <Flex row width="72px" marginBottom="30px" justify="space-between">
        <S.Translate
          onClick={() => {
            setIsEnglish(1)
          }}
        >
          eng
        </S.Translate>
        <S.Translate
          onClick={() => {
            setIsEnglish(0)
          }}
        >
          ru
        </S.Translate>
      </Flex>
      <p>In social media</p>
      <Flex width="100%" maxWidth="400px" marginBottom="30px" row justify="space-between">
        <S.Link href={fbLink}>FB</S.Link>
        <S.Link href={igLink}>IG</S.Link>
        <S.Link href={raLink}>RA</S.Link>
        <S.Link href={scLink}>SOUNDCLOUD</S.Link>
      </Flex>
      <p>share with</p>
      <Flex width="93px" marginBottom="30px" row justify="space-between">
        <S.Copy
          onClick={() => {
            textarea.current.select()
            document.execCommand("copy")
            alert("Done ;)")
          }}
        />
        <FacebookProvider appId="437396483831952">
          <Share href="http://www.facebook.com">
            {({ handleClick, loading }) => (
              <S.Fb disabled={loading} onClick={handleClick}></S.Fb>
            )}
          </Share>
        </FacebookProvider>
      </Flex>
      <p>download</p>
      <Btn download pressKit={pressKit} />
    </S.Sidebar>
  )
}

export default Sidebar
