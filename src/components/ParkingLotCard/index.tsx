import styled from 'styled-components';
import Badge, { BadgeProps } from './Badge';
import { PictureIcon, StarFilledIcon, StarIcon } from '@assets/index';

interface CardProps extends BadgeProps {
  title: string;
  imgUrl?: string;
  isFavorite: boolean;
}

const ParkingLotCard = ({
  title,
  imgUrl,
  price,
  walkingTime,
  parkingType,
  isFavorite,
}: CardProps) => {
  return (
    <CardContainer>
      <CardInfoContainer>
        <CardThumbnail>
          {imgUrl ? (
            <img src={imgUrl} alt={imgUrl} style={{ borderRadius: '10px' }} />
          ) : (
            <PictureIcon />
          )}
        </CardThumbnail>
        <CardInfoWrapper>
          <Title>{title}</Title>
          <Badge price={price} walkingTime={walkingTime} parkingType={parkingType} />
        </CardInfoWrapper>
      </CardInfoContainer>
      {isFavorite ? <StarFilledIcon /> : <StarIcon />}
    </CardContainer>
  );
};

const CardContainer = styled.article`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 14px;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 10px;
  box-shadow: 4px 4px 10px 1px rgb(0 0 0 / 25%);
  cursor: pointer;
`;

const CardThumbnail = styled.div`
  display: flex;
  width: 104px;
  height: 104px;
  justify-content: center;
  align-items: center;

  background: #d9d9d9;
  border-radius: 10px;
`;

const Title = styled.h2`
  padding: 0;
  margin: 0 0 12px;

  color: #120924;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  padding: 0;
  margin-left: 30px;
  flex-direction: column;
`;

const CardInfoContainer = styled.div`
  display: flex;
`;

export default ParkingLotCard;
