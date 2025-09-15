import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export const createDonationInputSchema = z.object({
  name: z.string().min(3, 'Full Name is required'),
  email: z.email({ error: 'Email is required' }),
  phoneNumber: z.string().min(10, 'phone is required'),
  amount: z.number({ error: 'Amount is required' }),
  currency: z.string({ error: 'This field is required' }),
  category: z.string({ error: 'Category id is a required field' }),
});

export type createDonationInput = z.infer<typeof createDonationInputSchema>;

export const createDonation = ({ data }: { data: createDonationInput }) => {
  return api.post('/donations/initiate', data);
};

type UseCreateDonationOptions = {
  mutationConfig?: MutationConfig<typeof createDonation>;
};

export const useCreateDonation = ({
  mutationConfig,
}: UseCreateDonationOptions = {}) => {
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
    mutationFn: createDonation,
  });
};
