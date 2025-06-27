import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

interface CarouselImageProps {
  images: string[];
  previousOnClick?: () => void;
  nextOnClick?: () => void;
}

const CarouselImage = ({
  images,
  previousOnClick,
  nextOnClick,
}: CarouselImageProps) => (
  <div data-testid='carousel-image'>
    <Carousel className='w-full md:max-w-xs'>
      <CarouselContent>
        {images.map((imageFile, index) => (
          <CarouselItem key={index}>
            <div className='flex items-center justify-center'>
              <Image
                src={`/${imageFile}`}
                className='rounded-4xl'
                alt={imageFile}
                width={300}
                height={300}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className='left-6'
        variant='ghost'
        onClick={previousOnClick}
      />

      <CarouselNext className='right-6' variant='ghost' onClick={nextOnClick} />
    </Carousel>
  </div>
);

export default CarouselImage;
