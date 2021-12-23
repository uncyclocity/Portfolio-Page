import styled from "styled-components";
import "../../../styles/font.css";
import React from "react";

const NormalTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    align-items: center;
  }
`;

function TxtIntroduceMsg1() {
  return (
    <div>
      <NormalTextStyle>프론트엔드 개발자를 준비하고 있는</NormalTextStyle>
      <NormalTextStyle>SW 마이스터고 졸업생입니다.</NormalTextStyle>
      <NormalTextStyle>
        현재는 판교 테크노밸리 UI/UX 프레임워크 업체 소속의
      </NormalTextStyle>
      <NormalTextStyle>
        현역 산업기능요원으로서 복무 중에 있습니다.
      </NormalTextStyle>
      <br />
      <NormalTextStyle>
        항상 시간이 남을 때마다 제가 좋아하는 기술을 다룹니다.
      </NormalTextStyle>
      <NormalTextStyle>
        저는 이전부터 Front-End 분야에 큰 관심이 생겨
      </NormalTextStyle>
      <NormalTextStyle>꾸준히 학습하고 이를 정리해왔습니다.</NormalTextStyle>
      <NormalTextStyle>
        그리고 React와 Next.js를 통해 다양한 프로젝트를 진행해왔습니다.
      </NormalTextStyle>
      <br />
      <NormalTextStyle>이제는 그동안 애정을 갖고 키워 온</NormalTextStyle>
      <NormalTextStyle>
        Front-End 개발자로서의 새로운 경험을 쌓아 나가고자 합니다.
      </NormalTextStyle>
    </div>
  );
}

export default React.memo(TxtIntroduceMsg1);
