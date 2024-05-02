import { StarbucksIcon } from '@assets/index';
import Text from '@components/Text';
import styled from 'styled-components';

interface CouponProps {
  discountAmount: number;
  discountName: string;
  expirationDate: string;
}

const Coupon = ({ discountAmount, discountName, expirationDate }: CouponProps) => {
  return (
    <CouponsContainer>
      <Text fontStyle="semi-bold" size="lg">
        <StarbucksIcon style={{ marginRight: '4px' }} /> 스타벅스 {discountAmount}원
      </Text>

      <Text fontStyle="md" size="md">
        {discountName} 할인
      </Text>
      <Text size="xs" color="gray60">
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
  box-shadow: 2px 2px 6px rgb(0 0 0 / 10%);
  gap: 5px;

  & > :first-child {
    margin-bottom: 10px;
  }
`;

export default Coupon;
