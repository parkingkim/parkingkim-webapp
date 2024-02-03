import { ArrowTopIcon } from '@assets/index';
import styled from 'styled-components';

export interface OnBoardingContent {
  key: string;
  name: string;
  isSelected: boolean;
  moreOptions?: string[];
}

interface SlideProps {
  title: string;
  isMultipleSelection: boolean;
  contents: OnBoardingContent[];
  onClick: (index: number) => () => void;
}

const Slide = ({ title, isMultipleSelection, contents, onClick }: SlideProps) => {
  return (
    <Container>
      <h1>
        {title}
        {isMultipleSelection && <p>*중복 선택이 가능합니다.</p>}
      </h1>
      {contents.map((content, index) => {
        return (
          <>
            <OptionButton
              key={content.key}
              $isSelected={content.isSelected}
              $isCollapsed={content.moreOptions && content.isSelected}
              onClick={onClick(index)}
            >
              {content.name} 주차장
              {content.moreOptions && <ArrowTopIcon />}
            </OptionButton>
            {content.moreOptions?.map((moreOption) => (
              <MoreOptionButton key={moreOption} $isSelected={content.isSelected}>
                {moreOption}
              </MoreOptionButton>
            ))}
          </>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    padding: 10rem 3rem 5rem;
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
    padding: 0 0 3rem 3rem;
    margin: 0;
    align-self: flex-start;

    position: absolute;
    bottom: -8px;
    left: 0;

    color: ${({ theme }) => theme.gray};
    font-size: 16px;
    font-weight: 500;
    text-align: start;
  }
`;

const OptionButton = styled.button<{ $isSelected: boolean; $isCollapsed?: boolean }>`
  width: 80%;
  height: 63px;
  padding: 0 2rem;
  margin-top: 0.5rem;

  background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.gray : '#f5f5f5')};
  border: 0;
  border-radius: ${({ $isCollapsed }) => ($isCollapsed ? '10px 10px 0 0' : '10px')};

  color: ${({ theme, $isSelected }) => ($isSelected ? '#edeeef' : theme.gray)};
  font-size: 20px;
  font-weight: bold;
  text-align: start;

  &:focus {
    outline: 0;
  }
`;

const MoreOptionButton = styled.button<{ $isSelected: boolean }>`
  width: 80%;
  height: 60px;
  padding: 0 2rem;

  background-color: '#f5f5f5';
  border: 0;
  border-radius: 0;

  color: ${({ theme }) => theme.gray};
  font-size: 20px;
  font-weight: bold;
  text-align: start;
  visibility: ${({ $isSelected }) => ($isSelected ? 'visible' : 'hidden')};

  &:focus {
    outline: 0;
  }
`;

export default Slide;
