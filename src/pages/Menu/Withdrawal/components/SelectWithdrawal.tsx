import { BackIcon, CheckIcon } from '@assets/index';
import Button from '@components/Button';
import Text from '@components/Text';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface SelectWithdrawalProps {
  setIsWithdrawal: Dispatch<SetStateAction<boolean>>;
}

const SelectWithdrawal = ({ setIsWithdrawal }: SelectWithdrawalProps) => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu');
  };

  const selectWithdrawal = () => {
    setIsWithdrawal(true);
  };

  return (
    <>
      <Header>
        <BackIcon onClick={goToMenu} />
        <Image />
        <Text fontStyle="bold" size="3xl">
          주차의 상상은 현실이 된다를 탈퇴하시나요?
        </Text>
      </Header>
      <ContentContainer>
        <DescriptionContainer>
          <Text fontStyle="semi-bold" size="lg">
            계정을 유지하면 이런 혜택이 남아있어요!
          </Text>
          <Description>
            <CheckIcon />
            <Text>원하는 조건대로 편리하게 목적지까지 갈 수 있어요.</Text>
          </Description>
          <Description>
            <CheckIcon />
            <Text>다양한 이벤트와 혜택으로 저렴하게 주차장을 사용할 수 있어요.</Text>
          </Description>
        </DescriptionContainer>
        <CautionContainer>
          <Text fontStyle="semi-bold" size="lg">
            그래도 떠나시겠어요?
          </Text>
          <Text color="red">
            탈퇴 시 현재 보유중인 쿠폰, 즐겨찾기 등은 즉시 소멸되어 복구할 수 없습니다.
          </Text>
        </CautionContainer>
      </ContentContainer>
      <ButtonContainer>
        <Button color="secondary" onClick={goToMenu}>
          <Text color="white" size="xl" fontStyle="bold">
            아니요, 더 사용할게요.
          </Text>
        </Button>
        <Button color="primary" onClick={selectWithdrawal}>
          <Text size="xl" fontStyle="bold">
            네, 탈퇴할래요.
          </Text>
        </Button>
      </ButtonContainer>
    </>
  );
};

const Header = styled.header`
  display: flex;
  padding-bottom: 55px;
  flex-direction: column;

  border-bottom: 2px solid #f6f6f6;
  gap: 30px;

  & > :nth-child(2) {
    margin: 0 auto;
  }
`;

const Image = styled.div`
  width: 100px;
  height: 100px;

  background-color: ${({ theme }) => theme.gray};
  border-radius: 50%;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 80px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;

  & > p {
    margin-bottom: 20px;
  }
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  gap: 15px;

  svg {
    width: 12px;
    min-width: 12px;
  }
`;

const CautionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default SelectWithdrawal;
