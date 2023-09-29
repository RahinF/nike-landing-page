'use client';

import { arrowRight } from '@/app/assets/icons';
import { bigShoe1 } from '@/app/assets/images';
import Button from '@/app/components/Button';
import ShoeCard from '@/app/components/ShoeCard';
import { shoes, statistics } from '@/app/constants';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState<StaticImageData>(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row justify-center min-h-screen flex-col max-container gap-10 p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-lg font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <div className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival{' '}
          </div>

          <div className="mt-3">
            <span className="text-coral-red">Nike</span> Shoes
          </div>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button
          label="Shop now"
          iconURL={arrowRight}
          alt="arrow right icon"
        />
        <div className="flex flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-bold font-palanquin">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={bigShoeImg}
          alt="big shoe"
          width={610}
          height={500}
          className="object-contain z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={setBigShoeImg}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
