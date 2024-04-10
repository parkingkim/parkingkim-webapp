import styled from 'styled-components';

const REVIEW_MENUS = [
  '주차 자리가 많아요',
  '깔끔하고 관리가 잘 되어 있어요',
  '주차 배려석이 잘 되어 있어요',
  '전기차 충전석이 많아요',
  '주차석이 널널해서 주차하기 편해요',
  '큰 길과 가까워요',
  '접근성이 좋아요',
  '결제가 편리해요',
  '직원이 친절해요',
  '가격이 저렴해요',
];

const ReviewMenus = () => {
  return (
    <Container>
      {REVIEW_MENUS.map((reviewMenu) => (
        <ReviewBox key={reviewMenu}>
          <ReviewProgress $width={(20 / 30) * 100}>{reviewMenu}</ReviewProgress>
        </ReviewBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ReviewBox = styled.button`
  display: flex;
  height: 39px;
  margin-bottom: 5px;

  background-color: #f5f5f5;
  border-radius: 10px;

  position: relative;
`;

const ReviewProgress = styled.div<{ $width: number }>`
  display: flex;
  width: ${({ $width }) => $width + '%'};
  align-items: center;

  background-color: #9ee8ff;
  border-radius: 10px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  color: ${({ theme }) => theme.gray80};
  font-size: 14px;
  font-weight: bold;
`;

export default ReviewMenus;
