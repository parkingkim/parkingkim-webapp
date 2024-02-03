import styled from 'styled-components';
import Badge, { BadgeProps } from './Badge';
import { PictureIcon, StarFilledIcon, StarIcon } from '@assets/index';

interface CardProps extends BadgeProps {
  title: string;
  imgUrl?: string;
  isFavorite: boolean;
}

const ParkingLotCard = ({ title, imgUrl, price, ETA, isPublic, isFavorite }: CardProps) => {
  return (
    <CardContainer>
      <CardInfoContainer>
        <CardThumbnail>
          {imgUrl ? <img src={imgUrl} alt={imgUrl} /> : <PictureIcon />}
        </CardThumbnail>
        <CardInfoWrapper>
          <Title>{title}</Title>
          <Badge price={price} ETA={ETA} isPublic={isPublic} />
        </CardInfoWrapper>
      </CardInfoContainer>
      {isFavorite ? <StarFilledIcon /> : <StarIcon />}
    </CardContainer>
  );
};

const CardContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-width: 375px;
  background: rgba(217, 217, 217, 0.23);
  padding: 20px 14px;
`;

const CardThumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 104px;
  border-radius: 10px;
  background: #d9d9d9;
`;

const Title = styled.h2`
  color: #120924;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
  padding: 0;
  margin: 0 0 12px 0;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding: 0;
`;

const CardInfoContainer = styled.div`
  display: flex;
`;

export default ParkingLotCard;
