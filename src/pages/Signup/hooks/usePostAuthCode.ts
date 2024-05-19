import { api } from '@apis/axios';
import { useMutation } from '@tanstack/react-query';

interface PostAuthCodeBody {
  destination: string;
  authPlatform: string;
  authCodeCategory: string;
}

const postAuthCode = async (body: PostAuthCodeBody) => {
  return await api.post('/authcode', body);
};

const usePostAuthCode = () => {
  return useMutation({
    mutationFn: postAuthCode,
  });
};

export default usePostAuthCode;
