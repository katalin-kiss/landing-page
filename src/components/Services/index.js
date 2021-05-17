import React from 'react';
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesWrapper,
  ServicesP,
} from './ServicesElements';
import { servicesInfo } from '../InfoSection/Data';

const Services = () => {
  const serviceList = servicesInfo;
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon
            type="image/svg+xml"
            data={serviceList.serviceOne.icon}
          />
          <ServicesH2>{serviceList.serviceOne.title}</ServicesH2>
          <ServicesP>{serviceList.serviceOne.paragraph}</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon
            type="image/svg+xml"
            data={serviceList.serviceTwo.icon}
          />
          <ServicesH2>{serviceList.serviceTwo.title}</ServicesH2>
          <ServicesP>{serviceList.serviceTwo.paragraph}</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon
            type="image/svg+xml"
            data={serviceList.serviceThree.icon}
          />
          <ServicesH2>{serviceList.serviceThree.title}</ServicesH2>
          <ServicesP>{serviceList.serviceThree.paragraph}</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
