'use client';

import { useDonationByReference } from '@/features/donations/api/verify';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Spinner } from '@/ui/spinner';


export default function CallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const reference = params.get('reference');
  const getDonationByReference = useDonationByReference({reference} as any);

  useEffect(() => {
    if(getDonationByReference.status === 'success') {
      //wait 3s then go home
      const timer = setTimeout(() => router.push('/'), 3000);
      return () => clearTimeout(timer);
    }

    if(getDonationByReference.status === 'error') {
      const timer = setTimeout(() => router.push('/donate/partner'), 3000);
      return () => clearTimeout(timer);
    }
  }, [getDonationByReference,router]);

  const renderContent = () => {
    if (getDonationByReference.isLoading) {
      return (
        <>
          <Spinner className="h-14 w-14 animate-spin text-navyblue" />
          <h1 className="text-xl font-semibold mt-4">Verifying your payment...</h1>
          <p className="text-gray-500 mt-2">Please hold on while we confirm with Paystack.</p>
        </>
      );
    }

    if (getDonationByReference.isError) {
      return (
        <>
          <XCircle className="h-14 w-14 text-red-500" />
          <h1 className="text-xl font-semibold mt-4">Verification failed</h1>
          <p className="text-gray-500 mt-2">Something went wrong. Please contact support.</p>
        </>
      );
    }

    if (getDonationByReference?.status === 'success') {
      return (
        <>
          <CheckCircle className="h-14 w-14 text-green-500" />
          <h1 className="text-2xl font-bold mt-4">Thank you, for your support</h1>
          <p className="text-gray-600 mt-2">
            Your donation of 
            was successful.
          </p>
          <p className="text-sm text-gray-400 mt-3">Redirecting you to the homepage...</p>
        </>
      );
    }

    if (getDonationByReference?.isError) {
      return (
        <>
          <XCircle className="h-14 w-14 text-red-500" />
          <h1 className="text-2xl font-bold mt-4">Payment Failed</h1>
          <p className="text-gray-600 mt-2">{`We couldn't process your donation. Please try again.`}</p>
          <p className="text-sm text-gray-400 mt-3">Redirecting you back...</p>
        </>
      );
    }

    return (
      <>
        <Spinner />
        <h1 className="text-xl font-semibold mt-4">Processing...</h1>
        <p className="text-gray-500 mt-2">{`We're waiting for confirmation.`}</p>
      </>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center"
      >
        {renderContent()}
      </motion.div>
    </div>
  );
}