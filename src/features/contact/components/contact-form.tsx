'use client';
import React from 'react';
import {
  contactFormSchema,
  createContactInput,
  useCreateContact,
} from '../api/create';
import { Form, Input } from '@/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';
import { formatErrors } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Button } from '@/ui/buttons/button';

export default function ContactForm() {
  const createContact = useCreateContact();
  let formReset: UseFormReturn<createContactInput>['reset'];

  const handleSubmit = (values: createContactInput) => {
    createContact.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast.success('Form submitted successfully');
          if (formReset) {
            formReset();
          }
        },
        onError: (error: any) => {
          const formError = formatErrors(error);
          toast.error(formError);
        },
      },
    );
  };
  return (
    <div className="bg-white p-[35px_25px_35px_25px]  md:p-[70px_70px_80px_70px] mx-auto max-w-[700px]">
      <Form
        className=""
        schema={contactFormSchema}
        onSubmit={handleSubmit}
        options={{
          defaultValues: {
            name: '',
            phone: '',
            email: '',
            subject: '',
          },
        }}
      >
        {({ register, formState, reset }) => {
          formReset = reset;
          return (
            <>
              <div className="">
                <div className="mb-8">
                  <Input
                    icon="User"
                    type="text"
                    label=""
                    placeholder="Name"
                    error={formState.errors['name']}
                    registration={register('name')}
                    className="border-0 border-b-1 border-b-light-gray pl-8 placeholder:text-light-gray focus-visible:placeholder:text-black/80 focus-visible:ring-0 focus-visible:border-b-black/80 hover:border-b-black hover:transition-colors hover:duration-300 rounded-none shadow-[0_15px_15px_-14px_rgb(0_0_0_/_.025)]"
                  />
                </div>
                <div className="mb-8">
                  <Input
                    icon="PhoneCall"
                    type="text"
                    label=""
                    placeholder="Phone"
                    error={formState.errors['phone']}
                    registration={register('phone')}
                    className="border-0 border-b-1 border-b-light-gray pl-8 placeholder:text-light-gray focus-visible:placeholder:text-black/80 focus-visible:ring-0 focus-visible:border-b-black/80 hover:border-b-black hover:transition-colors hover:duration-300 rounded-none shadow-[0_15px_15px_-14px_rgb(0_0_0_/_.025)]"
                  />
                </div>
                <div className="mb-8">
                  <Input
                    icon="Mail"
                    type="email"
                    label=""
                    placeholder="Email Address"
                    error={formState.errors['email']}
                    registration={register('email')}
                    className="border-0 border-b-1 border-b-light-gray pl-8 placeholder:text-light-gray focus-visible:placeholder:text-black/80 focus-visible:ring-0 focus-visible:border-b-black/80 hover:border-b-black hover:transition-colors hover:duration-300 rounded-none shadow-[0_15px_15px_-14px_rgb(0_0_0_/_.025)]"
                  />
                </div>
                <div className="mb-8">
                  <Input
                    icon="Info"
                    type="text"
                    label=""
                    placeholder="Subject"
                    error={formState.errors['subject']}
                    registration={register('subject')}
                    className="border-0 border-b-1 border-b-light-gray pl-8 placeholder:text-light-gray focus-visible:placeholder:text-black/80 focus-visible:ring-0 focus-visible:border-b-black/80 hover:border-b-black hover:transition-colors hover:duration-300 rounded-none shadow-[0_15px_15px_-14px_rgb(0_0_0_/_.025)]"
                  />
                </div>
              </div>
              <Button
                icon={
                  <Mail className="absolute ml-2 left-0 top-2 translate-y-1/2" />
                }
                className="relative uppercase flex items-center justify-center px-10 h-16! mt-8 bg-navyblue/90 hover:bg-navyblue font-kumbhSans  text-white border-none"
              >
                Get In Touch
              </Button>
            </>
          );
        }}
      </Form>
    </div>
  );
}
