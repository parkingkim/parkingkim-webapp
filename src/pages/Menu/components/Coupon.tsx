import Text from '@components/Text';
import styled from 'styled-components';

interface CouponProps {
  discountRate: number;
  discountName: string;
  expirationDate: string;
}

const Coupon = ({ discountRate, discountName, expirationDate }: CouponProps) => {
  return (
    <CouponsContainer>
      <Text fontStyle="semi-bold" size="xl">
        {discountRate}%
      </Text>
      <Text fontStyle="md" size="lg">
        {discountName} 할인
      </Text>
      <Text size="xs" color="gray">
        사용기간: {expirationDate}까지
      </Text>
    </CouponsContainer>
  );
};

const CouponsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: calc(100% - 80px);
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px rgba(189, 196, 203, 0.5);
  gap: 5px;
  & > :first-child {
    margin-bottom: 10px;
  }
`;

export default Coupon;
