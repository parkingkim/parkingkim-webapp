import { BlueCheckIcon, CheckIcon } from '@assets/index';
import Button from '@components/Button';
import { UseBoolean } from '@hooks/useBoolean';
import styled from 'styled-components';

interface AgreementProps {
  서비스동의: UseBoolean;
  본인확인동의: UseBoolean;
  마케팅동의: UseBoolean;
  next: () => void;
}

const Agreement = ({ 서비스동의, 본인확인동의, 마케팅동의, next }: AgreementProps) => {
  const agreeAll = () => {
    if (서비스동의.value && 본인확인동의.value && 마케팅동의.value) {
      서비스동의.off();
      본인확인동의.off();
      마케팅동의.off();
      return;
    }
    서비스동의.on();
    본인확인동의.on();
    마케팅동의.on();
  };
  return (
    <Wrapper>
      <h1>
        파킹킴을 사용하기 위해 <br />
        약관에 동의해주세요!
      </h1>
      <div>
        <AgreeButton
          isAgreed={서비스동의.value && 본인확인동의.value && 마케팅동의.value}
          onClick={agreeAll}
        >
          {서비스동의.value && 본인확인동의.value && 마케팅동의.value ? (
            <BlueCheckIcon />
          ) : (
            <CheckIcon />
          )}
          모두 동의합니다
        </AgreeButton>
        <AgreeButton isAgreed={서비스동의.value} onClick={서비스동의.toggle}>
          {서비스동의.value ? <BlueCheckIcon /> : <CheckIcon />}
          서비스 관련 이용 약관 (필수)
        </AgreeButton>
        <AgreeButton isAgreed={본인확인동의.value} onClick={본인확인동의.toggle}>
          {본인확인동의.value ? <BlueCheckIcon /> : <CheckIcon />}
          본인확인 서비스 관련 이용 약관 (필수)
        </AgreeButton>
        <AgreeButton isAgreed={마케팅동의.value} onClick={마케팅동의.toggle}>
          {마케팅동의.value ? <BlueCheckIcon /> : <CheckIcon />}
          마케팅 정보 알림 및 수신 동의 (선택)
        </AgreeButton>
      </div>
      <Button width="100%" onClick={next} disabled={!(서비스동의.value && 본인확인동의.value)}>
        다음
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  height: auto;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;

  & > h1 {
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

const AgreeButton = styled.button<{ isAgreed: boolean }>`
  display: flex;
  width: 100%;
  padding: 0;
  margin-bottom: 13px;
  justify-content: flex-start;
  align-items: center;

  color: ${({ isAgreed }) => (isAgreed ? 'black' : '#ababab')};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -1px;
  gap: 10px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export default Agreement;
