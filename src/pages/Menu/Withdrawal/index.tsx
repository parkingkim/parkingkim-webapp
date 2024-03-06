import { useState } from 'react';
import styled from 'styled-components';
import SelectWithdrawal from './components/SelectWithdrawal';
import ConfirmWithdrawal from './components/ConfirmWithdrawal';

const Withdrawal = () => {
  const [isWithdrawal, setIsWithdrawal] = useState(false);

  const cancelWithdrawal = () => {
    setIsWithdrawal(false);
  };
  // TODO: 회원 탈퇴 api 연동

  return (
    <WithdrawalContainer>
      {isWithdrawal ? (
        <ConfirmWithdrawal cancelWithdrawal={cancelWithdrawal} />
      ) : (
        <SelectWithdrawal setIsWithdrawal={setIsWithdrawal} />
      )}
    </WithdrawalContainer>
  );
};

const WithdrawalContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 20px;
  overflow: scroll;
  flex-direction: column;
`;

export default Withdrawal;
