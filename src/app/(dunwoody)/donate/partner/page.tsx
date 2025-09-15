import CreateDonationForm from '@/features/donations/components/create-donation-form';
import React from 'react';

export default function PartnerPage() {
  return (
    <main className=" px-4 min-h-screen py-10 md:py-14">
      <div className="flex flex-col">
        {/* title */}
        <h2 className="text-[#1E3A8A]  text-center mx-auto  font-merriweather font-bold text-[1.8rem] sm:text-[2.63rem] sm:leading-17.5">
          Make Giving Here
        </h2>
        {/* title */}
        {/* form */}
        <CreateDonationForm />
        {/* form */}
      </div>
    </main>
  );
}
