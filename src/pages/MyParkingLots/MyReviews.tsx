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
  padding: 10px 20px 5px 20px;
`;

const ReviewsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: calc(100% - 140px);
  flex-direction: column;
  padding: 20px;
  gap: 30px;
  overflow: scroll;
`;

const EmptyReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default MyReviews;
