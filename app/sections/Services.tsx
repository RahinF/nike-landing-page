import ServiceCard from '@/app/components/ServiceCard';
import { services } from '@/app/constants';

const Services = () => {
  return (
    <div className="max-container flex justify-center sm:flex-wrap sm:flex-row flex-col gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          {...service}
        />
      ))}
    </div>
  );
};

export default Services;
