import { api } from '@apis/axios';
import useNavigatePage from '@hooks/useNavigatePage';
import { useMutation } from '@tanstack/react-query';

export interface PostSearchConditionBody {
  operationType: string[];
  parkingType: string[];
  feeType: string[];
  payType: string[];
  priority: string;
  hours: number;
}

const postSearchCondition = async (body: PostSearchConditionBody) => {
  return await api.post('/search-condition', body);
};

const usePostSearchCondition = () => {
  const navigate = useNavigatePage();

  return useMutation({
    mutationFn: postSearchCondition,
    onSuccess: () => {
      navigate('/onboarding/confirm');
    },
  });
};

export default usePostSearchCondition;
