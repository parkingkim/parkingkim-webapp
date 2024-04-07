import { ZoomInIcon, ZoomOutIcon } from '@assets/index';
import styled from 'styled-components';

interface ZoomButtonsProps {
  mapInstance: any;
}

const ZoomButtons = ({ mapInstance }: ZoomButtonsProps) => {
  return (
    <ZoomButtonContainer>
      <button onClick={() => mapInstance.zoomIn()}>
        <ZoomInIcon style={{ width: '14px', height: '14px' }} />
      </button>
      <button onClick={() => mapInstance.zoomOut()}>
        <ZoomOutIcon style={{ width: '14px', height: '14px' }} />
      </button>
    </ZoomButtonContainer>
  );
};

const ZoomButtonContainer = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;

  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);

  & > :first-child {
    display: flex;
    padding: 11.5px;
    justify-content: center;
    align-items: center;

    background-color: #f5f5f5;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #d5d5d5;
  }

  & > :last-child {
    display: flex;
    padding: 12px 10px;
    justify-content: center;
    align-items: center;

    background-color: #f5f5f5;
    border-radius: 0 0 10px 10px;
  }
`;

export default ZoomButtons;
