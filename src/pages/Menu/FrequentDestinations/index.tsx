import { BackIcon, CompanyIcon, HomeIcon, LocationIcon, RightArrowIcon } from '@assets/index';
import { HeadContainer } from '../Profile';
import { useNavigate } from 'react-router-dom';
import Text from '@components/Text';
import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';
import { ThickBar } from '@pages/MyParkingLots';
import FrequentSearch from './components/FrequentSearch';
import useAddressStore from '@store/addressStore';

type FreqDestination = 'home' | 'company';

const FrequentDestinations = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<FreqDestination>('home');
  const [isSearchAddress, setIsSearchAddress] = useState(false);
  const {
    curAddress,
    homeAddress,
    detailHomeAddress,
    companyAddress,
    detailCompanyAddress,
    setHomeAddress,
    setCompanyAddress,
    setDetailHomeAddress,
    setDetailCompanyAddress,
  } = useAddressStore();

  const goBack = () => {
    navigate('/menu');
  };

  const changeTab = (tab: FreqDestination) => () => {
    setSelectedTab(tab);
  };

  const handleSetAddress = () => {
    selectedTab === 'home'
      ? setHomeAddress(curAddress.roadAddr)
      : setCompanyAddress(curAddress.roadAddr);
  };

  const handleInputDetailAddress = (e: ChangeEvent<HTMLInputElement>) => {
    selectedTab === 'home'
      ? setDetailHomeAddress(e.target.value)
      : setDetailCompanyAddress(e.target.value);
  };

  /** TODO: 집/회사 위치 조회 api 연동 */
  /** 집/회사 위치를 어떤 식으로 가져올지 정해지면 추가 작업 */

  if (isSearchAddress)
    return <FrequentSearch selectedTab={selectedTab} goBack={() => setIsSearchAddress(false)} />;

  return (
    <>
      <HeadContainer>
        <BackIcon onClick={goBack} />
        <Text fontStyle="bold" size="xl">
          집 / 회사 관리
        </Text>
        <Text size="sm">집/회사 위치를 관리해보세요.</Text>
      </HeadContainer>
      <ThickBar />
      <DestinationContainer>
        <DestinationTabContainer>
          <DestinationTab $isSelected={selectedTab === 'home'} onClick={changeTab('home')}>
            <Text fontStyle="semi-bold" size="lg">
              집
              <HomeIcon style={{ marginLeft: '4px' }} />
            </Text>
            <Text style={{ textAlign: 'left' }}>{`${homeAddress} ${detailHomeAddress}`}</Text>
          </DestinationTab>
          <DestinationTab $isSelected={selectedTab === 'company'} onClick={changeTab('company')}>
            <Text fontStyle="semi-bold" size="lg">
              회사
              <CompanyIcon style={{ marginLeft: '4px' }} />
            </Text>
            <Text style={{ textAlign: 'left' }}>{`${companyAddress} ${detailCompanyAddress}`}</Text>
          </DestinationTab>
        </DestinationTabContainer>
        <AddressContainer>
          <AddressHeader>
            <Text fontStyle="semi-bold" size="lg">
              장소 상세
            </Text>
            <LocationButton onClick={handleSetAddress}>
              <Text color="gray80" size="sm">
                현재 위치로 설정
              </Text>
              <LocationIcon />
            </LocationButton>
          </AddressHeader>
          <AddressInputWrapper>
            <AddressInput
              placeholder="장소 주소 검색"
              value={selectedTab === 'home' ? homeAddress : companyAddress}
            />
            <RightArrowIcon
              onClick={() => setIsSearchAddress(true)}
              style={{ cursor: 'pointer' }}
            />
          </AddressInputWrapper>
          <AddressInput
            placeholder="상세 주소 (예시: 1층, 동/호수)"
            onChange={handleInputDetailAddress}
            value={selectedTab === 'home' ? detailHomeAddress : detailCompanyAddress}
          />
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
  box-shadow: 2px 2px 4px rgb(0 0 0 / 15%);

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
  padding: 16px 20px;
  flex-direction: column;

  background: ${({ $isSelected, theme }) => ($isSelected ? theme.blue20 : 'none')};
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

export const LocationButton = styled.button`
  display: flex;
  padding: 0;
  flex-direction: row;
  align-self: flex-end;

  background: none;
  gap: 12px;
  cursor: pointer;
`;

const AddressInput = styled.input`
  padding: 15px;

  background: #f5f5f5;
  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.gray80};

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.gray60};
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
