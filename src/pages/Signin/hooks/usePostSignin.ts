import { api } from '@apis/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface PostSigninBody {
  email: string;
  password: string;
}

const postSignin = async (body: PostSigninBody) => {
  return await api.post('/signin', body);
};

const usePostSignin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postSignin,
    onSuccess: () => navigate('/'),
  });
};

export default usePostSignin;
