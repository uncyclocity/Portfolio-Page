import styled from "styled-components";
import BtnFooter from "../atoms/button/BtnFooter";

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 620px;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default function FooterBtns({
  nowSlide,
  pageChangeWork,
  dispatch,
}: FooterProps) {
  return (
    <Styles>
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={0}
        text="WELCOME"
        pageChangeWork={pageChangeWork}
        dispatch={dispatch}
      />
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={1}
        text="PROFILE"
        pageChangeWork={pageChangeWork}
        dispatch={dispatch}
      />
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={2}
        text="INTRODUCE"
        pageChangeWork={pageChangeWork}
        dispatch={dispatch}
      />
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={3}
        text="SKILLS"
        pageChangeWork={pageChangeWork}
        dispatch={dispatch}
      />
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={4}
        text="WORKS"
        pageChangeWork={pageChangeWork}
        dispatch={dispatch}
      />
    </Styles>
  );
}
