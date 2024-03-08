import MyReviewItem from './components/MyReviewItem';
import styled from 'styled-components';
import Text from '@components/Text';
import { mockParkingLots } from '.';
import { useNavigate } from 'react-router-dom';
import { BackIcon } from '@assets/index';

//TODO: 주차장 데이터 관리 어떻게 할 지 논의(전역, api, props)
const MyReviews = () => {
  const navigate = useNavigate();
  const goToMyParkingLots = () => navigate('/my-parking-lots');

  return (
    <>
      <ReviewsHeader>
        <button onClick={goToMyParkingLots}>
          <BackIcon />
        </button>
        <Text fontStyle="bold" size="lg">
          내 리뷰관리
        </Text>
      </ReviewsHeader>
      {mockParkingLots.length ? (
        <ReviewsContainer>
          {mockParkingLots.map((parkingLot) => (
            <MyReviewItem parkingLot={parkingLot} />
          ))}
        </ReviewsContainer>
      ) : (
        <EmptyReview>리뷰가 없습니다.</EmptyReview>
      )}
    </>
  );
};

const ReviewsHeader = styled.header`
  text-align: left;
  padding: 10px 20px 5px;
`;

const ReviewsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: calc(100% - 140px);
  padding: 20px;
  overflow: scroll;
  flex-direction: column;
  gap: 30px;
`;

const EmptyReview = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default MyReviews;
