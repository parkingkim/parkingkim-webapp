import Header from '@components/Header';
import ToggleButton from '@components/ToggleButton';
import useBoolean from '@hooks/useBoolean';
import styled from 'styled-components';
import SelectBox from './components/SelectBox';

const TERMS = ['1시간', '2시간', '3시간', '4시간', '5시간', '6시간', '7시간'];

const ParkingLotFilterCondition = () => {
  const outside = useBoolean();
  const road = useBoolean();
  const mechanical = useBoolean();
  const publicParkingLot = useBoolean();
  const privateParkingLot = useBoolean();
  const charged = useBoolean();
  const free = useBoolean();
  const account = useBoolean();
  const cash = useBoolean();
  const card = useBoolean();
  const distance = useBoolean();
  const price = useBoolean();
  const recommend = useBoolean();
  const electric = useBoolean();
  const parkingTerms = useBoolean();
  const day = useBoolean();
  const DC차데모 = useBoolean();
  const 완속 = useBoolean();
  const DC콤보 = useBoolean();
  const AC3상 = useBoolean();

  return (
    <Wrapper>
      <Header />
      <Title>
        <h1>주차장 조건설정</h1>
        <p>선호하는 주차장 유형을 알려주세요!</p>
      </Title>
      <Line $height="7px" />
      <ConditionList>
        <ConditionContainer>
          <h2>주차장 유형</h2>
          <p>원하시는 주차장을 선택해주세요!</p>
          <FilterContainer>
            <FilterButton $width="81px" $checked={outside.value} onClick={outside.toggle}>
              노외
            </FilterButton>
            <FilterButton $width="81px" $checked={road.value} onClick={road.toggle}>
              노상
            </FilterButton>
            <FilterButton $width="81px" $checked={mechanical.value} onClick={mechanical.toggle}>
              기계식
            </FilterButton>
          </FilterContainer>
        </ConditionContainer>
        <Line $height="2px" />
        <ConditionContainer>
          <h2>주차장 옵션</h2>
          <p>원하시는 주차장을 선택해주세요!</p>
          <FilterContainer>
            <FilterButton
              $width="155px"
              $checked={publicParkingLot.value}
              onClick={publicParkingLot.toggle}
            >
              공영
            </FilterButton>
            <FilterButton
              $width="155px"
              $checked={privateParkingLot.value}
              onClick={privateParkingLot.toggle}
            >
              민영
            </FilterButton>
          </FilterContainer>
        </ConditionContainer>
        <Line $height="2px" />
        <ConditionContainer>
          <h2>주차장 결제 유형</h2>
          <p>원하시는 주차장 결제 유형을 골라주세요!</p>
          <FilterContainer>
            <FilterButton $width="155px" $checked={charged.value} onClick={charged.toggle}>
              유료
            </FilterButton>
            <FilterButton $width="155px" $checked={free.value} onClick={free.toggle}>
              무료
            </FilterButton>
          </FilterContainer>
        </ConditionContainer>
        <Line $height="2px" />
        <ConditionContainer>
          <h2>결제 방식</h2>
          <p>유료를 선택하셨다면, 선호하는 결제방식을 골라주세요!</p>
          <FilterContainer>
            <FilterButton $width="81px" $checked={account.value} onClick={account.toggle}>
              계좌
            </FilterButton>
            <FilterButton $width="81px" $checked={cash.value} onClick={cash.toggle}>
              현금
            </FilterButton>
            <FilterButton $width="81px" $checked={card.value} onClick={card.toggle}>
              카드
            </FilterButton>
          </FilterContainer>
        </ConditionContainer>
        <Line $height="2px" />
        <ConditionContainer>
          <h2>우선순위 주차장</h2>
          <p>우선 순위로 보고 싶은 주차장을 골라주세요! (중복 선택 불가)</p>
          <FilterContainer>
            <FilterButton $width="81px" $checked={distance.value} onClick={distance.toggle}>
              가까운 순
            </FilterButton>
            <FilterButton $width="81px" $checked={price.value} onClick={price.toggle}>
              가격순
            </FilterButton>
            <FilterButton $width="81px" $checked={recommend.value} onClick={recommend.toggle}>
              추천순
            </FilterButton>
          </FilterContainer>
        </ConditionContainer>
        <Line $height="2px" />
        <ConditionContainer>
          <h2>전기차 충전 여부</h2>
          <p>전기차 충전을 원하신다면 선택해주세요!</p>
          <ElectricCar>
            <h3>전기차 충전</h3>
            <ToggleButton isOn={electric.value} toggle={electric.toggle} />
          </ElectricCar>
          {electric.value && (
            <>
              <ElectricType>충전기 유형 선택</ElectricType>
              <ElectricTypeContainer>
                <FilterButton $width="110px" $checked={DC차데모.value} onClick={DC차데모.toggle}>
                  DC차데모
                </FilterButton>
                <FilterButton $width="81px" $checked={완속.value} onClick={완속.toggle}>
                  완속
                </FilterButton>
                <FilterButton $width="100px" $checked={DC콤보.value} onClick={DC콤보.toggle}>
                  DC콤보
                </FilterButton>
                <FilterButton $width="89px" $checked={AC3상.value} onClick={AC3상.toggle}>
                  AC3상
                </FilterButton>
              </ElectricTypeContainer>
            </>
          )}
        </ConditionContainer>
        <Line $height="2px" />
        <ConditionContainer>
          <h2>이용시간</h2>
          <p>우선 순위로 보고 싶은 주차장을 골라주세요!</p>
          <ParkingTerms>
            <SelectBox
              options={TERMS}
              isCollapsed={parkingTerms.value}
              isSelected={!day.value}
              onClick={parkingTerms.toggle}
            />
            <CheckCircleContainer>
              <CheckCircle type="checkbox" id="day" onChange={day.toggle} checked={day.value} />
              <label>하루</label>
            </CheckCircleContainer>
          </ParkingTerms>
        </ConditionContainer>
        <SaveButton>저장하기</SaveButton>
      </ConditionList>
    </Wrapper>
  );
};

