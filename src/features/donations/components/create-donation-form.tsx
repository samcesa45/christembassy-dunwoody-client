'use client';
import { Form, Input, Select } from '@/ui/form';
import React from 'react';
import {
  createDonationInput,
  createDonationInputSchema,
  useCreateDonation,
} from '../api/create';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';
import { formatErrors } from '@/lib/utils';
import { categoryTypes, currencies } from '@/constants';
import { Button } from '@/ui/buttons/button';
import Link from 'next/link';

export default function CreateDonationForm() {
  const createDonation = useCreateDonation();
  let formReset: UseFormReturn<createDonationInput>['reset'];

  const handleSubmit = (values: createDonationInput) => {
    console.log(values);
    createDonation.mutate(
      { data: values },
      {
        onSuccess: (data: any) => {
          toast.success('Successfully created donation');
          if (formReset) {
            formReset();
          }
          if (data?.authorizationUrl) {
            window.location.href = data.authorizationUrl;
          }
        },
        onError: (error: any) => {
          const formatError = formatErrors(error);
          toast.error(formatError);
        },
      },
    );
  };
  return (
    <div className="space-y-10 p-4 mt-5 md:p-10 bg-white lg:max-w-[50%] w-full mx-auto shadow-[rgba(0_0_0_0.3)0px_2px_2px]">
      <Form
        onSubmit={handleSubmit}
        schema={createDonationInputSchema}
        options={{
          defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            amount: 0,
            currency: '',
            category: '',
          },
        }}
      >
        {({ register, formState, reset }) => {
          formReset = reset;
          return (
            <>
              <div className="grid grid-cols-1">
                <Input
                  type="text"
                  label=""
                  placeholder="Enter Full Name"
                  error={formState.errors['name']}
                  registration={register('name')}
                  className="px-3 "
                />
                <Input
                  type="email"
                  label=""
                  placeholder="Email Address"
                  error={formState.errors['email']}
                  registration={register('email')}
                  className="px-3 "
                />
                <Input
                  type="number"
                  label=""
                  placeholder="Phone Number"
                  error={formState.errors['phoneNumber']}
                  registration={register('phoneNumber')}
                  className="px-3 "
                />
                <Input
                  type="number"
                  label=""
                  placeholder="Amount"
                  error={formState.errors['amount']}
                  registration={register('amount', { valueAsNumber: true })}
                  className="px-3 "
                />
                <Select
                  label="Select Your Currency"
                  error={formState.errors['currency']}
                  registration={register('currency')}
                  options={currencies.map((item) => ({
                    label: item.name,
                    value: item.code,
                  }))}
                />
                <Select
                  label="Select Your Category"
                  error={formState.errors['category']}
                  registration={register('category')}
                  // placeholder="Select your currency"
                  options={categoryTypes.map((item) => ({
                    label: item.label,
                    value: item.value,
                  }))}
                />
              </div>
              <Button
                isLoading={createDonation.isPending}
                className="bg-navyblue font-bold font-poppins text-white rounded-md"
              >
                Make Giving
              </Button>
              <div>
                <Link
                  href="/"
                  className="hover:text-navyblue underline text-sm"
                >
                  Privacy Policy
                </Link>
                <p className="text-sm font font-inter">
                  We keep your personal information private and secure. When you
                  make a payment through our site, you provide your name,
                  contact information, payment information, and additional
                  information related to your transaction. We use this
                  information to process your payment and to ensure your payment
                  is correctly credited to your account.
                </p>
              </div>
            </>
          );
        }}
      </Form>
    </div>
  );
}
