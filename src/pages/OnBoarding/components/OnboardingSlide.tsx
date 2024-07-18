import { ArrowTopIcon } from '@assets/index';
import type { UseBooleanType } from '@hooks/useBoolean';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Option {
  key: string;
  name: string;
}

interface OnBoardingContent extends Option {
  moreOptions?: Option[];
}

interface SlideProps {
  title: ReactNode;
  isMultipleSelection: boolean;
  contents: OnBoardingContent[];
  booleans: UseBooleanType[];
  moreBooleans?: UseBooleanType[];
  onClick: (index: number) => () => void;
  onClickMore?: (index: number) => () => void;
}

const OnboardingSlide = ({
  title,
  isMultipleSelection,
  contents,
  booleans,
  moreBooleans,
  onClick,
  onClickMore,
}: SlideProps) => {
  return (
    <Container>
      {title}
      <p>{isMultipleSelection && '*중복 선택이 가능합니다.'}</p>
      {contents.map((content, index) => (
        <OptionContainer key={content.key}>
          <OptionButton
            $isSelected={booleans[index].value}
            $isCollapsed={content.moreOptions && booleans[index].value}
            onClick={onClick(index)}
          >
            {content.name}
            {content.moreOptions && <ArrowTopIcon />}
          </OptionButton>
          {moreBooleans && onClickMore && (
            <MoreOptionsContainer $isSelected={booleans[index].value}>
              {content.moreOptions?.map((moreOption, moreIndex) => (
                <MoreOptionButton
                  key={moreOption.key}
                  $isSelected={moreBooleans[moreIndex].value}
                  onClick={onClickMore(moreIndex)}
                >
                  {moreOption.name}
                </MoreOptionButton>
              ))}
            </MoreOptionsContainer>
          )}
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

  & > p {
    padding-left: 2rem;
    margin-bottom: 30px;

    color: ${({ theme }) => theme.gray};
    font-size: 14px;
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
  width: 90%;
  max-height: 200px;
  overflow: scroll;
  flex-direction: column;
  align-items: center;

  border-radius: 0 0 10px 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MoreOptionButton = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  min-height: 50px;
  padding: 0 2rem;

  background-color: ${({ $isSelected }) => ($isSelected ? '#CFF3FF' : ' #f5f5f5')};

  color: #5b5b5b;
  font-size: 20px;
  font-weight: bold;
  text-align: start;

  &:focus {
    outline: 0;
  }
`;

export default OnboardingSlide;