const ElectricType = styled.div`
  font-size: 11px;
  color: #bdc4cb;
  margin-top: 10px;
`;

const ElectricTypeContainer = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 10px;
`;

const SaveButton = styled.button`
  width: 90%;
  padding: 0.6em 1.2em;
  margin-top: 20px;
  margin-bottom: 100px;

  background: #bdc4cb;
  border-radius: 10px;

  color: white;
  font-size: 20px;
  font-weight: 700;
  font-family: inherit;
`;

const ParkingTerms = styled.div`
  margin-top: 20px;
`;

const CheckCircleContainer = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
  gap: 10px;
`;

const CheckCircle = styled.input`
  width: 22px;
  height: 22px;

  border: solid 1px #bdc4cb;
  border-radius: 50%;
  appearance: none;

  &:checked {
    background-color: #d9d9d9;
    background-clip: content-box;
    padding: 3px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  text-align: start;
  padding: 10px 0 20px 20px;

  & > h1 {
    font-size: 20px;
    font-weight: bold;
  }

  & > p {
    margin-top: 10px;
  }
`;

const Line = styled.div<{ $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};

  background-color: #f6f6f6;
`;

const ConditionList = styled.section`
  height: calc(100% - 184px);
  overflow: scroll;
`;

const ConditionContainer = styled.section`
  text-align: start;
  padding: 20px;

  & > h2 {
    font-size: 16px;
    font-weight: 600;
  }

  & > p {
    margin-top: 5px;

    color: #bdc4cb;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  justify-content: space-between;
`;

const FilterButton = styled.button<{ $width: string; $checked?: boolean }>`
  width: ${(props) => props.$width};
  height: 35px;
  padding: 0;

  background-color: ${(props) => (props.$checked ? '#D9D9D9' : 'white')};
  border: solid 1px #bdc4cb;
  border-radius: 20px;

  color: ${(props) => (props.$checked ? 'white' : '#bdc4cb')};
`;

const ElectricCar = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;

  & > h3 {
    font-size: 16px;
    font-weight: 400;
  }
`;

export default ParkingLotFilterCondition;
