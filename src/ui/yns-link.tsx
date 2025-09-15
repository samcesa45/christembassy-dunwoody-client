'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ComponentPropsWithRef } from 'react';

export default function YnsLink(props: ComponentPropsWithRef<typeof Link>) {
  const router = useRouter();
  const strHref = typeof props.href === 'string' ? props.href : props.href.href;

  const conditionalPrefect = () => {
    if (strHref) {
      void router.prefetch(strHref);
    }
  };
  return (
    <Link
      {...props}
      prefetch={false}
      onMouseEnter={(e) => {
        conditionalPrefect();
        return props.onMouseEnter?.(e);
      }}
      onPointerEnter={(e) => {
        conditionalPrefect();
        return props.onPointerEnter?.(e);
      }}
      onTouchStart={(e) => {
        conditionalPrefect();
        return props.onTouchStart?.(e);
      }}
      onFocus={(e) => {
        conditionalPrefect();
        return props.onFocus?.(e);
      }}
    ></Link>
  );
}
