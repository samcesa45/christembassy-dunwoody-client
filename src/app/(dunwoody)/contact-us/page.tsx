import ContactForm from '@/features/contact/components/contact-form';
import InneHero from '@/ui/inner-hero';
import MapWithMarkers from '@/ui/map-markers';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import churchSilhouette from '@/images/church-clipart-2018-6.png'

export default function ContactUsPage() {
  return (
    <main className="">
      <InneHero
        title="Contact Us"
        para="Get in touch with us today! We're here to assist you with any inquiries or support you may need."
      />
      <div className="py-24 bg-white">
        <div className="grid grid-cols-1 items-center px-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {/*  */}
          <div className="mb-4 text-center group relative">
            <Image src={churchSilhouette} alt='Church Silhouette' width={200} height={200} className='w-auto h-[100px] mb-4 text-center mx-auto'/>
            <h3 className="mb-4 font-bold text-xl font-kumbhSans">
              Christ Embassy Dunwoody
            </h3>
            <p className="text-[#858689] font-nunito text-center mx-auto max-w-[200px] text-wrap">
              30 Coleman Street, 350 London, UK EC2R 5AL
            </p>
            <Link
              href="/"
              className="flex items-center justify-center  overflow-hidden my-4"
            >
              <span className="font-semibold text-lg max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-out group-hover:max-w-xs group-hover:mr-3">
                Get In Touch
              </span>
              <ArrowRightCircle className="transition-transform duration-500 group-hover:translate-x-0 link_icon" />
            </Link>
          </div>
          {/*  */}
          {/*  */}
          <div className="mb-4 text-center group relative">
            <Image src={churchSilhouette} alt='Church Silhouette' width={300} height={300} className='w-auto h-[100px] mb-4 text-center mx-auto'/>
            <h3 className="mb-4 font-bold text-xl font-kumbhSans">
              Christ Embassy Dunwoody
            </h3>
            <p className="text-[#858689] font-nunito text-center mx-auto max-w-[200px] text-wrap">
              30 Coleman Street, 350 London, UK EC2R 5AL
            </p>
            <Link
              href="/"
              className="flex items-center justify-center  overflow-hidden my-4"
            >
              <span className="font-semibold text-lg max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-out group-hover:max-w-xs group-hover:mr-3">
                Get In Touch
              </span>
              <ArrowRightCircle className="transition-transform duration-500 group-hover:translate-x-0 link_icon" />
            </Link>
          </div>
          {/*  */}
          {/*  */}
          <div className="mb-4 text-center group relative">
            <Image src={churchSilhouette} alt='Church Silhouette' width={300} height={300} className='w-auto h-[100px] mb-4 text-center mx-auto'/>
            <h3 className="mb-4 font-bold text-xl font-kumbhSans">
              Christ Embassy Dunwoody
            </h3>
            <p className="text-[#858689] font-nunito text-center mx-auto max-w-[200px] text-wrap">
              30 Coleman Street, 350 London, UK EC2R 5AL
            </p>
            <Link
              href="/"
              className="group relative flex items-center justify-center  overflow-hidden my-4"
            >
              <span className="font-semibold text-lg max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-out group-hover:max-w-xs group-hover:mr-3">
                Get In Touch
              </span>
              <ArrowRightCircle className="transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="bg-[#F0F4F7] py-24 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* map */}
          <div>
            <div className="max-w-7xl pb-16">
              <h6 className="uppercase text-[14px] font-kumbhSans font-semibold mb-2">
                Contact Us
              </h6>
              <h1 className="text-navyblue font-kumbhSans font-bold text-[1.8rem] sm:text-[2.63rem] sm:leading-[100%] tracking-normal">
                Get in Touch!
              </h1>
            </div>
            <MapWithMarkers />
          </div>
          {/* map */}
          {/* form */}
          <div>
            <ContactForm />
          </div>
          {/* form */}
        </div>
      </div>
    </main>
  );
}

