import { HumanIcon } from '@assets/index';
import ReviewMenus from '@components/ReviewMenus';
import styled from 'styled-components';

const Review = () => {
  return (
    <InfoContainer>
      <h4>리뷰</h4>
      <ReviewButton>리뷰쓰기</ReviewButton>
      <span>
        <HumanIcon /> 25
      </span>
      <ReviewMenus />
    </InfoContainer>
  );
};

const ReviewButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  color: #bdc4cb;
`;

const InfoContainer = styled.article`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  text-align: start;
  gap: 5px;

  position: relative;

  & > h4 {
    margin: 0.5rem 0;

    font-size: 16px;
    font-weight: bold;
  }

  & > span {
    color: #bdc4cb;
  }
`;

export default Review;
