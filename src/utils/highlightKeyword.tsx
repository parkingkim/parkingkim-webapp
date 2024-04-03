import styled from 'styled-components';

const highlightKeyword = (val: string, keyword: string) =>
  val
    .split(new RegExp(`(${keyword})`, 'gi'))
    .map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <HighlightText key={index}>{part}</HighlightText>
      ) : (
        part
      ),
    );

const HighlightText = styled.p`
  color: ${({ theme }) => theme.blue100};
`;
export default highlightKeyword;
