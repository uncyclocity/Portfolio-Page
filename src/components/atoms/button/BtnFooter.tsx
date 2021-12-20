import styled from "styled-components";

const Styles = styled.div`
  font-size: 17px;
  text-align: center;
  letter-spacing: 5px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    letter-spacing: 2px;
  }

  font-family: ${({
    nowSlide,
    pageNum,
  }: {
    nowSlide: number;
    pageNum: number;
  }): string => {
    return nowSlide === pageNum ? "NanumSquareB" : "NanumSquareL";
  }};
`;

export default function BtnFooter({
  nowSlide,
  pageNum,
  onClick,
  text,
}: {
  nowSlide: number;
  pageNum: number;
  onClick: (slideNum: number) => void;
  text: string;
}) {
  return (
    <Styles
      nowSlide={nowSlide}
      pageNum={pageNum}
      onClick={() => pageNum !== nowSlide && onClick(pageNum)}
    >
      {text}
    </Styles>
  );
}