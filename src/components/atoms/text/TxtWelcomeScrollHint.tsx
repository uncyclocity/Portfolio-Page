import styled from "styled-components";

const Styles = styled.div`
  font-size: 16px;
  color: #808080;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export default function TxtWelcomeScrollHint() {
  if (matchMedia("screen and (max-width: 700px)").matches) {
    return <Styles>하단의 버튼으로 페이지를 넘겨 보세요 ;)</Styles>;
  } else {
    return (
      <Styles>
        스크롤을 내리거나 하단 버튼을 눌러 페이지를 넘기세요 ;)
        <br />
        (터치패드의 경우 살짝만 스크롤 해주시기를 권장합니다..!)
      </Styles>
    );
  }
}
