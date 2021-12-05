import styled from "styled-components";
import HeaderBtns from "../organisms/HeaderBtns";

const Styles = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default function TmplHeader({
  headerHover,
  setHeaderHover,
  headerClick,
  headerClickMobile,
}: {
  headerHover: HeaderHover;
  setHeaderHover: (key: string, value: boolean) => void;
  headerClick: HeaderClick;
  headerClickMobile: HeaderClick;
}) {
  return (
    <Styles>
      <HeaderBtns
        headerHover={headerHover}
        setHeaderHover={setHeaderHover}
        headerClick={headerClick}
        headerClickMobile={headerClickMobile}
      />
    </Styles>
  );
}
