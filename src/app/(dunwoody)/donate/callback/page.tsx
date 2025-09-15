'use client';

import { useVerifyDonation } from '@/features/donations/api/verify';
import { formatErrors } from '@/lib/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

export default function CallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const reference = params.get('reference');
  const verifyDonation = useVerifyDonation();

  useEffect(() => {
    if (reference) {
      verifyDonation.mutate(
        { reference },
        {
          onSuccess: (data: any) => {
            //check the status from the API response
            console.log(data);
            if (data.status === 'success') {
              toast.success('Your donation was successful!');
              router.push('/');
            } else {
              router.push('/donate/partner');
            }
          },
          onError: (error: any) => {
            const formatError = formatErrors(error);
            toast.error(formatError);
            router.push('/donate/partner');
          },
        },
      );
    }
  }, [reference, verifyDonation, router]);

  if (verifyDonation.isPending) {
    return <div>Verifying your payment...</div>;
  }
  if (verifyDonation.isError) {
    return <div>Payment verification failed...</div>;
  }

  return <div>Payment successfull</div>;
}
