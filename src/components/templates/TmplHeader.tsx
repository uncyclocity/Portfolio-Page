import styled from "styled-components";
import HeaderBtns from "../organisms/HeaderBtns";

const Styles = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function TmplHeader({
  headerHover,
  setHeaderHover,
  headerClick,
}: {
  headerHover: HeaderHover;
  setHeaderHover: (key: string, value: boolean) => void;
  headerClick: HeaderClick;
}) {
  return (
    <Styles>
      <HeaderBtns
        headerHover={headerHover}
        setHeaderHover={setHeaderHover}
        headerClick={headerClick}
      />
    </Styles>
  );
}
