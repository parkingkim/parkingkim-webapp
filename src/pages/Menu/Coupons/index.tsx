import { BackIcon } from '@assets/index';
import Text from '@components/Text';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HeadContainer } from '../Profile';
import { Bar } from '..';
import { CommonTextStyle } from '@style/CommonTextStyle';
import Coupon from './components/Coupon';
import { ThickBar } from '@pages/MyParkingLots';

const coupons = [
  {
    discountAmount: 1000,
    discountName: '설 이벤트 당첨 쿠폰',
    expirationDate: '2021.12.31',
  },
  {
    discountAmount: 2000,
    discountName: '어린이날 이벤트 당첨 쿠폰',
    expirationDate: '2021.12.31',
  },
];

const Coupons = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/menu');
  };

  // TODO: 쿠폰 조회 api 연동

  return (
    <>
      <HeadContainer>
        <BackIcon onClick={goBack} />
        <Text fontStyle="bold" size="xl">
          쿠폰함
        </Text>
        <Text fontStyle="md" size="sm">
          내 쿠폰을 관리해보세요!
        </Text>
      </HeadContainer>
      <ThickBar />
      <CouponInputWrapper>
        <CouponNumberInput placeholder="쿠폰 번호 입력" />
        <CouponInputButton>
          <Text size="md" color="gray">
            등록
          </Text>
        </CouponInputButton>
      </CouponInputWrapper>
      <Bar />
      <CouponsContainer>
        <Text fontStyle="semi-bold" size="lg">
          내 쿠폰
        </Text>
        <CouponsWrapper>
          {/** 이후 쿠폰 조회 api 명세 나오면 추가 */}
          {coupons.length ? (
            coupons.map((coupon, idx) => <Coupon key={idx} {...coupon} />)
          ) : (
            <Text fontStyle="md" size="md" color="gray60" style={{ marginTop: '100px' }}>
              현재 사용할 수 있는 쿠폰이 없어요.
            </Text>
          )}
        </CouponsWrapper>
      </CouponsContainer>
    </>
  );
};

const CouponInputWrapper = styled.div`
  display: flex;
  padding: 25px 20px;
  flex-direction: row;
  gap: 20px;
`;

const CouponNumberInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 0 15px;

  background: #f5f5f5;
  border: none;
  border-radius: 9px;

  font-size: 16px;
  font-weight: 600;
  outline: none;

  ${CommonTextStyle}

  &::placeholder {
    color: #b4b4b4;
  }
`;

const CouponInputButton = styled.button`
  display: flex;
  height: 48px;
  min-width: 60px;
  justify-content: center;
  align-items: center;

  background: #f5f5f5;
  border-radius: 10px;
`;

const CouponsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: calc(100vh - 320px);
  padding: 25px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const CouponsWrapper = styled.div`
  display: flex;
  width: 100%;

  padding: 10px 0;
  overflow: scroll;
  flex-direction: column;
  align-items: center;

  gap: 25px;
`;

export default Coupons;
