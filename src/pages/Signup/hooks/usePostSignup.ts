import { CustomError } from '@/types';
import { api } from '@apis/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
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
  return useMutation<AxiosResponse, CustomError, PostSignupBody, unknown>({
    mutationFn: postSignup,
    onSuccess: () => navigate('/onboarding/start'),
  });
};

export default usePostSignup;
