'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
type Item = {
  src: StaticImageData;
  alt?: string;
  cols?: number;
  rows?: number;
};
type Props = {
  items: Item[];
  defaultCols?: number;
  gap?: number;
  rowHeight?: number;
};

const BREAKPOINTS = {
    sm: 640,
    md:900,
    lg:1280
}
export default function MasonryGallery({
  items,
  defaultCols = 4,
  gap = 24,
  rowHeight = 8,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const naturalSizes = useRef<Record<number, { w: number; h: number }>>({});
  const [spans, setSpans] = useState<Record<number, number>>({});
  const [cols, setCols] = useState<number>(defaultCols);

  const updateCols =()=> {
    const w = window.innerWidth;
    if (w < BREAKPOINTS.sm) setCols(1);
    else if (w < BREAKPOINTS.md) setCols(2);
    else if (w < BREAKPOINTS.lg) setCols(3);
    else setCols(defaultCols);
  }
  //responsive columns
  useEffect(() => {
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, [defaultCols]);

  //compute span for a single index
  const computeSpan = (index: number) => {
    const container = containerRef.current;
    if (!containerRef) return;

    const containerWidth = container?.clientWidth;
    if (!containerWidth) return;
    const columnCount = cols;
    const colGap = gap;

    const colWidth =
      (containerWidth - (columnCount - 1) * colGap) / columnCount;
    const itemCols = Math.min(items[index].cols ?? 1, columnCount);
    const img = naturalSizes.current[index];
    if (!img) return;

    // item width in px (including gaps between spanned columns)
    const itemWidth = itemCols * colWidth + (itemCols - 1) * colGap;
    //compute px height from natural aspect ratio
    const itemHeight = Math.round((img.h / img.w) * itemWidth);
    const span = Math.max(1, Math.ceil(itemHeight / rowHeight));

    setSpans((prev) => {
      if (prev[index] === span) return prev;
      return { ...prev, [index]: span };
    });
  };

  //recompute all spans when cols / size change
  useEffect(() => {
    //recompute for those we already have sizes for
    Object.keys(naturalSizes.current).forEach((k) => computeSpan(Number(k)));

    //recompute on container resize
    const ro = new ResizeObserver(() => {
      Object.keys(naturalSizes.current).forEach((k) => computeSpan(Number(k)));
    });

    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [cols, gap, rowHeight]);

  //memoize the grid container's style object to prevent re-creation on every render
  const gridContainerStyle = useMemo(() => ({
    display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridAutoRows: `${rowHeight}px`,
        gap: `${gap}px`,
  }),[cols, gap, rowHeight])

  //call this from next/image onLoadingComplete
  const handleLoad = (
    index: number,
    meta: { naturalWidth: number; naturalHeight: number },
  ) => {
    naturalSizes.current[index] = {
      w: meta.naturalWidth,
      h: meta.naturalHeight,
    };
    computeSpan(index);
  };
  return (
    <div className="w-full" ref={containerRef}>
      <div
        style={gridContainerStyle}
      >
        {items.map((item, i) => {
          const colSpan = Math.min(item.cols ?? 1, cols);
          //if item.rows is provided , use it directly, otherwise fallback to auto span
          const rowSpan = item.rows ?? spans[i] ?? 1;
          return (
            <div
              key={i}
              style={{
                gridColumnEnd: `span ${colSpan}`,
                gridRowEnd: `span ${rowSpan}`,
              }}
              className="relative w-full overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.alt ?? `gallery-${i}`}
                fill
                sizes={
                  cols === 1
                    ? '100vw'
                    : cols === 2
                      ? '(max-width: 900px) 50vw, 33vw'
                      : '(max-width: 1280px) 33vw, 25vw'
                }
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                onLoadingComplete={(meta) => handleLoad(i, meta as any)}
                placeholder="blur"
                loading='lazy'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
