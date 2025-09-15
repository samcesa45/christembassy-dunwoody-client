import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getDonationByReference = ({ reference }: { reference: string }) => {
  return api.get(`/donations/by-reference/${reference}`);
};

export const getDonationReferenceQueryOptions = (reference: string) => {
  return queryOptions({
    queryKey: ['donations', reference],
    queryFn: () => getDonationByReference({ reference }),
  });
};


type UseDonationReferenceOptions = {
  reference: string;
  queryConfig?: QueryConfig<typeof getDonationReferenceQueryOptions>;
};

export const useDonationByReference = ({ reference, queryConfig }: UseDonationReferenceOptions) => {
  return useQuery({
    ...getDonationReferenceQueryOptions(reference),
    ...queryConfig,
  });
};

