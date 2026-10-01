import React, { useContext, useEffect } from 'react';
import '../styles/Clients.scss';
import { DataContext } from '../context/DataContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Clients() {
  const { data }: any = useContext(DataContext);

  const clientsData = data?.clients ? data.clients : [];

  useEffect(() => {
    console.log('-----> Data', clientsData);
  }, []);

  if (clientsData?.length > 0) {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {clientsData.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client-container">
              <img
                src={client.logoUri}
                alt={client.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}

export default Clients;
