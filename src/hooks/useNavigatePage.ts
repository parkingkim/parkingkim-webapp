import { useNavigate } from 'react-router-dom';

const useNavigatePage = () => {
  const navigate = useNavigate();

  return (url: string) => () => {
    navigate(url);
  };
};

export default useNavigatePage;
