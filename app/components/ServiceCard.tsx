import Image from 'next/image';

interface Props {
  imgURL: any;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imgURL, label, subtext }: Props) => {
  return (
    <div
      data-testid="service-card"
      className="flex-1 sm:min-w-[350px] w-full rounded-2xl shadow-3xl px-10 py-12"
    >
      <div className="flex gap-2.5 items-center mt-5">
        <div className="shrink-0 w-10 h-10 flex justify-center items-center bg-coral-red rounded-full">
          <Image
            src={imgURL}
            alt={label}
            width={24}
            height={24}
          />
        </div>
        <h3 className="font-palanquin text-3xl leading-normal font-bold">
          {label}
        </h3>
      </div>

      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
