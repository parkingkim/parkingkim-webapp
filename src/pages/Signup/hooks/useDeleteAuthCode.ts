import { api } from '@apis/axios';
import { useMutation } from '@tanstack/react-query';
import Slider from 'react-slick';

interface DeleteAuthCodeBody {
  destination: string;
  authCodePlatform: string;
  authCodeCategory: string;
  authCode: string;
}

const deleteAuthCode = async (body: DeleteAuthCodeBody) => {
  return await api.delete('/authcode', { data: body });
};

const useDeleteAuthCode = (sliderRef: React.RefObject<Slider>) => {
  return useMutation({
    mutationFn: deleteAuthCode,
    onSuccess: () => {
      if (!sliderRef.current) return;
      sliderRef.current.slickNext();
    },
    onError: () => console.log('회원가입에 실패하였습니다.'),
  });
};

export default useDeleteAuthCode;
