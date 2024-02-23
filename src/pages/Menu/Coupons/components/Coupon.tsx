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
      <Text fontStyle="semi-bold" size="lg">
        {discountRate}%
      </Text>
      <Text fontStyle="md" size="md">
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

  width: calc(100% - 80px);
  padding: 20px 30px;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 10px;
  box-shadow: 0 0 4px 2px rgb(189 196 203 / 50%);
  gap: 5px;

  & > :first-child {
    margin-bottom: 10px;
  }
`;

export default Coupon;
