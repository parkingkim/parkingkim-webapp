import { api } from '@apis/axios';
import { UseBoolean } from '@hooks/useBoolean';
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

const useDeleteAuthCode = (sliderRef: React.RefObject<Slider>, isAuthCodeWrong: UseBoolean) => {
  return useMutation({
    mutationFn: deleteAuthCode,
    onSuccess: () => {
      if (!sliderRef.current) return;
      sliderRef.current.slickNext();
    },
    onError: () => {
      isAuthCodeWrong.on();
    },
  });
};

export default useDeleteAuthCode;
