import { ArrowTopIcon } from '@assets/index';
import type { UseBoolean } from '@hooks/useBoolean';
import styled from 'styled-components';

export interface OnBoardingContent {
  key: string;
  name: string;
  moreOptions?: string[];
}

interface SlideProps {
  title: string;
  isMultipleSelection: boolean;
  contents: OnBoardingContent[];
  booleans: UseBoolean[];
  onClick: (index: number) => () => void;
}

const OnboardingSlide = ({
  title,
  isMultipleSelection,
  contents,
  booleans,
  onClick,
}: SlideProps) => {
  return (
    <Container>
      <h1>
        {title}
        {isMultipleSelection && <p>*중복 선택이 가능합니다.</p>}
      </h1>
      {contents.map((content, index) => (
        <OptionContainer key={content.key}>
          <OptionButton
            $isSelected={booleans[index].value}
            $isCollapsed={content.moreOptions && booleans[index].value}
            onClick={onClick(index)}
          >
            {content.name} {isMultipleSelection && '주차장'}
            {content.moreOptions && <ArrowTopIcon />}
          </OptionButton>
          <MoreOptionsContainer $isSelected={booleans[index].value}>
            {content.moreOptions?.map((moreOption) => (
              <MoreOptionButton key={moreOption} $isSelected={booleans[index].value}>
                {moreOption}
              </MoreOptionButton>
            ))}
          </MoreOptionsContainer>
        </OptionContainer>
      ))}
    </Container>
  );
};

const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  & > h1 {
    padding: 150px 0 35px 2rem;
    margin-bottom: 5px;
    align-self: flex-start;

    position: relative;

    font-size: 24px;
    font-weight: 800;
    line-height: 30px;
    text-align: start;
    white-space: pre-wrap;
  }

  & > h1 > p {
    color: ${({ theme }) => theme.gray};
    font-size: 16px;
    font-weight: 500;
    text-align: start;
  }
`;

const OptionButton = styled.button<{ $isSelected: boolean; $isCollapsed?: boolean }>`
  display: flex;
  box-sizing: border-box;
  width: 90%;
  height: 63px;
  padding: 0 2rem;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ $isSelected }) => ($isSelected ? '#0DC5FF' : '#eaeaea')};
  border: 0;
  border-radius: ${({ $isCollapsed }) => ($isCollapsed ? '10px 10px 0 0' : '10px')};

  color: ${({ $isSelected }) => ($isSelected ? 'white' : '#848484')};
  font-size: 20px;
  font-weight: bold;
  text-align: start;

  &:focus {
    outline: 0;
  }

  & > svg {
    transform: ${({ $isSelected }) => !$isSelected && 'rotate(180deg)'};

    & > path {
      stroke: ${({ theme, $isSelected }) => ($isSelected ? 'white' : theme.gray)};
    }
  }
`;

const MoreOptionsContainer = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected }) => ($isSelected ? 'flex' : 'none')};
  width: 100%;
  max-height: 150px;
  overflow: scroll;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MoreOptionButton = styled.button<{ $isSelected: boolean }>`
  width: 90%;
  min-height: 58px;
  padding: 0 2rem;

  background-color: ${({ $isSelected }) => ($isSelected ? '#CFF3FF' : ' #f5f5f5')};

  color: #5b5b5b;
  font-size: 20px;
  font-weight: bold;
  text-align: start;

  &:focus {
    outline: 0;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export default OnboardingSlide;
