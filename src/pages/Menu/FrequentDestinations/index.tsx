import { BackIcon, LocationIcon, RightArrowIcon } from '@assets/index';
import { HeadContainer } from '../Profile';
import { useNavigate } from 'react-router-dom';
import Text from '@components/Text';
import { Partition } from '..';
import styled from 'styled-components';
import { useState } from 'react';

type FreqDestination = 'home' | 'company';

const FrequentDestinations = () => {
  const [selectedTab, setSelectedTab] = useState<FreqDestination>('home');
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/menu');
  };

  const changeTab = (tab: FreqDestination) => () => {
    setSelectedTab(tab);
  };

  /** TODO: 집/회사 위치 조회 api 연동 */
  /** 집/회사 위치를 어떤 식으로 가져올지 정해지면 추가 작업 */

  return (
    <>
      <HeadContainer>
        <BackIcon onClick={goBack} />
        <Text fontStyle="bold" size="lg">
          집 / 회사 관리
        </Text>
        <Text size="sm">집/회사 위치를 관리해보세요.</Text>
      </HeadContainer>
      <Partition />
      <DestinationContainer>
        <DestinationTabContainer>
          <DestinationTab $isSelected={selectedTab === 'home'} onClick={changeTab('home')}>
            <Text fontStyle="semi-bold" size="lg">
              집
            </Text>
            <Text>{'집 주소'}</Text>
          </DestinationTab>
          <DestinationTab $isSelected={selectedTab === 'company'} onClick={changeTab('company')}>
            <Text fontStyle="semi-bold" size="lg">
              회사
            </Text>
            <Text>{'회사 주소'}</Text>
          </DestinationTab>
        </DestinationTabContainer>
        <AddressContainer>
          <AddressHeader>
            <Text fontStyle="semi-bold" size="lg">
              장소 상세
            </Text>
            <LocationButton>
              <Text color="btn-gray">위치 설정</Text>
              <LocationIcon />
            </LocationButton>
          </AddressHeader>
          <AddressInputWrapper>
            <AddressInput placeholder="장소 주소 검색" />
            <RightArrowIcon />
          </AddressInputWrapper>
          <AddressInput placeholder="상세 주소 (예시: 1층, 동/호수)" />
        </AddressContainer>
      </DestinationContainer>
    </>
  );
};

const DestinationContainer = styled.div`
  display: flex;
  padding: 30px 20px;
  flex-direction: column;
  gap: 60px;
`;

const DestinationTabContainer = styled.div`
  display: flex;
  flex-direction: row;

  border-radius: 10px;
  box-shadow: 0 0 4px 2px rgb(189 196 203 / 50%);

  & > :first-child {
    border-radius: 10px 0 0 10px;
    border-right: 1px solid #d9d9d9;
  }

  & > :last-child {
    border-radius: 0 10px 10px 0;
  }
`;

const DestinationTab = styled.button<{ $isSelected: boolean }>`
  display: flex;
  width: 50%;
  flex-direction: column;

  background: ${({ $isSelected }) => ($isSelected ? '#f5f5f5' : 'none')};
  gap: 12px;
`;

const AddressContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const AddressHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LocationButton = styled.button`
  display: flex;
  padding: 0;
  flex-direction: row;
  align-items: center;

  background: none;
  gap: 12px;
  cursor: pointer;
`;

const AddressInput = styled.input`
  padding: 15px;

  background: #f5f5f5;
  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.gray};

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

const AddressInputWrapper = styled.div`
  display: flex;

  position: relative;

  & > input {
    width: 100%;
  }

  & > svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;

export default FrequentDestinations;
