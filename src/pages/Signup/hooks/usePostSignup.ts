import { api } from '@apis/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface PostSignupBody {
  name: string;
  email: string;
  password: string;
}

const postSignup = async (body: PostSignupBody) => {
  return await api.post('/signup', body);
};

const usePostSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => navigate('/onboarding/start'),
    onError: () => console.log('회원가입에 실패하였습니다.'),
  });
};

export default usePostSignup;
