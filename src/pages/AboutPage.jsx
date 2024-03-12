import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import Layout from '../layout/Layout';
import ImageSlider from '../components/ImageSlider'


function AboutPage() {
  const { data } = useContext(DataContext);

  useEffect(() => {
    if (data) {
      document.title = `${data.aboutPage.title} | ${data.name} ${data.lastName}`;
    }
  }, [data]);

  if (!data) {
    return <p>Cargando...</p>
  }

  return (
    <Layout>
      <ImageSlider
        title={data.aboutPage.title}
        text={data.aboutPage.subTitle}
        pcImage={data.mainHeaderPc}
        moImage={data.mainHeaderMo}
        sliderSize="small"
        opacity={true}
      />
      <main className='about'>
        <section>
          <img className='avatar' src={data.aboutPage.avatarImg} alt={data.aboutPage.title} />
          <div className="main-txt">
            <h1>{data.aboutPage.infoTextTitle}</h1>
            <p>{data.aboutPage.infoText}</p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default AboutPage
