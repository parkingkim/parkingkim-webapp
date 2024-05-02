import { BackIcon, CheckIcon, CheckedRadioIcon, RadioIcon } from '@assets/index';
import Button from '@components/Button';
import Text from '@components/Text';
import { useState } from 'react';
import styled from 'styled-components';

interface ConfirmWithdrawalProps {
  cancelWithdrawal: () => void;
}

const options: string[] = [
  '원하는 기능이나 서비스가 없어서',
  '서비스가 만족스럽지 않아서',
  '당분간 사용할 계획이 없어서',
  '직접 입력',
];

const ConfirmWithdrawal = ({ cancelWithdrawal }: ConfirmWithdrawalProps) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [customInput, setCustomInput] = useState('');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    if (option !== '직접 입력') {
      setCustomInput('');
    }
  };

  return (
    <>
      <BackIcon onClick={cancelWithdrawal} style={{ minHeight: '42px' }} />
      <Header>
        <Text size="3xl" fontStyle="bold">
          저희와 함께해주셔서
          <br />
          감사했어요!
        </Text>

        <Text color="error" fontStyle="semi-bold">
          탈퇴 시 주의사항
        </Text>
        <Description>
          <CheckIcon />
          <Text>파킹킴의 조건설정을 통한 목적지까지의 경로는 더 이상 사용할 수 없습니다.</Text>
        </Description>
        <Description>
          <CheckIcon />
          <Text>쿠폰, 즐겨찾기 등의 이용내역은 즉시 소멸됩니다.</Text>
        </Description>
      </Header>
      <OptionContainer>
        <Text size="lg" fontStyle="semi-bold">
          더 나은 파킹킴이 되기 위해, 탈퇴 사유를 말씀해 주세요.
        </Text>
        <OptionWrapper>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionChange(option)}>
              {selectedOption === option ? <CheckedRadioIcon /> : <RadioIcon />}
              {option !== '직접 입력' ? (
                <Text>{option}</Text>
              ) : (
                <StyledInput
                  placeholder="이유를 입력해주세요"
                  value={customInput}
                  $isCustomInput={customInput !== ''}
                  onChange={(e) => setCustomInput(e.target.value)}
                />
              )}
            </Option>
          ))}
        </OptionWrapper>
        <Button color="gray80">
          <Text fontStyle="bold" color="white" size="xl">
            탈퇴하기
          </Text>
        </Button>
      </OptionContainer>
    </>
  );
};

const Header = styled.header`
  display: flex;
  padding-bottom: 45px;
  flex-direction: column;
  align-items: flex-start;

  border-bottom: 2px solid #f6f6f6;
  gap: 12px;

  & > :first-child {
    width: 230px;
    margin-bottom: 50px;
    text-align: left;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  gap: 15px;

  svg {
    width: 12px;
    min-width: 12px;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  margin-bottom: 80px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & > :first-child {
    text-align: left;
    margin-top: 25px;
  }

  & > :last-child {
    margin-top: 70px;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  cursor: pointer;
`;

const StyledInput = styled.input<{ $isCustomInput: boolean }>`
  width: 300px;
  padding-bottom: 4px;

  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid
    ${({ theme, $isCustomInput }) => ($isCustomInput ? theme.darkGray : theme.gray)};

  font-size: 16px;

  transition: all 0.2s ease-in-out;
`;

export default ConfirmWithdrawal;
