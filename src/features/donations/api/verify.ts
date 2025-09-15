import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const verfiyDonation = ({ reference }: { reference: string }) => {
  return api.post(`/donations/verify/${reference}`);
};

type UseVerifyDonationOptions = {
  mutationConfig?: MutationConfig<typeof verfiyDonation>;
};

export const useVerifyDonation = ({
  mutationConfig,
}: UseVerifyDonationOptions = {}) => {
  const queryClient = useQueryClient();
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ['donations'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: verfiyDonation,
  });
};
